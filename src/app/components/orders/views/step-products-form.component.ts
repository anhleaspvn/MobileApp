import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";

import { UtilityService } from "../../../shared/utility.service";

import { ControlContainer, NgForm } from "@angular/forms";
import { ProductFilterModalComponent } from "./product-filter-modal.component";

import * as _ from "lodash";

import { BarcodeScanner,BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { ApiParameter } from "src/app/shared/api-params";
import { CommandType, enuEdit } from "src/app/helpers";
import { IdentityService, SQLExecService } from "src/app/shared/services";
import { ProductsFormDetailComponent } from "./products-form-detail.component";
import { ActivatedRoute } from "@angular/router";
import { VoucherHelperService, VoucherInfo } from "src/app/models/voucher";
import { BehaviorSubject } from "rxjs";
import { OrderService } from "../core";

@Component({
  selector: "app-voucher-step-products-form",
  templateUrl: "./step-products-form.component.html",
  styleUrls: ["./step-products-form.component.scss"],
})
export class StepProductsFormComponent implements OnInit {
  // @Input() modelSubject: BehaviorSubject<VoucherInfo> = new BehaviorSubject(null);

  @Input() model!: VoucherInfo;
  @Output() modelChange: EventEmitter<VoucherInfo> =
    new EventEmitter<VoucherInfo>();

  searchTerm: string = "";

  barcodeScannerOptions: BarcodeScannerOptions;
  strMa_DvCs!: string;
  enuEdit: enuEdit = enuEdit.New;
  strMaCt: string = "";
  strMa_Ct_Convert: string;

  constructor(
    private voucherHelperService: VoucherHelperService,
    private _utilityService: UtilityService,
    private barcodeScanner: BarcodeScanner,
    private modalController: ModalController,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private identityService: IdentityService,
    private orderService: OrderService
  ) {
    this.strMaCt = this.route.snapshot.params.maCt;
    this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));

    if (this.enuEdit != enuEdit.Convert) this.strMa_Ct_Convert = this.strMaCt;
    else
      this.strMa_Ct_Convert =
        this.route.snapshot.queryParamMap.get("maCt_Convert");
    this.barcodeScannerOptions = {
      prompt: "",
      showTorchButton: true,
      showFlipCameraButton: true,
      //torchOn: true,
      resultDisplayDuration: 1,
    };
  }

  ngOnInit() {
    this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();
  }

  async openFilterProductsModal() {
    const modal = await this.modalController.create({
      component: ProductFilterModalComponent,
    });

    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.productModelSet(dataReturned.data);
      }
    });
    return await modal.present();
  }

  productScanner() {
    this.barcodeScanner
      .scan(this.barcodeScannerOptions)
      .then((data) => {
        //this.productScannedData = data;
        if (data.cancelled) {
          console.log("User cancelled the action!");
          return false;
        } else if (data.text && data.text != "")
          this.getProductByQRCode(data.text);
      })
      .catch((err) => {
        this._utilityService.showToast(JSON.stringify(err));
      });
  }

  async getProductByQRCode(qrCode: string) {
    let paraList;
    if (qrCode.includes("{")) {
      let result = JSON.parse(qrCode);
      paraList = {
        MA_VT: result.Ma_Vt,
        SO_LUONG: result.So_Luong,
        Ma_DvCs: this.strMa_DvCs,
      };
    } else {
      paraList = {
        MA_VT: qrCode,
        SO_LUONG: "",
        Ma_DvCs: this.strMa_DvCs,
      };
    }
    const res = await this.orderService.GetVtByCode(paraList).finally();
    if (res.length <= 0) {
      await this._utilityService.showAlert(
        `Không tìm thấy sản phẩm cho: ${qrCode}`
      );
    } else {
      this.productModelSet(res[0]);
      this.productScanner();
    }
  }

  productModelSet(item: any) {
    if (!item) return;
    const idx = _.findIndex(this.model.detail, (o) => {
      return o.ma_Vt == item.ma_Vt && o.is_HangTang == false;
    });

    if (idx > -1) {
      this.model.detail[idx].is_HangTang = false;
      this.model.detail[idx].so_Luong9 += 1;
      this.model.detail[idx].gia_Nt9 = this.model.detail[idx].gia_Nt9
        ? this.model.detail[idx].gia_Nt9
        : 0;
      this.model.detail[idx].tien_Nt9 = this.model.detail[idx].gia_Nt9
        ? this.model.detail[idx].gia_Nt9 * this.model.detail[idx].so_Luong9
        : 0;
      this.modelChange.emit(this.model);
    } else {
      const obj = Object.assign({}, item, {
        is_HangTang: false,
        so_Luong9: 1,
        tien_Nt9: item.gia_Nt9,
        stt0: this.model.detail ? this.model.detail.length + 1 : 1,
      });
      this.model.detail.push(obj);
      this.modelChange.emit(this.model);
    }
    this.voucherHelperService.sum_TTienHang(this.model);
    this.voucherHelperService.updatePayments(this.model);
  }

  async edit(item: any) {
    const obj = Object.assign({}, item, {
      ngay_Ct: this.model.header.ngay_Ct,
    });

    const modal = await this.modalController.create({
      component: ProductsFormDetailComponent,
      componentProps: {
        itemProduct: obj,
        strMaCt: this.strMaCt,
        enuEdit: this.enuEdit,
        strMa_Ct_Convert: this.strMa_Ct_Convert,
      },
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        const data = dataReturned.data;
        if (data) {
          const idx = _.findIndex(this.model.detail, (o) => {
            return o.stt0 == data.stt0;
          });
          this.model.detail[idx] = data;
          this.voucherHelperService.sum_TTienHang(this.model);
          this.voucherHelperService.updatePayments(this.model);
          this.modelChange.emit(this.model);
        }
      }
    });
    return await modal.present();
  }

  removeProduct(item: any) {
    const idx = _.findIndex(this.model.detail, (o) => {
      return o.stt0 == item.stt0;
    });
    if (idx > -1) {
      this.model.detail.splice(idx, 1);
      this.modelChange.emit(this.model);
    }
    this.voucherHelperService.sum_TTienHang(this.model);
    this.voucherHelperService.updatePayments(this.model);
  }

  public changeQty(item: any = {}, type: string = "") {
    if (item.so_Luong9 < 1) {
      item.so_Luong9 = 1;
      return;
    }
    switch (type) {
      case "previous":
        item.so_Luong9 = item.so_Luong9 - 1;
        break;
      case "next":
        item.so_Luong9 = item.so_Luong9 + 1;
        break;
    }
    this.calcTien(item);
  }

  async updateQty(item: any) {
    const alert = await this.alertController.create({
      header: "Cập nhật số lượng",
      subHeader: item.ten_Vt,
      inputs: [
        {
          name: "quantity",
          type: "number",
          min: 1,
          //max: product.product.sl_Ton,
          value: item.so_Luong9,
          placeholder: "Nhập số lượng",
        },
      ],
      buttons: [
        {
          text: "Hủy",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Đồng ý",
          handler: (dataAlert) => {
            const qty =
              !isNaN(dataAlert.quantity) && _.toNumber(dataAlert.quantity) > 0
                ? _.toNumber(dataAlert.quantity)
                : 1;
            item.so_Luong9 = qty;
            this.calcTien(item);
          },
        },
      ],
    });

    await alert.present().then(() => {
      const firstInput: any = document.querySelector("ion-alert input");
      firstInput?.focus();
      return;
    });
  }

  async updatePrice(item: any) {
    const alert = await this.alertController.create({
      header: "Cập nhật giá bán",
      subHeader: item.ten_Vt,
      inputs: [
        {
          name: "price",
          type: "number",
          min: 100,
          //max: product.product.sl_Ton,
          value: item.gia_Nt9,
          placeholder: "Nhập giá bán",
        },
      ],
      buttons: [
        {
          text: "Hủy",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Đồng ý",
          handler: (dataAlert) => {
            const qty =
              !isNaN(dataAlert.price) && _.toNumber(dataAlert.price) > 0
                ? _.toNumber(dataAlert.price)
                : 1;
            item.gia_Nt9 = qty;
            this.calcTien(item);
          },
        },
      ],
    });

    await alert.present().then(() => {
      const firstInput: any = document.querySelector("ion-alert input");
      firstInput?.focus();
      return;
    });
  }

  calcTien(item: any) {
    item.tien_Nt9 = item.gia_Nt9 * item.so_Luong9;
    
    this.voucherHelperService.sum_TTienHang(this.model);
    this.voucherHelperService.updatePayments(this.model);
    this.modelChange.emit(this.model);
  }

  clickHangTang(item: any) {
    item.gia_Nt9 = item.is_HangTang ? 0 : item.gia_Nt9;
    this.calcTien(item);
  }

}
