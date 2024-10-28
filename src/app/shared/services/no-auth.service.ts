import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { IdentityService } from './identity.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthService implements CanActivate {

  constructor(
    private router: Router,
    private identityService: IdentityService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }

}
