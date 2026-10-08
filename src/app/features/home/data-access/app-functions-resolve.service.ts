import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommandType } from 'src/app/shared/types';
import { ApiParameter } from 'src/app/core/api/api-params';
import { environment } from 'src/environments/environment';

import { AppFunctions, aspService } from 'src/app/core/api';
import { IdentityService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class AppFunctionsResolveService implements Resolve<AppFunctions[]> {

  constructor(
    private lqService: aspService,
    private identityService: IdentityService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AppFunctions[]> | Promise<AppFunctions[]> {
    let s;
    this.identityService.currentSoftware.subscribe(res=> s= res)
    return this.lqService.getFunctions(s);
  }

}
