import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavParams } from "@ionic/angular";
import { AppConfig, CommandType, enuEdit } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { IdentityService, aspPermission, SQLExecService, UserService } from "src/app/shared/services";

import * as _ from "lodash";
import * as moment from "moment";
import { UtilityService } from "src/app/shared/utility.service";
import { StatisticsService } from "./core";

@Component({
  selector: "app-dialog-edit",
  templateUrl: "./dialog-edit.component.html",
  styleUrls: ["./dialog-edit.component.scss"],
})
export class DialogEditComponent implements OnInit {
  // @Input() model: any = {};
  perm: aspPermission = Object.create(null);
  model: any = {};
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  strTitle: string = "Tạo mới";
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  submitting: boolean = false;
  enuEdit: enuEdit = enuEdit.New;
  is_QC: boolean = false;
  allow_Edit: boolean = false;
  linner: boolean = true;
  
  constructor(
    private userService : UserService,
    private modalController: ModalController,
    private navParams: NavParams,
    private route: ActivatedRoute,
    private statisticsService: StatisticsService,
    private utilityService: UtilityService,
  ) {
    this.model = this.navParams.get("itemStep");
    this.enuEdit = Number(this.navParams.get("enuEdit"));
    this.is_QC = Boolean(this.navParams.get("is_QC"));
    this.allow_Edit = Boolean(this.navParams.get("allow_Edit"));
    Object.assign(this.model, {
      tu_ThoiGian: moment(this.model.tu_ThoiGian).format("HH:mm"),
      den_ThoiGian: moment(this.model.den_ThoiGian).format("HH:mm"),
    });

  }

  ngOnInit() {
    this.strTitle =
      this.enuEdit == enuEdit.New
        ? "Thêm mới thống kê công đoạn"
        : "Sửa thống kê công đoạn";

    this.strTitle = this.is_QC ? "QC thống kê công đoạn" : this.strTitle;    

    if(this.enuEdit == enuEdit.New)
    setTimeout(() => {
      this.getInfoUser();  
    }, 20); 
    
    if(this.is_QC)
    setTimeout(() => {
      this.getInfoUser_Qc();  
    }, 20); 
  }

  async getInfoUser() {
    const res = await this.userService.GetInfoUser();
    this.model.ma_CbNv = this.model.ma_CbNv? this.model.ma_CbNv: res[0].ma_CbNv;
    
  }

  async getInfoUser_Qc() {
    const res = await this.userService.GetInfoUser();
    this.model.ma_CbNv_Qc = this.model.ma_CbNv_Qc? this.model.ma_CbNv_Qc: res[0].ma_CbNv;
  }

  ionViewDidLeave() {
    this.model = {
    };
  }

  async closeModal(ok: boolean = false) {
    if (ok) {
      this.submitting = true;
      const item: any = Object.assign(this.model, {
        ngay_Ct: moment(this.model.ngay_Ct).format("YYYY-MM-DD"),
      });

      const res = await this.statisticsService
        .SaveThongKe(item, this.enuEdit)
        .finally(() => (this.submitting = false));
      this.utilityService.showToast("Lưu thành công");
    }

    await this.modalController.dismiss(ok);
  }

  trackBy(index: number, item: any) {
    return item?.ident00 ?? index;
  }

  //#region info
  resetInfo() {
    Object.assign(this.model, {
      so_Ct_LSX: "",
      so_Ct_KHSX: "",
      so_Ct_SO: "",
      ma_NhaMay: "",
      ma_PhanXuong: "",
      ma_Ca_Sx: "",
      ma_DayChuyen: "",
      ma_CongDoan: "",
      ma_ChiTietSp: "",
    });
    this.modelChange.emit(this.model);
  }

  FormCheckValid() {
    
    if(!this.is_QC)
    {
      if (this.model.so_Luong_Dau_Vao && this.model.so_Luong) {
      return this.model.so_Luong > this.model.so_Luong_Dau_Vao;
    }}
    else{
      if(this.model.so_Luong_Khong_Dat > this.model.so_Luong) {
        return true;
      }
    }
    return false;
  }


  //#endregion
}
