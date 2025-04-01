import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  ViewChild,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import * as moment from "moment";
import { CommandType, enuEdit } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { IdentityService, SQLExecService, VoucherService } from "src/app/shared/services";
import { ProductFilterModalComponent } from "../../base";
import { WarehousesService } from "../../warehouse/core";

@Component({
  selector: "app-products-form-detail",
  templateUrl: "./products-form-detail.component.html",
  styleUrls: ["./products-form-detail.component.scss"],
})
export class ProductsFormDetailComponent implements OnInit {
  @Input() model: any = {};
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  apiParams: ApiParameter = new ApiParameter();
  submitting: boolean = false;
  strMa_DvCs!: string;
  enuEdit: enuEdit = enuEdit.New;
  strMaCt: string = "";
  strMa_Ct_Convert: string;
  strSoCt: string = "";

  listSO: any[] = [];
  listLSX: any[] = [];
  listKHSX: any[] = [];
  
  strMa_Ct_PX: string[] = ["PX","XP"];

  constructor(
    private voucherService: VoucherService,
    private identityService: IdentityService,
    private navParams: NavParams,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private warehousesService: WarehousesService
  ) {
    this.model = navParams.get("itemProduct");

    this.strMaCt = navParams.get("strMaCt");
    this.enuEdit = navParams.get("enuEdit");
    this.strMa_Ct_Convert = navParams.get("strMa_Ct_Convert");
  }

  ngOnInit() {
    this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();

    setTimeout(() => {
      if(this.strMa_Ct_PX.includes(this.strMa_Ct_Convert))
        this.get_listMa_Lo();
      this.GetListForvoucher();
    }, 10);

    if (this.model.ma_Lo) {
      this.listMa_Lo[0] = {
        ma_Lo: this.model.ma_Lo,
      };
    }
  }

  ngAfterContentChecked(): void {
    this.modelChange.emit(this.model);
  }

  async closeModal(ok: boolean = false) {
    Object.assign(this.model,{
      han_Sd : moment(this.model.han_Sd).format("YYYY-MM-DD"),
      ma_Lo: this.model.ma_Lo
    })
    
    await this.modalController.dismiss(this.model);
  }

  clearMa_Lo(ev: any) {
    ev.stopPropagation();
    delete this.model.ma_Lo;
    this.modelChange.emit(this.model);
  }
  clearMa_Sp(ev: any) {
    ev.stopPropagation();
    delete this.model.ma_Sp;
    this.modelChange.emit(this.model);
  }

  listMa_Lo: any[] = [];
  async get_listMa_Lo() {
    const filterParams = {
      Ngay_Ct: new Date(),
      Ma_Kho: this.model.ma_Kho,
      Ma_Vt: this.model.ma_Vt,
      Stt: this.model.stt,
      Ma_DvCs: this.strMa_DvCs,
    };
    const res = await this.voucherService.GetListMa_Lo(filterParams);
    this.listMa_Lo = res;
  }

  clearCusMa_SP(ev: any) {
    ev.stopPropagation();
    delete this.model?.ma_Sp;
    this.modelChange.emit(this.model);
  }

  async openFilterProductsModal() {
    const modal = await this.modalController.create({
      component: ProductFilterModalComponent,
      componentProps :{
        loai_vt : '1'
      }
    });

    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.model.ma_Sp =dataReturned.data.ma_Vt;
        // this.productModelSet(dataReturned.data);
      }
    });
    return await modal.present();
  }

  private async GetListForvoucher() {
    const res = await this.warehousesService.GetListForvoucher({Ma_Ct:''});
    this.listSO = res.table3;
    this.listLSX = res.table4;
    this.listKHSX = res.table5;
  }
}
