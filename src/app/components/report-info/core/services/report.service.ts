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
export class ReportService {
  private urlSegement = {
    GetReport: "/Report/GetReport",
    GetMobileReport: "/Report/GetMobileReport" ,
    GetColumnReport: "/Report/GetColumnReport",
    GetData: "/Report/GetData",

  };
  constructor(private http: HttpClient, private apiService: ApiService) {}
  
  async GetReport(Report_Id: string, Software_Id: string): Promise<any> {
    const params = {
      Report_Id: Report_Id,
      Software_Id: Software_Id,
    };
    
    const res = await this.apiService.get(this.urlSegement.GetReport, params);
    return res;
  }

  async GetMobileReport(Software_Id: string): Promise<any> {
    const params = {
      Software_Id: Software_Id,
    };
    
    const res = await this.apiService.get(this.urlSegement.GetMobileReport, params);
    return res;
  }

  async GetColumnReport(Report_Id: string): Promise<any> {
    const params = {
      Report_Id: Report_Id
    };
    const res = await this.apiService.get(this.urlSegement.GetColumnReport, params);
    return res;
  }
 
  
  async GetData(Item :any ={}): Promise<any> {
    const params = {
      item : Item
    };
    const res = await this.apiService.post(this.urlSegement.GetData, params);
    return res;
  }


}
