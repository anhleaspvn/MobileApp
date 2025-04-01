import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CommandType, enuEdit } from "src/app/helpers";
import { VoucherInfo } from "src/app/models/voucher";
import { UtilityService } from "src/app/shared/utility.service";
import { ActivatedRoute, Router } from "@angular/router";

import {
  DataToolService,
  IdentityService,
  SQLExecService,
  VoucherService,
} from "../../shared/services";
import * as moment from "moment";
import { ApiParameter } from "src/app/shared/api-params";
import * as _ from "lodash";
import { WarehousesService } from "../warehouse/core";

@Component({
  selector: "app-imports-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  strTitle: string = "Tạo mới";
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  employee: any = {};
  linner: boolean = true;
  submitting: boolean = false;
  enuEdit: enuEdit = enuEdit.New;
  stt: string;
  strMaCt: string;
  strMa_Ct_Convert: string;

  model = new VoucherInfo();

  constructor(
    private identityService: IdentityService,
    private voucherService: VoucherService,
    private modalController: ModalController,
    private utilityService: UtilityService,
    private warehousesService: WarehousesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.strMaCt = this.route.snapshot.params.maCt;
    this.stt = this.route.snapshot.queryParamMap.get("stt");
    this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));

    if (this.enuEdit != enuEdit.Convert)
      this.strMa_Ct_Convert = this.strMaCt;
    else
      this.strMa_Ct_Convert = this.route.snapshot.queryParamMap.get("maCt_Convert");
    if (this.enuEdit == enuEdit.Edit) this.strTitle = "Sửa phiếu";

    if (this.enuEdit != enuEdit.New) this.getVoucher();
  }

  async getVoucher() {

    const res = await this.voucherService.getVoucher(
      this.stt,
      this.enuEdit == enuEdit.Edit ? this.strMaCt : this.strMa_Ct_Convert
    );

    if (this.enuEdit == enuEdit.Convert) {
      Object.assign(res.table[0],
        {
          ma_LoaiNX: "",
          so_Ct: ""
        });
    }

    this.model = Object.assign({}, this.model, {
      header: Object.assign(this.model.header, res?.table[0]),
      detail: res?.table1 ?? [],
    });
  }

  async onSubmit() {
    this.submitting = true;
    const voucher: VoucherInfo = Object.assign(this.model, {
      header: Object.assign(this.model.header, {
        ngay_Ct: moment(this.model.header.ngay_Ct).format("YYYY-MM-DD"),
        MA_CT: this.strMa_Ct_Convert,
        STT: this.enuEdit != enuEdit.Edit ? "" : this.model.header.STT,
      }),
    });

    const res = await this.warehousesService
      .saveVoucher_Inventory(voucher, this.enuEdit)
      .finally(() => (this.submitting = false));
    if (res) {
      this.utilityService.showToast("Lưu thành công");
      this.router.navigateByUrl(
        "components/voucher/detail/" + res + "/" + this.strMa_Ct_Convert
      );
    }
  }

  resetInfo() {
    this.model.header = Object.create(null);
  }

  ionViewWillLeave() {
    this.enuEdit = null;
    this.strMa_Ct_Convert = '';
    this.stt = '';
  }

  FormCheckValid() {
    if (
      this.model.detail &&
      (this.strMa_Ct_Convert == "TP" || this.strMa_Ct_Convert == "XP")
    ) {
      return _.some(_.map(this.model.detail, "ma_Sp"), ["length", 0]);
    }
    return false;
  }
}
