import { Component, OnInit } from '@angular/core';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { aspPermission, IdentityService } from 'src/app/shared/services';
import { QcinsService } from '../core/services/qcins.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dim',
  templateUrl: './dim.component.html',
  styleUrls: ['./dim.component.scss'],
})
export class DimComponent implements OnInit {

  perm: aspPermission = Object.create(null);
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  headerID: any;
  autoID: any;
  data: any[];
  totalCount: number = 0;

  reportsBL: any[] = [];
  loading: boolean = true;
  param: { username: any; woDocNo: any; };
  constructor(
    private qcinsService : QcinsService,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.headerID = this.route.snapshot.params.headerID;
   }

  ngOnInit() {
    this.getList();
  }

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(async () => {
      await this.getList(refresh);
      event.target.complete();
    }, 20);
  }

  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    var res = await this.qcinsService.GetListDimDetail(this.headerID).finally(() => this.loading = false);
    this.data = res;
  }
  
  onDateChange() {
    this.getList();
  }

  trackBy(index: number, item: any) {
    return item?.headerID ?? index;
  }

  async delete(item: any){
    const alert = await this.alertController.create({
      header: 'Thông báo!',
      message: 'Xoá thông tin',
      buttons: [
        {
          text: 'Huỷ bỏ',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Xác nhận',
          handler: async () => {
            const check = await this.qcinsService.DeleteDimQC(item);
            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
      }); await alert.present();
  }

  async view_edit(item: any){
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/edit-dim/" + item.autoID + "/" + item.headerID
      );
  }
}
