import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SQLExecService {

  private urlSegement = {
    Execute: '/SQLExec/Execute',
    ExecuteReturnDt: '/SQLExec/ExecuteReturnDt',
    ExecuteReturnDs: '/SQLExec/ExecuteReturnDs',
    ExecuteReturnValue: '/SQLExec/ExecuteReturnValue',
  }
  constructor(
    private apiService: ApiService,
  ) { }

  async Execute(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.Execute, body);
    return res;
  }

  async ExecuteReturnDs(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.ExecuteReturnDs, body);
    return res;
  }

  async ExecuteReturnDt(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.ExecuteReturnDt, body);
    return res;
  }

  async ExecuteReturnValue(apiParameter: any)
    : Promise<any> {
    const body = {
      apiParams: apiParameter,
    };
    const res = await this.apiService.post(this.urlSegement.ExecuteReturnValue, body);
    return res;
  }

  async strExecuteReturnValue(strSQLExec: any)
    : Promise<any> {
    const body = {
      strSQLExec: strSQLExec,
    };
    const res = await this.apiService.post(this.urlSegement.ExecuteReturnValue, body);
    return res;
  }

}
