import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize, shareReplay } from 'rxjs/operators';

/** Đặt header này lên request để bỏ qua dedupe (khi thực sự cần bắn lặp). */
export const SKIP_DEDUPE_HEADER = 'X-No-Dedupe';

/** Header mang idempotency key, để server nhận diện 2 request là cùng 1 thao tác. */
export const IDEMPOTENCY_KEY_HEADER = 'X-Idempotency-Key';

/**
 * Gộp các POST giống hệt nhau đang cùng lúc "bay" thành 1 request duy nhất.
 *
 * Đây là lưới an toàn chống double-submit ở tầng HTTP: khi user bấm Lưu / Duyệt / Xoá
 * nhiều lần liên tiếp thì chỉ request đầu tiên thực sự đi ra server, các lần bấm sau
 * dùng chung kết quả (kể cả kết quả lỗi) của chính request đó.
 *
 * Giới hạn: chỉ chặn được khi request đầu CÒN đang bay. Bấm lại sau khi nó đã xong thì
 * phải dựa vào guard `if (this.submitting) return;` trong component và idempotency key.
 */
@Injectable()
export class DuplicateRequestInterceptor implements HttpInterceptor {

  private inFlight = new Map<string, Observable<HttpEvent<any>>>();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const key = this.buildKey(request);
    if (!key) {
      return next.handle(request);
    }

    const existing = this.inFlight.get(key);
    if (existing) {
      console.log(`[DEDUPE] Bỏ qua request trùng đang bay: ${request.urlWithParams}`);
      return existing;
    }

    // finalize PHẢI đứng trước shareReplay: để nó bắn khi source complete/error,
    // chứ không phải khi subscriber cuối cùng unsubscribe.
    const shared = next.handle(request).pipe(
      finalize(() => this.inFlight.delete(key)),
      shareReplay({ bufferSize: 1, refCount: false })
    );

    this.inFlight.set(key, shared);
    return shared;
  }

  /** Trả về null nếu request này không nên dedupe. */
  private buildKey(request: HttpRequest<any>): string | null {
    if (request.method !== 'POST') {
      return null;
    }
    if (request.headers.has(SKIP_DEDUPE_HEADER)) {
      return null;
    }

    const body = request.body;

    // Upload file / binary: không serialize được, và 2 lần upload giống nhau vẫn là 2 thao tác hợp lệ.
    if (body instanceof FormData || body instanceof Blob || body instanceof ArrayBuffer) {
      return null;
    }

    let serialized: string;
    if (body === null || body === undefined) {
      serialized = '';
    } else if (typeof body === 'string') {
      serialized = body; // ApiService.post() đã JSON.stringify sẵn
    } else {
      try {
        serialized = JSON.stringify(body);
      } catch {
        return null; // body có vòng lặp tham chiếu -> không dedupe
      }
    }

    const idempotencyKey = request.headers.get(IDEMPOTENCY_KEY_HEADER) || '';
    return `${request.method}|${request.urlWithParams}|${idempotencyKey}|${serialized}`;
  }
}
