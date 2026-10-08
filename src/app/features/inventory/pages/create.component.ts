import { Component, OnInit } from "@angular/core";

import { FilterInventoriesModalComponent } from "../components/filter-inventories-modal.component";
import { UtilityService } from "src/app/shared/utils/utility.service";
import { WarehousesService } from "src/app/core/api";

import { ApiParameter } from "src/app/core/api/api-params";
import * as _ from "lodash";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import * as moment from "moment";
import { InventoryService } from '../data-access/inventory.service';
import { Params } from '../models/params';


@Component({
  selector: "app-inventory-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  searchTerm: string = "Chọn sản phẩm";
  loading: boolean = false;
  today: any = new Date();
  linner: boolean = true;
  submitting: boolean = false;
  /** Idempotency key của thao tác lưu hiện tại. Giữ nguyên khi lưu lỗi để user bấm lại
   *  không tạo phiếu trùng; chỉ reset khi lưu thành công hoặc khi mở phiếu mới. */
  private submitKey: string = '';
  apiParams: ApiParameter = new ApiParameter();
  model: any = {
    ngay_Kk: this.today,
  };
  param: Params = new Params();
  
  products: any[] = [];
  productsModel: KiemKeCt[] = [];
  
  inventory: any = {};

  constructor(
    private inventoryService: InventoryService,
    private warehousesService: WarehousesService,
    private modalController: ModalController,
    private utilityService: UtilityService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.submitKey = '';
  }


  async onSubmit() {
    if (this.submitting) return;
    this.submitting = true;
    if (!this.submitKey) this.submitKey = this.utilityService.newRequestId();

    const _model = Object.assign(this.model, {
      ngay_Kk: moment(this.model.ngay_Kk).format("YYYY-MM-DD"),
    });

    const res = await this.warehousesService
      .Save_KiemKe(_model, this.productsModel, this.submitKey)
      .finally(() => (this.submitting = false));

    // Chỉ dọn form / điều hướng khi server thực sự trả về phiếu.
    if (res) {
      this.submitKey = '';
      this.model = {};
      this.productsModel = [];
      this.utilityService.showToast("Kiểm kê thành công");
      this.router.navigateByUrl(`/components/inventory/detail/${res}`);
    }
  }

  async openInventoriesFilterModal() {
    await this.utilityService.showLoader();

    const modal = await this.modalController.create({
      component: FilterInventoriesModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.inventory = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          ma_Kho: dataReturned.data.ma_Kho,
        });
        this.getProductsInventory();
      }
    });
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  clearInventory(ev: any) {
    ev.stopPropagation();
    this.model.ma_Kho = "";
    this.inventory = {};
  }


  private async getProductsInventory() {
    this.loading = true;
    const ngay_Kk = moment(this.model.ngay_Kk).format("YYYY-MM-DD");
    this.param = {
      Ngay_KK: new Date(ngay_Kk).toISOString(),
      Ma_Kho: this.model.ma_Kho
    }
    const res = await this.inventoryService
      .GetSoSach(this.param).finally(() => (this.loading = false));
    this.products = res.table;
    //this.productsModel = _.map(res.table, (obj) => {
      //const result: KiemKeCt = {
        //ma_Vt: obj.ma_Vt,
        //ten_Vt: obj.ten_Vt,
        //ma_Lo: obj.ma_Lo,
        //ma_Kho: obj.ma_Kho,
        //so_Luong_Ss: _.toNumber(obj.ton_Dau),
        //so_Luong_Kk: _.toNumber(obj.so_Luong_Kk),
        //giai_Trinh: "",
      //};
      //return result;
    //});
  }
}

export interface KiemKeCt {
  ma_Vt: string;
  ten_Vt: string;
  ma_Lo: string;
  ma_Kho: string;
  so_Luong_Ss: number;
  so_Luong_Kk: number;
  chenh_Lech?: number;
  giai_Trinh: string;
}
