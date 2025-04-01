import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import * as _ from "lodash";
import { ApiParameter, UtilityService } from "src/app/shared";
import { aspPermission, IdentityService } from "src/app/shared/services";
import { QcinsService } from "./core/services/qcins.service";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  filterModel: FilterModel = {
    fromDate: moment().startOf('month').format('YYYY-MM-DD'),
    toDate: moment().format('YYYY-MM-DD'),
    top: 10,
  };
  searchTerm: any;
  woDocNo: any;
  data: any[];
  totalCount: number = 0;

  reportsBL: any[] = [];
  loading: boolean = true;
  param: { username: any; woDocNo: any; };
  constructor(
    private qcinsService : QcinsService,
    private alertController: AlertController,
    private modalController: ModalController,
    private identityService: IdentityService,
    private utilityService: UtilityService,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.getList();
  }

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(async () => {
      this.filterModel.top = this.filterModel.top + 5;
      await this.getList(refresh);
      event.target.complete();
      if (!refresh) {
        event.target.disabled = (this.filterModel.top >= this.totalCount);
      }
    }, 20);
  }

  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    var res = await this.qcinsService.GetListQCInspection(0, this.filterModel.fromDate, this.filterModel.toDate, this.searchTerm).finally(() => this.loading = false);
    this.data = res;
  }
  
  onDateChange() {
    if (!this.utilityService.hasValue(this.filterModel.toDate)) {
      return;
    }
    //this.filterModel.fromDate = this.filterModel.fromDate.format('YYYY-MM-DD');
    this.filterModel.toDate = this.filterModel.toDate.format('YYYY-MM-DD');
    this.getList();
  }

  async view_createexins(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/create-exins/" + item.headerID
      );
  }

  async view_exinsdetail(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/exins/" + item.headerID
      );
  }

  async view_dim(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/create-dim/" + item.headerID
      );
  }

  async view_dimdetail(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/dim/" + item.headerID
      );
  }

  async view_edit(item: any){
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/edit/" + item.headerID
      );
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
            const check = await this.qcinsService.DeleteIQCHeader(item);
            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
      }); await alert.present();
  }

  trackBy(index: number, item: any) {
    return item?.headerID ?? index;
  }
}

interface FilterModel {
  fromDate: any;
  toDate: any;
  top?: number;
  keyword?: string;
}
