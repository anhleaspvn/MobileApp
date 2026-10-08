import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";

import { UtilityService } from "../../shared/utils/utility.service";
import { NetworkService } from "../network/network.service";
import { Observable } from "rxjs";
import { IDEMPOTENCY_KEY_HEADER } from "../interceptors/duplicate-request.interceptor";

export interface OptionsRequest {
  method?: string,
  body?: any,
  params?: any,
  headers?: any,
  withCredentials?: boolean,
  reportProgress?: boolean,
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private _utilityService: UtilityService,
    private _networkService: NetworkService,
    private router: Router
  ) {}

  //#region Methods

  async post(
    path: string,
    model: any = Object.create(null),
    options: any = Object.create(null),
    params: object = Object.create({})
  ): Promise<any> {
    try {
      // const isOnline = await this._networkService.getNetworkStatusPromise();
      // if (!isOnline) {
      //   this._utilityService.showAlert('Mất kết nối. Vui lòng kiểm tra lại kết nối mạng.');
      //   return Promise.reject(null);
      // }
      
      const url = `${environment.baseUrl}${path}`,
        body = !options.formData ? JSON.stringify(model) : model;
      const opts = this.setOptions(params, options);
      const res = await this.http.post(url, body, opts).toPromise();
      console.log(`[API POST] ${path} - Response:`, res);
      return res;
    } catch (err) {
      this.formatErrors(err);
      return Promise.reject(err);
    }
  }

  async get(
    path: string,
    params: any = Object.create(null),
    options: any = Object.create(null)
  ): Promise<any> {
    try {
      const url = `${environment.baseUrl}${path}`;

      const opts = this.setOptions(params, options);

      const res = await this.http.get(url, opts).toPromise();
      console.log(`[API GET] ${path} - Response:`, res);
      return res;
    } catch (err) {
      this.formatErrors(err);
      return Promise.reject(err);
    }
  }

  request(
    path: string,
    options: OptionsRequest = {
      method: "GET",
      body: null,
      params: Object.create(null),
    }
  ): Observable<any> {
    const url = `${environment.baseUrl}${path}`;

    const opts: any = Object.assign(
      {},
      {
        reportProgress: false,
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      },
      options
    );

    const params = new HttpParams({ fromObject: opts.params });

    const headers = new HttpHeaders(opts.headers);

    return this.http.request(
      new HttpRequest(
        opts.method,
        url,
        opts.body,
        Object.assign({}, opts, {
          headers: headers,
          params: params,
          //withCredentials: true
        })
      )
    );
  }

  //#endregion Methods

  //#region Private Functions

  private setOptions(
    params: any = Object.create(null),
    options: any = Object.create(null)
  ) {
    const _opts = Object.assign({}, { withCredentials: true }, options);

    return Object.assign({}, _opts, {
      headers: new HttpHeaders(this.buildHeaders(options)),
      params: new HttpParams({ fromObject: params }),
    });
  }

  /**
   * Gộp headers mặc định với headers do caller truyền vào.
   * Trước đây options.headers ghi đè hẳn defaults, làm mất Content-Type/Accept.
   */
  private buildHeaders(options: any = Object.create(null)) {
    const defaultHeaders = options.formData
      ? {}
      : {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        };

    const merged: any = Object.assign({}, defaultHeaders, options.headers || {});

    // Idempotency key: để server nhận diện 2 request là cùng 1 thao tác lưu và
    // không tạo bản ghi trùng khi user bấm Lưu lại sau khi mạng lỗi/timeout.
    if (options.idempotencyKey) {
      merged[IDEMPOTENCY_KEY_HEADER] = options.idempotencyKey;
    }

    return merged;
  }

  private formatErrors(err: HttpErrorResponse) {
    console.error(err);
    // if(err.error instanceof ErrorEvent){

    // }
    const msg =
      err.error && typeof err.error === "object" && err.error.hasOwnProperty("error_description")
        ? err.error.error_description
        : (typeof err.error === "string" ? err.error : JSON.stringify(err.error));
    switch (err.status) {
      // case 401:
      //   this.router.navigateByUrl('/login');
      //   break;
      case 0:
        this._utilityService.showToast(
          "Kết nối hệ thống thất bại",
          this._utilityService.toastType.error
        );
        break;
      case 406:
        this._utilityService.showToast(msg);
        break;
      default:
        //this._utilityService.showToast(msg, this._utilityService.toastType.error);
        break;
    }
    //return Promise.reject(err);
  }

  //#endregion Private Functions
}
