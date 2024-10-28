import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { ApiParameter } from '../api-params';

@Injectable({
  providedIn: 'root'
})
export class DataToolService {

  private urlSegement = {
    SQLGetDataTable: '/DataTool/SQLGetDataTable',
    SQLGetNameByCode: '/DataTool/SQLGetNameByCode',
    SQLGetDataRowByID: '/DataTool/SQLGetDataRowByID',
    SQLDelete: '/DataTool/SQLDelete',
    SQLUpdate: '/DataTool/SQLUpdate',
    SQLCheckExist: '/DataTool/SQLCheckExist'
  };

  constructor(
    private apiService: ApiService,
  ) { }

  async SQLGetDataTable(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.SQLGetDataTable, body);
    return res;
  }
  async SQLGetNameByCode(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.SQLGetNameByCode, body);
    return res;
  }
  async SQLGetDataRowByID(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.SQLGetDataRowByID, body);
    return res;
  }
  async SQLGetDataRowByID_1(strTableName: string, strColumnID: string, strValue: string)
    : Promise<any> {

    const apiParameter = new ApiParameter();
    apiParameter.strTableName = strTableName;
    apiParameter.strColumnID = strColumnID;
    apiParameter.strValue = strValue;
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.SQLGetDataRowByID, body);
    return res;
  }

  async SQLDelete(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.SQLDelete, body);
    return res;
  }
  async SQLUpdate(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.SQLUpdate, body);
    return res;
  }
  async SQLCheckExist(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.SQLCheckExist, body);
    return res;
  }

}
