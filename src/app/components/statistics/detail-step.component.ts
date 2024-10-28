import { Component, Inject, Input, OnInit, Optional } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavParams } from "@ionic/angular";
import * as _ from "lodash";
import { assign } from "lodash";
import * as moment from "moment";
import { AppConfig, CommandType, enuEdit } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { aspPermission, aspPermissionsService} from "src/app/shared/services";
import { UtilityService } from "src/app/shared/utility.service";
import { StatisticsService } from "./core";
import { DialogEditComponent } from "./dialog-edit.component";

@Component({
  selector: "app-detail-step",
  templateUrl: "./detail-step.component.html",
  styleUrls: ["./detail-step.component.scss"],
})
export class DetailStepComponent implements OnInit {
  // @Input() model: any = {};
  perm: aspPermission = Object.create(null);
  perm_qc: aspPermission = Object.create(null);
  object_Id: string = "";
  model: any = {};
  searchTerm: string = "";
  strTitle: string = "Danh sách thống kê";
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  submitting: boolean = false;
  enuEdit: enuEdit = enuEdit.New;
  data: any[];
  total: number = 0;
  total_Dat: number = 0;

  constructor(
    private utilityService: UtilityService,
    private modalController: ModalController,
    private navParams: NavParams,
    private route: ActivatedRoute,
    private statisticsService: StatisticsService,
    private permissionsService: aspPermissionsService
  ) {
    this.model = this.navParams.get("itemStep");
    this.enuEdit = Number(this.navParams.get("enuEdit"));
    this.object_Id = this.navParams.get("object_Id");

    // route.data.subscribe((data) => {
    //   this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    // });
    this.permissionsService.GetPermission(this.object_Id).then(res => this.perm = res);
    this.permissionsService.GetPermission('qc').then(res => this.perm_qc = res);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.getListStep();
    }, 1);
  }

  async getListStep(isLoading: boolean = true) {
    const paraList = {
      so_Ct_LSX: this.model.so_Ct_LSX,
      so_Ct_KHSX: this.model.so_Ct_KHSX,
      so_Ct_SO: this.model.so_Ct_SO,
      ma_Sp: this.model.ma_Sp,
      ma_CongDoan: this.model.ma_CongDoan,
      keyword: this.searchTerm,
    };

    const res = await this.statisticsService.GetDetailStatisticsCongDoanDt(paraList).finally();
    this.data = res || [];

    this.total = _.sumBy(this.data, "so_Luong");
    this.total_Dat = _.sumBy(this.data, "so_Luong_Dat");
  }

  async closeModal(ok: boolean = false) {
    await this.modalController.dismiss(ok);
  }

  trackBy(index: number, item: any) {
    return item?.ident00 ?? index;
  }

  ionViewDidLeave() {
    this.model = {
    };
  }

  async add() {
    
    const item = {
      ngay_Ct: moment().toDate(),
      ma_Vt: this.model.ma_Vt,
      so_Ct_LSX: this.model.so_Ct_LSX,
      so_Ct_KHSX: this.model.so_Ct_KHSX,
      so_Ct_SO: this.model.so_Ct_SO,
      ma_NhaMay: this.model.ma_NhaMay,
      ma_PhanXuong: this.model.ma_PhanXuong,
      ma_Ca_Sx: this.model.ma_Ca_Sx,
      ma_DayChuyen: this.model.ma_DayChuyen,
      ma_CongDoan: this.model.ma_CongDoan,
      ma_ChiTietSp: this.model.ma_ChiTietSp,
      so_Luong: 0,
      so_Luong_Dau_Vao: this.model.so_Luong_Ct_Can_Sx,
      so_Luong_Ct_Can_Sx: this.model.so_Luong_Ct_Can_Sx,
    };
    
    const modal = await this.modalController.create({
      component: DialogEditComponent,
      componentProps: {
        itemStep: item,
        enuEdit: enuEdit.New,
        is_QC: false,
        allow_Edit : true
      },
    });
  
    modal.onDidDismiss().then((datareturn) => {
      if (datareturn.data) 
        this.getListStep();
    });

    return await modal.present();
  }

  async edit(item: any, QC: boolean = false) {
  
    Object.assign(item,{
      so_Luong_Ct_Can_Sx: this.model.so_Luong_Ct_Can_Sx,
    })

    if(QC && item.so_Luong <= 0)
    {
      this.utilityService.showAlert('Chưa nhập số lượng thống kê!');
      return;
    }

    const modal = await this.modalController.create({
      component: DialogEditComponent,
      componentProps: {
        itemStep: item,
        enuEdit: enuEdit.Edit,
        is_QC: QC,
        allow_Edit: this.perm.allow_Edit
      },
    });

    modal.onDidDismiss().then((datareturn) => {
        this.getListStep();
    });

    return await modal.present();
  }

  async remove(item: any) {
    const params ={ident00 :item.ident00}
    const res = await this.statisticsService.DeleteStatistics(params);
    if (res) {
      this.utilityService.showToast("Xoá thành công");
      this.getListStep();
    } else this.utilityService.showToast("Lỗi");
  }
}
