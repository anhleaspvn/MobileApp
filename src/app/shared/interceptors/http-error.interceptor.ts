import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IdentityService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private identityService: IdentityService,
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      switch (err.status) {
        case 401:
          this.identityService.purgeAuth();
          //location.reload(true);
          this.router.navigateByUrl('/login');
          break;
        case 403:
          this.router.navigateByUrl('/forbidden');
          break;
      }
      //const error = err.error.message || err.statusText;
      return throwError(err);
    }))
  }
}