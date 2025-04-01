import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IdentityService } from '../../../shared/services'
import { UtilityService } from '../../../shared/utility.service';
import { DataToolService, SQLExecService, VoucherService } from '../../../shared/services';
import { ApiParameter } from 'src/app/shared/api-params';
import { CommandType } from '../../../helpers';
import * as _ from 'lodash';
import { InventoryService } from './../core/services/inventory.service';
import { Params } from './../models/params';

@Component({
  selector: 'app-inventory-info-products',
  templateUrl: './info-products.component.html',
  styleUrls: ['./info-products.component.scss'],
})
export class InfoProductsComponent implements OnInit {

  @Input() vm: any;
  searchTerm: string = "";
  loading: boolean = false;
  products: any[] = [];
  param: Params =  new Params();
  apiParams: ApiParameter = new ApiParameter();
  
  constructor(
    private identityService: IdentityService,
    private utilityService: UtilityService,
    private alertController: AlertController,
    private changeDetectorRef: ChangeDetectorRef,
    private inventoryServe: InventoryService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getProductsInfo();
    }, 20);
  }

  ionViewDidEnter() {
  }

  
  async updateQuantity(item: any) {
    const alert = await this.alertController.create({
      header: 'Cập nhật sl kiểm kê',
      subHeader: item.ten_Vt,
      inputs: [
        {
          name: 'quantity',
          type: 'number',
          min: 0,
          value: item.so_Luong_Kk,
          placeholder: 'Nhập sl kiểm kê'
        },

      ],
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Đồng ý',
          handler: async (dataAlert) => {
            const qty: number = !isNaN(dataAlert.quantity) ? _.toNumber(dataAlert.quantity) : item.so_Luong_Kk;
            this.param = {
              QTY: qty,
              Stt: this.vm.stt,
              Ma_Vt: item.ma_Vt,
              Ma_Kho: this.vm.ma_Kho
            }
            const res = await this.inventoryServe.UpdateQty_KK(this.param);
              item.so_Luong_Kk = qty;
              this.utilityService.showAlert('Thành công');
          }
        }
      ]
    });
    await alert.present();
  }

  async getProductsInfo() {
    this.loading = true;
    this.apiParams.cmdType = CommandType.StoredProcedure;
    const res = await this.inventoryServe.GetKiemKeCt(this.vm.stt).finally(() => this.loading = false);
    this.products = res;
    
  }

}
