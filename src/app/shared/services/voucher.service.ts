import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { enuEdit } from "../../helpers";
import { VoucherInfo } from "../../models/voucher";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VoucherService {
  private urlSegement = {
    GetVoucher: "/Voucher/GetVoucher",
    SQLDeleteCt: "/Voucher/SQLDeleteCt",
    SaveVoucher: "/Voucher/SaveVoucher",
    DuyetVoucher: "/Voucher/DuyetVoucher",
    GetListVoucher : "/Voucher/GetListVoucher",
    GetListMa_Lo: "/Voucher/GetListMa_Lo",
    DowloadPDF: "/Voucher/DowloadPDF",
    DowloadPDF_Blod: "/Voucher/DowloadPDF_Blod",
    UpdateChuKy: "/Voucher/UpdateChuKy",
    UpdateChuKy_NV: "/Voucher/UpdateChuKy_NV" 
  };
  constructor(private http: HttpClient, private apiService: ApiService) {}

  async getVoucher(strStt: string, strMa_Ct: string): Promise<any> {
    const params = {
      strStt: strStt,
      strMaCt: strMa_Ct,
    };

    const res = await this.apiService.get(this.urlSegement.GetVoucher, params);
    return res;
  }
  async UpdateChuKy(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    debugger
    const res = await this.apiService.post(this.urlSegement.UpdateChuKy, body);
    return res;
  }
  async UpdateChuKy_NV(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    debugger
    const res = await this.apiService.post(this.urlSegement.UpdateChuKy_NV, body);
    return res;
  }
  async SQLDeleteCt(strStt: string, strMa_Ct: string): Promise<any> {
    const body = {
      strStt: strStt,
      strMa_Ct: strMa_Ct,
    };
    const res = await this.apiService.post(this.urlSegement.SQLDeleteCt, body);
    return res;
  }

  async saveVoucher(voucher: VoucherInfo, enuEdit: enuEdit): Promise<any> {
    const body = {
      voucher: voucher,
      enuEdit: enuEdit,
    };
    const res = await this.apiService.post(this.urlSegement.SaveVoucher, body);
    return res;
  }

  async GetListVoucher(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    const res = await this.apiService.post(this.urlSegement.GetListVoucher, body);
    return res;
  }

  async GetListMa_Lo(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    const res = await this.apiService.post(this.urlSegement.GetListMa_Lo, body);
    return res;
  }

  async DuyetVoucher(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    const res = await this.apiService.post(this.urlSegement.DuyetVoucher, body);
    return res;
  }

  async DowloadPDF(itemModel: any = {}): Promise<any> {
    const body = {
      itemCt: itemModel,
    };
    const res = await this.apiService.post(this.urlSegement.DowloadPDF, body);
    return res;
  }

   DowloadPDF_Blod(itemModel: any = {}): Observable<HttpEvent<Blob>> {
    const body = {
      itemCt: itemModel,
    };
    return this.apiService.request(this.urlSegement.DowloadPDF_Blod, {
      method: "POST",
      body: JSON.stringify(body),
      reportProgress: true,
      responseType: "blob",
    });
  }

  

}
