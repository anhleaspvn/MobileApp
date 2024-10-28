import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
} from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { CommandType, enuEdit } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { IdentityService, SQLExecService, UserService } from "src/app/shared/services";
import { UtilityService } from "src/app/shared/utility.service";
import { CustomerFilterModalComponent } from "../../base";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { VoucherInfo } from "src/app/models/voucher";
import { OrderService } from "../core";

@Component({
  selector: "app-voucher-step-info-form",
  templateUrl: "./step-info-form.component.html",
  styleUrls: ["./step-info-form.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepInfoFormComponent implements OnInit, AfterContentChecked {
  @Input() model!: VoucherInfo;
  @Output() modelChange: EventEmitter<VoucherInfo> =
    new EventEmitter<VoucherInfo>();

  today: any = new Date();
  
  employee: any = {};
  customer: any = {};
  inventories: any[] = [];
  listEmployees: any[] = [];
  listDepartment: any[] = [];
  listLoaiNhapXuat: any[] = [];
  listSO: any[] = [];
  listLSX: any[] = [];
  listKHSX: any[] = [];
  strMaCt: string = "";
  strMa_Ct_Convert: string;
  strSoCt: string = "";
  strMa_DvCs: string = "";
  enuEdit: enuEdit = enuEdit.New;

  constructor(
    private identityService: IdentityService,
    private userService: UserService,
    private orderService: OrderService,
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    public modalController: ModalController
  ) {
    this.strMaCt = this.route.snapshot.params.maCt;
    this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));

    if (this.enuEdit != enuEdit.Convert) 
      this.strMa_Ct_Convert = this.strMaCt;
    else
      this.strMa_Ct_Convert = this.route.snapshot.queryParamMap.get("maCt_Convert");
  }

  ngOnInit() {
    this.getInfoUser().finally();
    this.get_list().finally();
  }

  async openFilterCustomersModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: CustomerFilterModalComponent,
    });

    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.customer = dataReturned.data;
        this.model = Object.assign(this.model, {
          header: Object.assign(this.model.header, {
            ma_Dt: dataReturned.data?.ma_Dt,
            ten_Dt: dataReturned.data?.ten_Dt,
            so_Phone: dataReturned.data?.so_Phone,
            dia_Chi: dataReturned.data?.dia_Chi,
            email: dataReturned.data?.email,
            
          }),
        });
      }
    });
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  ngAfterContentChecked(): void {
    this.modelChange.emit(this.model);
  } 

  clearCus(ev: any) {
    ev.stopPropagation();
    this.model = Object.assign(this.model, {
      header: Object.assign(this.model.header, {
        ma_Dt: "",
        ten_Dt: "",
        ma_CbNv: "",
        ma_Bp: "",
        so_Phone: "",
        dia_Chi: "",
        dien_Giai: "",
      }),
    });
  }

  private async get_list() {
    const res = await this.orderService.GetListNhanVienBoPhan();
    this.listEmployees = res.table;
    this.listDepartment = res.table1;
    this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();

    if (this.enuEdit != enuEdit.Edit && this.model) {
      this.model = Object.assign(this.model, {
        header: Object.assign(this.model.header, {
          ma_CbNv: this.employee.ma_CbNv,
          ma_Bp: this.employee.ma_Bp,
          ma_DvCs: this.strMa_DvCs,
        }),
      });
    }
  }
  async getInfoUser() {
    const res = await this.userService.GetInfoUser();
    this.employee = res[0];
  }
  
}
