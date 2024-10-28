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
import { WarehousesService } from "../../warehouse/core";

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
    private userService: UserService,
    private identityService: IdentityService,
    private warehousesService: WarehousesService,
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
    this.getInfoUser();
    this.get_list();
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

  // ngOnChanges(changes: SimpleChanges) {
  //   debugger
  //   this.modelChange.emit(this.model);
  // }

  clearCus(ev: any) {
    ev.stopPropagation();
    delete this.model.header?.ma_Dt;
    delete this.model.header?.ten_Dt;
    this.modelChange.emit(this.model);
  }

  private async get_list() {
    const param ={Ma_Ct: this.strMa_Ct_Convert}
    const res = await this.warehousesService.GetListForvoucher(param);
    this.listEmployees = res.table;
    this.listDepartment = res.table1;
    this.listLoaiNhapXuat = res.table2;
    this.listSO = res.table3;
    this.listLSX = res.table4;
    this.listKHSX = res.table5;
    this.inventories = res.table6;

    this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();

    if (this.enuEdit != enuEdit.Edit && this.model) {
      this.model = Object.assign(this.model, {
        header: Object.assign(this.model.header, {
          ma_CbNv: this.employee.ma_CbNv,
          ma_Bp: this.employee.ma_Bp,
          ma_DvCs: this.strMa_DvCs,
          so_Ct_SO: this.model.header?.so_Ct_SO ?? "",
          so_Ct_LSX: this.model.header?.so_Ct_LSX ?? "",
          so_Ct_KHSX: this.model.header?.so_Ct_KHSX ?? "",
        }),
      });
    }
  }
  async getInfoUser() {
    const res = await this.userService.GetInfoUser();
    this.employee = res[0];
  }
}
