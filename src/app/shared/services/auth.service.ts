import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  async attemptAuth(credentials: any) {
    const res = await this.apiService.post('auth/login',
    {
      username: credentials.username,
      password: credentials.password,
    });
    return res;
  }

}
