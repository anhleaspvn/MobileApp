import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommandType } from 'src/app/helpers';
import { ApiParameter } from 'src/app/shared/api-params';
import { IdentityService, SQLExecService } from 'src/app/shared/services';
import { UtilityService } from 'src/app/shared/utility.service';
import { WarehousesService } from './core';
import { Params } from './models';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  products: any[];
  ma_Kho: string = '';
  showSkeleton: boolean = true;
  param: Params = new Params();
  loading: boolean = true;

  constructor(
    private _utilityService: UtilityService,
    private route: ActivatedRoute,
    private router: Router,
    private IdentityService: IdentityService,
    private warehouseService: WarehousesService
  ) {
    this.ma_Kho = this.route.snapshot.params.ma_Kho;
  }

  ngOnInit() {
    setTimeout(() => {
      this.getProduct();
    })

  }

  async getProduct() {
    this.loading = true;
    this.param = {
      ma_Kho: this.ma_Kho
    }
    const res = await this.warehouseService.getDmKhoDetail(this.param).finally(() => this.loading = false);
    if (res.length <= 0) {
      await this._utilityService.showAlert("không tìm thấy chi tiết kho");
    }
    else {
      this.products = res;
    }
  }

}
