import { Component, Inject, OnInit, Optional } from '@angular/core';
import { CommandType } from '../../helpers';
import { enuEdit, AppConfig } from '../../helpers';
import { UtilityService } from '../../shared/utility.service';
import { IdentityService } from '../../shared/services'
import { AlertController, ModalController } from '@ionic/angular';
import { DataToolService, SQLExecService, VoucherService } from '../../shared/services';
import { ApiParameter } from 'src/app/shared/api-params';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Params } from './models/params';
import { InventoryService } from './core/services/inventory.service';
import { aspPermission } from 'src/app/shared/services';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  filterModel: FilterModel = {
    ngay_Ct1: moment().startOf('month').format('YYYY-MM-DD'),
    ngay_Ct2: moment().format('YYYY-MM-DD'),
    top: 10,
  };

  param: Params= new Params()
  data: any[];
  totalCount: number = 0;

  reportsBL: any[] = [];
  loading: boolean = true;

  constructor(
    private alertController: AlertController,
    private _utilityService: UtilityService,
    private inventoryService: InventoryService,
    private route: ActivatedRoute
  ) { 
    route.data.subscribe((data) => {
      this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    });
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.getList();
    }, 20);
  }

  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    this.param = {
      Ngay_Ct1: moment(this.filterModel.ngay_Ct1),
      Ngay_Ct2: moment(this.filterModel.ngay_Ct2),
      keyword: this.filterModel.keyword ? this.filterModel.keyword : "",
      top: this.filterModel.top,
      Is_App : true
    }
    const res = await this.inventoryService.Load_KK(this.param).finally(() => this.loading = false);
    this.data = res;
    this.totalCount = res[0]?.totalCount;
  }

  onDateChange() {
    if (!this._utilityService.hasValue(this.filterModel.ngay_Ct2)) {
      return;
    }
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

  trackBy(index: number, item: any) {
    return item?.stt ?? index;
  }
  async delete(item: any) {
    const alert = await this.alertController.create({
      header: 'Thông báo!',
      message: 'Xoá thông tin kiểm kê',
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
            const check = await this.inventoryService.DeleteKiemKe(item.stt);
            if (check)
              this._utilityService.showAlert('Xoá thành công');

            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
    }); await alert.present();
  }

}

interface FilterModel {
  ngay_Ct1: any;
  ngay_Ct2: any;
  top?: number;
  keyword?: string;
}