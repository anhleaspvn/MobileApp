import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiParameter } from 'src/app/core/api/api-params';
import * as _ from 'lodash';
import { CommandType } from 'src/app/shared/types';
import { QcinsService } from '../../data-access/qcins.service';
import { aspPermission, IdentityService } from 'src/app/core';
import { UtilityService } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exins',
  templateUrl: './exins.component.html',
  styleUrls: ['./exins.component.scss'],
})
export class ExinsComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  headerID: any;
  data: any[];
  totalCount: number = 0;
  colWidths: number[] = [180, 120, 130, 100, 100, 120, 100, 150, 300];

  reportsBL: any[] = [];
  loading: boolean = true;
  param: { username: any; woDocNo: any; };
  constructor(
    private qcinsService : QcinsService,
    private alertController: AlertController,
    private modalController: ModalController,
    private identityService: IdentityService,
    private utilityService: UtilityService,
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

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(async () => {
      await this.getList(refresh);
      event.target.complete();
    }, 20);
  }

  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    var res = await this.qcinsService.GetListExinsDetail(this.headerID).finally(() => this.loading = false);
    this.data = res;
  }
  
  async view_defect(item: any) {
    if (item) {
      const autoID = item.autoID ?? item.AutoID ?? item.autoId;
      this.router.navigateByUrl(
        "components/qcinspection/create-defect/" + item.headerID + "/" + item.iqcCheckID + "/" + autoID
      );
    }
  }

  async viewdefect(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/defect/" + item.headerID + "/" + item.iqcCheckID
      );
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
            debugger
            const check = await this.qcinsService.DeleteExinsQC(item);
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
        "components/qcinspection/edit-exins/" + autoID + "/" + headerID
      );
    }
  }
}

interface FilterModel {
  fromDate: any;
  toDate: any;
  top?: number;
  keyword?: string;
}
