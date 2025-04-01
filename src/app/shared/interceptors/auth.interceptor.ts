import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IdentityService, StorageService } from '../services';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private storageService: StorageService,
        private identityService: IdentityService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.storageService.get(environment.token.key))
            .pipe(mergeMap(token => {
                if (token) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${token}`
                        },
                        withCredentials: true
                    });
                }

                this.identityService.currentMaDvCs.subscribe(str => {
                    if (str) {
                        request = request.clone({
                            setParams: {
                                ma_data: str
                            }
                        });
                    }
                });
                return next.handle(request);
            }));
    }
}