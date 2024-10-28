import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IdentityService } from './identity.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private identityService: IdentityService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    return this.identityService.isAuthenticated.pipe(
      map(res => {
        if (!res) {
          this.router.navigateByUrl('/login');
        }
        return true;
      }),
      catchError(err => {
        console.error('CanActivate error', err);
        return of(false);
      })
    )
  }
}
