import { Injectable } from '@angular/core';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlSegement = {   
    GetInfoUser : "/User/GetInfoUser",
  }

  constructor(
    private apiService: ApiService,
  ) { }

  async GetInfoUser(): Promise<any> {
    const res = await this.apiService.post(this.urlSegement.GetInfoUser);
    return res;
  }
}
