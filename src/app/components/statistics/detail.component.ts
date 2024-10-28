import { Component, Inject, OnInit, Optional } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";
import * as moment from "moment";
import { AppConfig, CommandType, enuEdit } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { aspPermission, SQLExecService } from "src/app/shared/services";
import { StatisticsService } from "./core";
import { DetailStepComponent } from "./detail-step.component";
import { DialogEditComponent } from "./dialog-edit.component";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  so_Ct_LSX: string;
  so_Ct_KHSX: string;
  so_Ct_SO: string;
  ma_Sp: string;

  loading: boolean = false;
  searchTerm: string="";
  data: any[] = [];
  apiParams: ApiParameter = new ApiParameter();
  totalCount: number = 0;

  constructor(
    private modalController: ModalController,
    private statisticsService: StatisticsService,
    private route: ActivatedRoute,
    @Optional() @Inject("SP_LIST") private spList: string
  ) {
    this.so_Ct_LSX = this.route.snapshot.queryParamMap.get("so_Ct_LSX");
    this.so_Ct_KHSX = this.route.snapshot.queryParamMap.get("so_Ct_KHSX");
    this.so_Ct_SO = this.route.snapshot.queryParamMap.get("so_Ct_SO");
    this.ma_Sp = this.route.snapshot.queryParamMap.get("ma_Sp");

    route.data.subscribe((data) => {
      this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getList();
  }

  async getList() {
    this.loading = true;
    const paraList = {
      so_Ct_LSX: this.so_Ct_LSX,
      so_Ct_KHSX: this.so_Ct_KHSX,
      so_Ct_SO: this.so_Ct_SO,
      ma_Sp: this.ma_Sp,
      keyword:this.searchTerm,
    };
    const res = await this.statisticsService.GetDetailStatistics(paraList).finally(() => (this.loading = false));
    this.data = res || [];
    this.totalCount = res[0]?.["totalCount"] || 0;
  }

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(async () => {
      this.getList().finally(() => {
        event.target.complete();
      });
    }, 100);
  }

  async edit(item: any, _enuEdit: enuEdit) {
    const modal = await this.modalController.create({
      component: DetailStepComponent,
      componentProps: {
        itemStep: item,
        enuEdit: _enuEdit,
        object_Id: this.perm.object_ID
      },
    });

    modal.onDidDismiss().then(
      (dataReturned)=>{
        setTimeout(async () => {
          this.getList().finally();
        }, 100);
      }
    )
    return await modal.present();
  }

  async add(model : any) {
    const item = {
      ngay_Ct: moment().toDate(),
      ma_Vt: model.ma_Vt,
      so_Ct_LSX: model.so_Ct_LSX,
      so_Ct_KHSX: model.so_Ct_KHSX,
      so_Ct_SO: model.so_Ct_SO,
      ma_NhaMay: model.ma_NhaMay,
      ma_PhanXuong: model.ma_PhanXuong,
      ma_Ca_Sx: model.ma_Ca_Sx,
      ma_DayChuyen: model.ma_DayChuyen,
      ma_CongDoan: model.ma_CongDoan,
      ma_ChiTietSp: model.ma_ChiTietSp,
      so_Luong: model.so_Luong_Ct_Can_Sx,
      so_Luong_Dau_Vao: model.so_Luong_Ct_Can_Sx,
      so_Luong_Dat: model.so_Luong_Ct_Can_Sx,
      so_Luong_Ct_Can_Sx: model.so_Luong_Ct_Can_Sx,
    };
    const modal = await this.modalController.create({
      component: DialogEditComponent,
      componentProps: {
        itemStep: item,
        enuEdit: enuEdit.New,
        so_Luong_Ct_Can_Sx: model.so_Luong_Ct_Can_Sx,
      },
    });

    modal.onDidDismiss().then((datareturn) => {
      if (datareturn.data) this.getList().finally();
    });

    return await modal.present();
  }

  searChange()
  {

  }
}
