import { Component, Inject, OnInit, Optional } from '@angular/core';
import { UtilityService } from '../../../shared/utility.service';

import { IdentityService, SQLExecService, VoucherService } from '../../../shared/services';
import { ApiParameter } from 'src/app/shared/api-params';
import { AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '../models';
import { WarehousesService } from '../../warehouse/core';
import { ProductDetailComponent } from './product-detail.component';
import { DataModalReturned } from 'src/app/shared';
@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  strMaCt: string;
  products: any[];
  top: number = 20;
  apiParams: ApiParameter = new ApiParameter();
  totalCount: number = 0;
  dteNgay_Ct1: any;
  dteNgay_Ct2: any;
  selectTrang_Thai: string = "";
  skeletons: any = [];
  loading: boolean = true;
  data: any[];
  searchTerm: string = '';
  today: any = new Date();
  Param: Params = new Params();

  constructor(
    private sqlService: SQLExecService,
    private voucherService: VoucherService,
    private alertController: AlertController,
    private modalController: ModalController,
    private IdentityService: IdentityService,
    private router: Router,
    private route: ActivatedRoute,
    private _utilityService: UtilityService,
    private warehouserService : WarehousesService,
  ) {
    this.strMaCt = this.route.snapshot.params.maCt;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.getListVatTu();
    }, 5);
  }

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(async () => {
      this.top = this.top + 5;
      await this.getListVatTu(refresh);
      event.target.complete();
      if (!refresh)
        event.target.disabled = (this.top >= this.totalCount);
      
    }, 10);
  }

  async getListVatTu(isLoading: boolean = true) {
    this.loading = isLoading;

    this.Param = {
      top: this.top,
      keyword: this.searchTerm, 
    };
    const res = await this.warehouserService.getDmVt(this.Param).finally(() => this.loading = false) ;

    if (res.length <= 0) {
      await this._utilityService.showAlert("không tìm thấy cho sản phẩm");
    }
    else {
      this.products = res;
      this.totalCount = res[0].totalCount;
    }
  }

  async goToDetail(item: any) {

    // if (!item) return;
    // this.router.navigateByUrl('components/product/product-detail/' + item.ma_Vt);
    const modal = await this.modalController.create({
      component: ProductDetailComponent,
      componentProps: {
        product: item
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
    });
    return await modal.present();
  }
  openModalFilter() {

  }

  trackBy(index: number, item: any) {
    return item?.stt ?? index;
  }
}

