import { Injectable } from '@angular/core';
import { VoucherInfo } from 'src/app/models/voucher';
import { ApiService } from 'src/app/shared/services';
import {enuEdit} from '../../../../helpers';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private urlSegement = {   
    SaveSO : "/Order/SaveSO",
    GetDMTHUE : "/Order/GetDMTHUE",
    GetVtByCode : "/Order/GetVtByCode",
    GetListNhanVienBoPhan : "/Order/GetListNhanVienBoPhan",
    GetlistMa_Sp : "/Order/GetlistMa_Sp",
    GetListProductForSale : "/Order/GetListProductForSale",
  }

  constructor(
    private apiService: ApiService,
  ) { }

  async SaveSO(voucher: VoucherInfo, enuEdit: enuEdit): Promise<any> {
    const body = {
      voucher: voucher,
      enuEdit: enuEdit,
    };
    const res = await this.apiService.post(this.urlSegement.SaveSO, body);
    return res;
  }

  async GetDMTHUE(type: number): Promise<any> {
    const body = {
      type
    };
    const res = await this.apiService.post(this.urlSegement.GetDMTHUE, body);
    return res;
  }

  async GetVtByCode(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    const res = await this.apiService.post(this.urlSegement.GetVtByCode, body);
    return res;
  }

  async GetListNhanVienBoPhan(): Promise<any> {
    const body = {
    };
    const res = await this.apiService.post(this.urlSegement.GetListNhanVienBoPhan, body);
    return res;
  }

  async GetlistMa_Sp(): Promise<any> {
    const body = {
    };
    const res = await this.apiService.post(this.urlSegement.GetlistMa_Sp, body);
    return res;
  }

  async GetListProductForSale(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    const res = await this.apiService.post(this.urlSegement.GetListProductForSale, body);
    return res;
  }
}
