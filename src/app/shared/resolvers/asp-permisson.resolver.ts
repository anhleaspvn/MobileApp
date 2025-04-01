/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from "@angular/core";

import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { AppConfig } from "src/app/helpers";

import {
  aspPermission,
  aspPermissionsService,
} from "../services/asp-permissions.service";

@Injectable({
  providedIn: "root",
})
export class PermissionResolver implements Resolve<aspPermission> {
  constructor(
    private router: Router,
    private permissionsService: aspPermissionsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<aspPermission> | Promise<aspPermission> | aspPermission {
    const oid = route.queryParams[AppConfig.OBJ_ID_QUERY_KEY] as string;
    return this.permissionsService.GetPermission(oid);
  }
}
