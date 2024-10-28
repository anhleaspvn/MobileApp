import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from "@angular/core";

import { UtilityService } from "../../../shared/utility.service";
import { IdentityService } from "../../../shared/services";
import * as moment from "moment";
import * as _ from "lodash";
import { KiemKeCt } from "../create.component";
import { ApiParameter } from "src/app/shared/api-params";
import { CommandType } from "../../../helpers";
import { ProductFilterModalComponent } from "../../base";
import { ModalController } from "@ionic/angular";
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ParamsQR } from "../models/paramsqr";
import { InventoryService } from "../core";

@Component({
  selector: "app-products-inventory",
  templateUrl: "./products-inventory.component.html",
  styleUrls: ["./products-inventory.component.scss"],
})
export class ProductsInventoryComponent implements OnInit, AfterViewInit {
  @Input() model: any = {};

  @Input() products: any[];
  @Input() productsModel: KiemKeCt[];
  @Output() productsModelChange: EventEmitter<KiemKeCt[]> = new EventEmitter<
    KiemKeCt[]
  >();

  paramqr: ParamsQR = new ParamsQR();
  barcodeScannerOptions: BarcodeScannerOptions;

  searchTerm: string = "";
  last: number;
  apiParams: ApiParameter = new ApiParameter();
  loading: boolean = true;
  @ViewChildren("allTheseThings") things: QueryList<any>;

  constructor(
    private inventoryService: InventoryService,
    private barcodeScanner: BarcodeScanner,
    private utilityService: UtilityService,
    private modalController: ModalController,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.barcodeScannerOptions = {
      prompt: "",
      showTorchButton: false,
      showFlipCameraButton: false,
      //torchOn: true,
      resultDisplayDuration: 1,
    };
  }

  ngOnInit() {
    this.last = this.products.length - 1;
  }

  ngAfterViewInit() {
    
    this.things.changes.subscribe((t) => {
    });
  }

  ngForRendred(index: number) {
    console.log("NgFor is Rendered");
    if (this.last == index && this.loading == true) {
      this.loading = false;
      this.changeDetectorRef.detectChanges();
    }
    return "";
  }


  setValue(item: any, field: string) {
    const product = _.find(this.productsModel, {
      ma_Vt: item.ma_Vt,
      ma_Kho: item.ma_Kho,
      ma_Lo: item.ma_Lo,
    });
    return product?.[field] ? product[field] : null;
  }

  onChangeValue(ev: any, item: any, field: string) {
    const idx = _.findIndex(this.productsModel, {
      ma_Vt: item.ma_Vt,
      ma_Lo: item.ma_Lo,
      ma_Kho: item.ma_Kho,
    });

    if (field == "so_Luong_Kk") {
      const value = _.toNumber(this.utilityService.hasValue(ev.target.value) ? ev.target.value : 0);
      this.productsModel[idx][field] = value;
      this.productsModel[idx].chenh_Lech =value -_.toNumber(this.utilityService.hasValue(item.ton_Dau) ? item.ton_Dau : 0
        );
    } else {
      this.productsModel[idx][field] = ev.target.value;
    }
    // this.productsModelChange.emit(this.productsModel);
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

  productModelSet(item: any) {
    
    if (!item) return;
    
    Object.assign(item, 
      {
        ma_Lo: item.ma_Lo? item.ma_Lo :"",
      });

    const idx = _.findIndex(this.productsModel, (o) => {
      
        return o.ma_Vt == item.ma_Vt && o.ma_Lo == item.ma_Lo;
    });

    if (idx > -1) {
      this.productsModel[idx].so_Luong_Kk += 1;
    } else {
      let _kiemKe: KiemKeCt;
      const obj = Object.assign({}, _kiemKe, {
        ma_Vt: item.ma_Vt,
        ten_Vt: item.ten_Vt,
        ma_Lo: item.ma_Lo,
        ma_Kho: this.model.ma_Kho,
        so_Luong_Kk: 1,
        ton_Dau: 0,
      });
      this.products.push(obj);
      this.productsModel.push(obj);
    }
    this.productsModelChange.emit(this.productsModel);
  }

  removeProduct(item: any) {
    Object.assign(item, 
      {
        ma_Lo: item.ma_Lo? item.ma_Lo :"",
      });
      
    const idx = _.findIndex(this.productsModel, (o) => {
      return o.ma_Vt == item.ma_Vt && o.ma_Lo == item.ma_Lo;
    });
    if (idx > -1) {
      this.products.splice(idx, 1);
      this.productsModel.splice(idx, 1);
      this.productsModelChange.emit(this.productsModel);
    }
  }

  productScanner() {
    // this.getProductByQRCode("8935001800651");
    // return;
    this.barcodeScanner
      .scan(this.barcodeScannerOptions)
      .then((data) => {
        if (data.cancelled) {
          console.log("User cancelled the action!");
          return false;
        } else if (data.text && data.text != "")
          this.getProductByQRCode(data.text);
      })
      .catch((err) => {
        this.utilityService.showToast(JSON.stringify(err));
      });
  }

  private async getProductByQRCode(qrCode: string) {
    
    if (qrCode.includes('{')) {
      let result = JSON.parse(qrCode);
      this.paramqr = {
        MA_VT: result.Ma_Vt ?? "",
        MA_LO: result.Ma_Lo ?? "",
        HAN_SD: moment(result.Han_Sd,'DD/MM/YYYY').format('YYYY-MM-DD'),
        NGAY_SX: moment(result.Ngay_Sx,'DD/MM/YYYY').format('YYYY-MM-DD'),
        MA_KHO: result.Ma_Kho ?? "",
        SO_LUONG: result.So_Luong ?? 0
      }
    }
    else {
      this.paramqr = {
        MA_VT: qrCode,
        MA_LO: '',
        HAN_SD: '',
        NGAY_SX: '',
        MA_KHO: '',
        SO_LUONG: 0
      };
    }

    const res = await this.inventoryService.GetVtByCode(this.paramqr).finally();
    if (res.length <= 0) {
      await this.utilityService.showAlert(`Không tìm thấy sản phẩm cho: ${qrCode}`);
    }
      else {
        this.productModelSet(res[0]);
        this.productScanner();
      }
  }

  trackByFn(index) {
    return index;
  }

  private createFilterFor(query: string) {
    const lowercaseQuery = _.lowerCase(query);
    return (obj) => {
      return _.lowerCase(obj.ten_Vt).indexOf(lowercaseQuery) > -1;
    };
  }
}
