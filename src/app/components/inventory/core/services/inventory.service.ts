import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { promise } from "selenium-webdriver";
import { ApiService } from 'src/app/shared/services';

@Injectable({
  providedIn: "root",
})
export class InventoryService {
  private urlSegement = {
    GetSoSach: "/Inventory/GetSoSach",
    GetKK_Update: "/Inventory/GetKK_Update",
    DeleteKiemKe: "/Inventory/DeleteKK",
    FilterInventories: "/Inventory/FilterInventories",
    getInformation: "/Inventory/getInformation",
    Load_KK: "/Inventory/Load_KK",
    GetVtByCode : "/Warehouse/GetVtByCode",
    UpdateQty_KK: "/Inventory/UpdateQty_KK",
    GetKiemKeCt: "/Inventory/GetKiemKeCt"
  };
  constructor(private http: HttpClient, private apiService: ApiService) {}
  
 
  async GetSoSach(Item :any ={}): Promise<any> {
    const params = {
      item : Item
    };
    const res = await this.apiService.post(this.urlSegement.GetSoSach, params);
    return res;
  }
  async GetKK_Update(stt: string): Promise<any> {
    const params = {
      STT : stt
    };
    const res = await this.apiService.get(this.urlSegement.GetKK_Update, params);
    return res;
  }
  async DeleteKiemKe(stt: string): Promise<any> {
    const params = {
      STT : stt
    };
    const res = await this.apiService.get(this.urlSegement.DeleteKiemKe, params);
    return res;
  }
  async FilterInventories(member_Id: string,keyword: string): Promise<any> {
    const params = {
      MEMBER_ID : member_Id,
      KEYWORD : keyword
    };
    const res = await this.apiService.get(this.urlSegement.FilterInventories, params);
    return res;
  }
  async getInformation(stt : string): Promise<any> {
    const params = {
      STT : stt
    };
    const res = await this.apiService.get(this.urlSegement.getInformation, params);
    return res;
  }
  async Load_KK(Item :any ={}): Promise<any> {
    const params = {
      item : Item
    };
    const res = await this.apiService.post(this.urlSegement.Load_KK, params);
    return res;
  }

  async UpdateQty_KK(Item :any ={}): Promise<any> {
    const params = {
      item : Item
    };
    const res = await this.apiService.post(this.urlSegement.UpdateQty_KK, params);
    return res;
  }
  async GetKiemKeCt(stt: string): Promise<any> {
    const params = {
      STT : stt
    };
    const res = await this.apiService.get(this.urlSegement.GetKiemKeCt, params);
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
