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
export class EmpScanService {
  private urlSegement = {
    GetListEmpCheckIn: "/EmpScan/GetListEmpCheckIn",
    GetListMachineCheckIn: "/EmpScan/GetListMachineCheckIn",
    GetEmpsByLine: "/EmpScan/GetEmpsByLine",
    GetWOsByLine: "/EmpScan/GetWOsByLine",
    GetStageIDByWO: "/EmpScan/GetStageIDByWO",
    GetMulEmpsByLine: "/EmpScan/GetMulEmpsByLine",
    DeleteEmpCheckIn: "/EmpScan/DeleteEmpCheckIn",
    DeleteMachineCheckIn: "/EmpScan/DeleteMachineCheckIn",
    GetEmpByQRCode: "/EmpScan/GetEmpByQRCode",
    GetMachineByQRCode: "/EmpScan/GetMachineByQRCode",
    SaveInEmpByQRCode: "/EmpScan/SaveInEmpByQRCode",
    UpdateEmpCheckIn: "/EmpScan/UpdateEmpCheckIn",
    SaveMachineByQRCode: "/EmpScan/SaveMachineByQRCode",
    GetWODocNoListByLine: "/EmpScan/GetWODocNoListByLine",
    GetMachineInsByLine: "/EmpScan/GetMachineInsByLineV2",
    UpdateMachineInsByLine: "/EmpScan/UpdateMachineInsByLine"
  };
  constructor(private http: HttpClient, private apiService: ApiService) {}
  
  async GetListEmpCheckIn(typeOfScanner: any, userName: any, woDocNo: any): Promise<any> {
    const params = {
      woDocNo : woDocNo
    };
    const res = await this.apiService.post(this.urlSegement.GetListEmpCheckIn, params);
    return res;
  }

  async GetListMachineCheckIn(typeOfScanner: any, userName: any, woDocNo: any): Promise<any> {
    const params = {
      woDocNo : woDocNo
    };
    const res = await this.apiService.post(this.urlSegement.GetListMachineCheckIn, params);
    return res;
  }

  async GetEmpsByLine(userName: any, woDocNo: any): Promise<any> {
    const params = {
      userName : userName,
      woDocNo : woDocNo
    };
    const res = await this.apiService.post(this.urlSegement.GetEmpsByLine, params);
    return res;
  }
  async GetWOsByLine(userName: any): Promise<any> {
    const params = {
      userName : userName
    };
    const res = await this.apiService.get(this.urlSegement.GetWOsByLine, params);
    return res;
  }
  async GetStageIDByWO(woDocNo: any): Promise<any> {
    const params = {
      woDocNo : woDocNo
    };
    const res = await this.apiService.post(this.urlSegement.GetStageIDByWO, params);
    return res;
  }
  async GetMulEmpsByLine(): Promise<any> {
    const params = {
    };
    const res = await this.apiService.post(this.urlSegement.GetMulEmpsByLine, params);
    return res;
  }
  async DeleteEmpCheckIn(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.DeleteEmpCheckIn, params);
    return res;
  }

  async DeleteMachineCheckIn(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.DeleteMachineCheckIn, params);
    return res;
  }

  async GetEmpByQRCode(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.GetEmpByQRCode, params);
    return res;
  }

  async GetMachineByQRCode(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.GetMachineByQRCode, params);
    return res;
  }

  async SaveInEmpByQRCode(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.SaveInEmpByQRCode, params);
    return res;
  }

  async SaveMachineByQRCode(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.SaveMachineByQRCode, params);
    return res;
  }

  async UpdateEmpCheckIn(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.UpdateEmpCheckIn, params);
    return res;
  }

  async GetWODocNoListByLine(userName: any): Promise<any> {
    const params = {
      userName : userName
    };
    const res = await this.apiService.get(this.urlSegement.GetWODocNoListByLine, params);
    
    return res;
  }

  async GetMachineInsByLine(userName: any, fromDate: any, toDate: any, autoID: any){
    const params = {
      userName: userName,
      fromDate: fromDate,
      toDate: toDate,
      autoID: autoID
    }
    
    const res = await this.apiService.post(this.urlSegement.GetMachineInsByLine, params);

    return res;
  }

  async UpdateMachineInsByLine(data: any = []){
    const params = {
      data: data
    }
    const res = await this.apiService.post(this.urlSegement.UpdateMachineInsByLine, params);

    return res;
  }
}
