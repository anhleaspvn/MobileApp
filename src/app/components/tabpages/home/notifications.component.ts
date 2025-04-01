import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommandType } from 'src/app/helpers';
import { ApiParameter } from 'src/app/shared';
import { IdentityService, NotificationsService, SQLExecService } from 'src/app/shared/services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  datanotifi: any =[];
  totalNotifi: number=0;
  skeletons: any = [];
  loading = false;
  apiParams: ApiParameter = new ApiParameter();

  constructor(
    private identityService: IdentityService,
    private modalController: ModalController,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.getNotifi().finally(() => {
      });
    }, 100);
  }

  async closeModal(ok: boolean = false) {
    
    await this.modalController.dismiss();
  }

  private async getNotifi(isLoading: boolean = true) {
    this.loading = isLoading;
    let s;
    this.identityService.currentSoftware.subscribe((res) => (s = res));
    const res = await this.notificationsService.GetNotificationsUser(s).finally(() => (this.loading = false));
    this.datanotifi = res.table.length>0 ?res.table: [];
    this.totalNotifi = this.datanotifi.length>0 ?this.datanotifi[0].totalNotifi: 0;
  }

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(() => {
      this.getNotifi(refresh).finally(() => {
        event.target.complete();
        if (!refresh) {
          event.target.disabled = true;
        }
      });
    }, 100);
  }
  async readAll()
  {
    let s;
    this.identityService.currentSoftware.subscribe((res) => (s = res));
    const res = await this.notificationsService.ReadNotificationsUser(s).finally(()=>this.getNotifi());
  }

  trackBy(index: number, item: any) {
    return item?.stt ?? index;
  }
}
