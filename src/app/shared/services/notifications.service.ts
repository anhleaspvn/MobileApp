import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private urlSegement = {
    
    GetNotificationsUser : "/Notifications/GetNotificationsUser",
    ReadNotificationsUser : "/Notifications/ReadNotificationsUser",
  }
  constructor(
    private apiService: ApiService,
  ) { }

  async GetNotificationsUser(softWareId :string ='ACC'): Promise<any> {
    const res = await this.apiService.get(this.urlSegement.GetNotificationsUser, {s:softWareId});
    return res;
  }

  async ReadNotificationsUser(softWareId :string='Acc'): Promise<any> {
    const res = await this.apiService.post(this.urlSegement.ReadNotificationsUser, {s:softWareId});
    return res;
  }
}
