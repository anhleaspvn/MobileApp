import { Component, Inject, OnInit, Optional } from "@angular/core";
import { CommandType } from "../../helpers";
import { enuEdit, AppConfig } from "../../helpers";
import { UtilityService } from "../../shared/utility.service";


import { ApiParameter } from "src/app/shared/api-params";
import { AlertController, ModalController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { IdentityService } from "../../shared/services";
import * as moment from "moment";
import { statisticsparams } from "./core/models";
import { FilterComponent } from "./views/filter.component";
import { DataModalReturned } from "src/app/shared";
import { StatisticsService } from "./core";
import { aspPermission } from 'src/app/shared/services';
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  params: statisticsparams = new statisticsparams();
  segment: string = 'ThongKe';
  strMaCt: string;
  currentMaDvCs: any;
  apiParams: ApiParameter = new ApiParameter();
  totalCount: number = 0;
  selectTrang_Thai: string = "";
  skeletons: any = [];
  loading: boolean = true;
  data: any[];
  searchTerm: string = "";
  routeLink: string = "";

  today: any = new Date();

  title: any = {
    LSX: "Chi tiết lệnh sản xuất",
    LSX_QC: "QC Lệnh sản xuất",
  };

  constructor(
    private statisticsService: StatisticsService,
    private modalController: ModalController,
    private identityService: IdentityService,
    private router: Router,
    private route: ActivatedRoute,
    private _utilityService: UtilityService,
  ) {
    this.strMaCt =  this.route.snapshot.params.maCt;
    route.data.subscribe((data) => {
      this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.currentMaDvCs = this.identityService.getStrCurrentMaDvCs();
      this.getList();
    }, 1);
    
  }

  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    const res =  await this.statisticsService.GetListStatistics(this.params).finally(() => (this.loading = false));
    this.data = res || [];
    this.totalCount = res[0]?.["totalCount"] || 0;
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: FilterComponent,
      componentProps: {
        filterParams: Object.assign({}, this.params, {
          Ngay_Ct1: this.params.Ngay_Ct1 || moment().startOf('month'),
          Ngay_Ct2: this.params.Ngay_Ct2 || moment()
        }) as statisticsparams
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      const data = dataReturned.data as DataModalReturned;
      if (data?.accepted) {
        this.params = Object.assign(data.data, {
          keyword: this.params.keyword,
          top: this.params.top
        });
        this.getList();
      }
    });
    return await modal.present();
  }

  dateChange() {
    this.getList();
  }

  loadMoreData(event, refresh: boolean = false) {
    this.params.top = this.params.top + 5;

    setTimeout(async () => {
      this.getList(refresh).finally(() => {
        event.target.complete();
        if (!refresh)
          event.target.disabled = this.params.top >= this.totalCount;
      });
    }, 100);
  }

  trackBy(index: number, item: any) {
    return item?.stt ?? index;
  }

  async view_edit(item: any) {
    if (item)
      {
        this.routeLink = "components/statistics/detail";
        this.router.navigate([this.routeLink],{queryParams:{so_Ct_LSX: item.so_Ct_LSX, so_Ct_KHSX: item.so_Ct_KHSX, 
          so_Ct_SO: item.so_Ct_SO, ma_Sp: item.ma_Vt } });
      }
  }

  // async edit(item: any, _enuEdit: enuEdit) {
    
  //   if (item) {  
  //     this.routeLink = "components/statistics/dialog-edit/" +this.strMaCt;
  //     if(_enuEdit == enuEdit.New)
  //       this.router.navigate([this.routeLink],{queryParams:{enuEdit:_enuEdit} });
  //     else
  //       this.router.navigate([this.routeLink],{queryParams:{stt: item.stt, enuEdit:_enuEdit} });
  //   }
  // }

  async delete(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/statistics/detail/" + item.stt + "/" + this.strMaCt
      );
  }


  
  segmentChanged(event : any)
  {
    this.segment = event.detail.value;
    this.getList();
  }
}

interface params {
  Ngay_Ct1: any;
  Ngay_Ct2: any;
  top?: number;
  keyword?: string;
  Ma_PhanXuong? : string;
  Ma_NhaMay? : string;
}
