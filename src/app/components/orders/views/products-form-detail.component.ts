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
import { OrderService } from "../core";

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
  

  constructor(
    private identityService: IdentityService,
    private navParams: NavParams,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private orderService: OrderService,
    private voucherService: VoucherService,
  ) {
    this.model = navParams.get("itemProduct");

    this.strMaCt = navParams.get("strMaCt");
    this.enuEdit = navParams.get("enuEdit");
    this.strMa_Ct_Convert = navParams.get("strMa_Ct_Convert");
  }

  ngOnInit() {
    this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();

    setTimeout(() => {
      if(["PX","XP"].includes(this.strMa_Ct_Convert))
        this.GetListMa_Lo();
      this.GetlistMa_Sp();
    }, 10);

    if (this.model.ma_Lo) {
      this.listMa_Lo[0] = {
        ma_Lo: this.model.ma_Lo,
      };
    }

    if (this.model.ma_Sp) {
      this.listMa_Sp[0] = {
        ma_Sp: this.model.ma_Sp,
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
  async GetListMa_Lo() {
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

  listMa_Sp: any[] = [];
  async GetlistMa_Sp() {
    const res = await this.orderService.GetlistMa_Sp();
    this.listMa_Sp = res;
  }
}
