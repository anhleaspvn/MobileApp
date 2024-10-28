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

import { UtilityService } from "../utility.service";
import { NetworkService } from "../network.service";
import { Observable } from "rxjs";

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
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    };

    const _opts = Object.assign(
      {},
      {
        headers: options.formData ? {} : headers,
        withCredentials: true,
      },
      options
    );

    return Object.assign({}, _opts, {
      headers: new HttpHeaders(_opts.headers),
      params: new HttpParams({ fromObject: params }),
    });
  }

  private formatErrors(err: HttpErrorResponse) {
    console.error(err);
    // if(err.error instanceof ErrorEvent){

    // }
    const msg =
      err.error && err.hasOwnProperty("error_description")
        ? err.error.error_description
        : JSON.stringify(err.error);
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
