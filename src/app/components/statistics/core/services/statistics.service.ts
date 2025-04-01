import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services';
import {enuEdit} from '../../../../helpers';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private urlSegement = {
    
    SaveThongKe : "/Statistics/SaveThongKeSx",
    GetListStatistics: "/Statistics/GetListStatistics",
    GetListNhaMay: "/Statistics/GetListNhaMay",
    GetListPhanXuong: "/Statistics/GetListPhanXuong",
    GetDetailStatistics: "/Statistics/GetDetailStatistics",
    GetDetailStatisticsCongDoanDt: "/Statistics/GetDetailStatisticsCongDoanDt",
    DeleteStatistics: "/Statistics/DeleteStatistics",
    GetDanhMucThongKe: "/Statistics/GetDanhMucThongKe",
    GetListAQL: "/Statistics/GetListAQL",
    Change_AQL: "/Statistics/Change_AQL",
  }
  constructor(
    private apiService: ApiService,
  ) { }

  async SaveThongKe(model: any, enuEdit: enuEdit): Promise<any> {
    const body = {
      item: model,
      enuEdit: enuEdit,
    };
    const res = await this.apiService.post(this.urlSegement.SaveThongKe, body);
    return res;
  }

  async GetListStatistics(model: any): Promise<any> {
    const body = {
      StatisticsParams: model,
    };
    const res = await this.apiService.post(this.urlSegement.GetListStatistics, body);
    return res;
  }

  async GetDetailStatistics(model: any): Promise<any> {
    const body = {
      StatisticsParams: model,
    };
    const res = await this.apiService.post(this.urlSegement.GetDetailStatistics, body);
    return res;
  }

  async GetDetailStatisticsCongDoanDt(model: any): Promise<any> {
    const body = {
      StatisticsParams: model,
    };
    const res = await this.apiService.post(this.urlSegement.GetDetailStatisticsCongDoanDt, body);
    return res;
  }

  async DeleteStatistics(model: any): Promise<any> {
    const body = {
      StatisticsParams: model,
    };
    const res = await this.apiService.post(this.urlSegement.DeleteStatistics, body);
    return res;
  }

  async GetDanhMucThongKe(model: any): Promise<any> {
    const body = {
      StatisticsParams: model,
    };
    const res = await this.apiService.post(this.urlSegement.GetDanhMucThongKe, body);
    return res;
  }

  async Change_AQL(model: any): Promise<any> {
    const body = {
      StatisticsParams: model,
    };
    const res = await this.apiService.post(this.urlSegement.Change_AQL, body);
    return res;
  }

  async GetListNhaMay(): Promise<any> {
    const res = await this.apiService.get(this.urlSegement.GetListNhaMay);
    return res;
  }
  async GetListPhanXuong(): Promise<any> {
    const res = await this.apiService.get(this.urlSegement.GetListPhanXuong);
    return res;
  }

  async GetListAQL(): Promise<any> {
    const res = await this.apiService.get(this.urlSegement.GetListAQL);
    return res;
  }
}
