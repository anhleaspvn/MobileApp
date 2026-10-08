import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { IdentityService } from '../auth/identity.service';

@Injectable({
  providedIn: 'root'
})
export class AuthResolveService implements Resolve<boolean> {

  constructor(
    private router: Router,
    private identityService: IdentityService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.identityService.isAuthenticated.pipe(take(1));
  }
}
