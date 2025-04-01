/* eslint-disable curly */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ApiService } from "./api.service";

export interface aspPermission {
  member_ID: string;
  object_ID: string;
  allow_Access: boolean;
  allow_New: boolean;
  allow_Edit: boolean;
  allow_Delete: boolean;
  allow_View: boolean;
}
@Injectable({
  providedIn: "root",
})

export class aspPermissionsService {
  private urlSegement = {
    GetPermissionByObject: "/aspCore/GetPermissionByObject",
  };

  public permissonSubject: Subject<aspPermission> = new Subject();

  constructor(private apiService: ApiService) {}

  async GetPermission(oid: string): Promise<aspPermission> {
    if (!oid) return Promise.reject("Object ID is requierd");
    const body = {
      oid: oid,
    };
    const res: aspPermission[] = await this.apiService.get(
      this.urlSegement.GetPermissionByObject,
      body
    );
    this.permissonSubject.next(res[0] as aspPermission);
    return res[0] as aspPermission;
  }
}