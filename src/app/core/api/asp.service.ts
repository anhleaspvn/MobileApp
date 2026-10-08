import { Injectable } from "@angular/core";
import { ApiService } from './api.service';
import { ApiParameter } from "src/app/core/api/api-params";
import { IdentityService } from '../auth/identity.service';
import { Observable } from "rxjs";
import { HttpEvent } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DmType } from "../../shared/types/dm-type";

@Injectable({
  providedIn: "root",
})
export class aspService {
  private urlSegement = {
    getFunctions: "/aspCore/GetMobileMenus",
    getDmTypes: "/aspCore/GetListDmType",
    DowloadHDSD_Blod: "/aspCore/DowloadHDSD_Blod",
  };

  constructor(
    private apiService: ApiService,
    private identityService: IdentityService
  ) {}

  async getFunctions(softid: string): Promise<any> {
    const res = await this.apiService.get(this.urlSegement.getFunctions, {
      s: softid,
    });
    return res;
  }


  getDmTypes(type: string): Promise<DmType[]> {
    const res = this.apiService.get(this.urlSegement.getDmTypes, {type:type});
    return res as Promise<DmType[]>;
  }

  DowloadHDSD_Blod(): Observable<HttpEvent<Blob>> {
    let sw;
    this.identityService.currentSoftware.subscribe((res) => (sw = res));
    const body = {
      strFileName_PDF: sw + "_HDSD",
    };
    return this.apiService.request(this.urlSegement.DowloadHDSD_Blod, {
      method: "POST",
      body: JSON.stringify(body),
      // headers: {},
      reportProgress: true,
      responseType: "blob",
    });
  }
}

export interface AppFunctions {
  title: string;
  routerLink: string;
  params?: string;
  fixedTop?: boolean;
  displayOrder?: number;
  iconName?: string;
  isMaterialIcon?: boolean;
  object_ID: string;
}
