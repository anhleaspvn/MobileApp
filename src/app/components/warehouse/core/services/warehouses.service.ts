import { Injectable } from '@angular/core';
import { VoucherInfo } from 'src/app/models/voucher';
import { ApiService } from 'src/app/shared/services';
import {enuEdit} from '../../../../helpers';

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {
  private urlSegement = {
    Save_KiemKe: '/Warehouse/Create_KiemKe',
    SaveVoucher_Inventory : "/Warehouse/SaveVoucher_Inventory",
    Save : "/Warehouse/Save",
    GetDmVt: "/Warehouse/GetDmVt",
    GetDmKho: "/Warehouse/GetDmKho",
    GetDmKhoDetail: "/Warehouse/GetDmKhoDetail",
    GetDmVtDetail: "/Warehouse/GetDmVtDetail",
    GetVtByCode: "/Warehouse/GetVtByCode",
    GetListForvoucher : "/Warehouse/GetListForvoucher",
  }

  constructor(
    private apiService: ApiService,
  ) { }

  async GetListForvoucher(filterParams: any): Promise<any> {
    const body = {
      filterParams: filterParams
    }
    const res = await this.apiService.post(this.urlSegement.GetListForvoucher, body);
    return res;
  }


  async getDmVt(filterParams: any): Promise<any> {
    const body = {
      filterParams: filterParams
    }
    const res = await this.apiService.post(this.urlSegement.GetDmVt, body);
    return res;
  }

  async getDmVtDetail(filterParams: any): Promise<any> {
    const body = {
      filterParams: filterParams
    }
    const res = await this.apiService.post(this.urlSegement.GetDmVtDetail, body);
    return res;
  }


  async getDmKho(filterParams: any): Promise<any> {
    const body = {
      filterParams: filterParams
    }
    const res = await this.apiService.post(this.urlSegement.GetDmKho, body);
    return res;
  }

  async getDmKhoDetail(filterParams: any): Promise<any> {
    const body = {
      filterParams: filterParams
    }
    const res = await this.apiService.post(this.urlSegement.GetDmKhoDetail, body);
    return res;
  }


  async Save_KiemKe(filterParams: any, lstCt: any[]): Promise<any> {
    const body = {
      filterParams: filterParams,
      lstCt: lstCt
    };
    
    const res = await this.apiService.post(this.urlSegement.Save_KiemKe, body);
    return res;
  }

  async save(voucher: VoucherInfo, enuEdit: enuEdit): Promise<any> {
    const body = {
      voucher: voucher,
      enuEdit: enuEdit,
    };
    const res = await this.apiService.post(this.urlSegement.Save, body);
    return res;
  }

  async saveVoucher_Inventory(voucher: VoucherInfo, enuEdit: enuEdit): Promise<any> {
    const body = {
      voucher: voucher,
      enuEdit: enuEdit,
    };
    const res = await this.apiService.post(this.urlSegement.SaveVoucher_Inventory, body);
    return res;
  }

  async GetVtByCode(filterParams: any): Promise<any> {
    const body = {
      filterParams
    };
    const res = await this.apiService.post(this.urlSegement.GetVtByCode, body);
    return res;
  }

}
