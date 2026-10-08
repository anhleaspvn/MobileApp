import { Component, OnInit } from '@angular/core';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { aspPermission, IdentityService } from 'src/app/core';
import { QcinsService } from '../../data-access/qcins.service';
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
  colWidths: number[] = [120, 100, 120, 130, 130, 120, 90, 90, 90, 100, 80, 80, 80, 80, 80, 140];

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

  checkState: string = '';
  isLocked: boolean = false;

  ngOnInit() {
    this.getList();
    this.getHeaderInfo();
  }

  async getHeaderInfo() {
    try {
      const res = await this.qcinsService.GetListQCInspection(this.headerID, '1970-01-01', '2099-12-31', '');
      if (res && res.length > 0) {
        this.checkState = res[0].checkState;
        this.isLocked = res[0].isLocked === 1 || res[0].isLocked === true || res[0].IsLocked === 1 || res[0].IsLocked === true;
      }
    } catch (e) {
      console.error(e);
    }
  }

  ionViewWillEnter() {
    this.getList();
    this.getHeaderInfo();
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
    return item?.autoID ?? item?.AutoID ?? item?.autoId ?? index;
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
    if (item) {
      const autoID = item.autoID ?? item.AutoID ?? item.autoId;
      const headerID = item.headerID ?? item.HeaderID ?? item.headerId;
      this.router.navigateByUrl(
        "components/qcinspection/edit-dim/" + autoID + "/" + headerID
      );
    }
  }
}
