/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { IonInfiniteScroll, ModalController } from "@ionic/angular";
import * as _ from "lodash";
import * as moment from "moment";
import { LayoutReport, ReportFilter } from "src/app/models";
import { ApiParameter } from "src/app/shared/api-params";
import { IdentityService } from "src/app/shared/services";
import { UtilityService } from "src/app/shared/utility.service";
import { FiltersModalComponent } from "./filters/filters-modal.component";
import { ReportService } from './core/services/report.service';

@Component({
  selector: "app-report-info",
  templateUrl: "./report-info.component.html",
  styleUrls: ["./report-info.component.scss"],
})
export class ReportInfoComponent implements OnInit {
  strTitle: string;
  report_Id: string;
  report_Parent: string;
  apiParams: ApiParameter = new ApiParameter();
  loading: boolean = true;

  dataSource!: MatTableDataSource<any[]>;
  filterModel: ReportFilter = new ReportFilter();
  _formlayout: LayoutReport = new LayoutReport();

  reportInfo: any;

  list_Columns: any[] =[];
  listFormLayout: any[]=[];

  dteNgay_Ct1: any = moment().startOf("month").format("YYYY-MM-DD");
  dteNgay_Ct2: any = moment().format("YYYY-MM-DD");

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modalController: ModalController,
    private identityService: IdentityService,
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    private reportService: ReportService,
    private router: Router
  ) {
    this.report_Id = this.route.snapshot.params.report_Id;
    this.strTitle = this.route.snapshot.queryParamMap.get("strTitle");
    this.report_Parent = this.route.snapshot.queryParamMap.get("report_Parent");
  }

  ngOnInit() {
    this.filterModel.startDate = this.dteNgay_Ct1;
    this.filterModel.endDate = this.dteNgay_Ct2;

    setTimeout(() => {
      this.getColumn(this.report_Id).finally(()=>this.openModalFilter());
    }, 20);

    
  }

  //get report
  async getColumn(Report_ID: string = "") {
      const res = await this.reportService
      .GetColumnReport(Report_ID)
      .finally(() => (this.loading = false));

    this.reportInfo = res.table;
    this.list_Columns = res.table1;
    this.listFormLayout = res.table2;
  
    
    this.showControlFilter();
  }

  showControlFilter() {
    _.forEach(this.listFormLayout, (o) => {
      switch (o.column_ID) {
        case "CHON_NGAY":
          this._formlayout.chon_ngay = true;
          break;
        case "NGAY_CT":
          this._formlayout.ngay_ct = true;
          break;
        case "MA_KV":
          this._formlayout.area = true;
          break;
          case "MA_DT":
          this._formlayout.customer = true;
          break;
          case "MA_CBNV":
          this._formlayout.employees = true;
          break;
          case "MA_BP":
          this._formlayout.dept = true;
          break;
          case "MA_KHO":
          this._formlayout.warehouse = true;
          break;
          case "MA_NH_VT":
          this._formlayout.groupsproduct = true;
          break;
          case "MA_VT":
          this._formlayout.products = true;
          break;
          case "KIEU_NH":
          this._formlayout.kieu_nh = true;
          break;
          case "KIEU_TH":
          this._formlayout.kieu_th = true;
          break;
          case "SO_CT_SO":
          this._formlayout.so_Ct_SO = true;
          break;
          case "SO_CTKHSX":
          this._formlayout.so_Ct_KHSX = true;
          break;
          case "SO_CT_LSX":
          this._formlayout.so_Ct_LSX = true;
          break;
          case "TRANG_THAI":
          this._formlayout.trang_Thai = true;
          break;
      }
    });
  }
  
  async getData() {
    this.loading = true;
    const item :any = {
      report_Id : this.report_Id,
      NGAY_CT1: this.filterModel.startDate
        ? new Date(this.filterModel.startDate).toISOString()
        : this.filterModel.startDate,
      NGAY_CT2: this.filterModel.endDate
        ? new Date(this.filterModel.endDate).toISOString()
        : this.filterModel.endDate,
      NGAY_CT: this.filterModel.ngay_Ct
        ? new Date(this.filterModel.ngay_Ct).toISOString()
        : this.filterModel.ngay_Ct,
      MA_KHO: this.filterModel.warehouses
        ? this.filterModel.warehouses
        : "",
      MA_NH_VT: this.filterModel.groupsproduct
        ? this.filterModel.groupsproduct
        : "",
      MA_VT: this.filterModel.products ? this.filterModel.products : "",
      MA_KV: this.filterModel.areas ? this.filterModel.areas : "",
      MA_DT: this.filterModel.customer ? this.filterModel.customer : "",
      MA_CBNV: this.filterModel.emps ? this.filterModel.emps : "",
      MA_BP: this.filterModel.depts ? this.filterModel.depts : "",
      KIEU_NH: this.filterModel.kieu_nh ? this.filterModel.kieu_nh.trim() : "",
      KIEU_TH: this.filterModel.kieu_th ? this.filterModel.kieu_th.trim() : "",
      TRANG_THAI: this.filterModel.trang_Thai ? this.filterModel.trang_Thai.trim() : "",
      SO_CT_SO: this.filterModel.so_Ct_SO ? this.filterModel.so_Ct_SO : "",
      SO_CT_KHSX: this.filterModel.so_Ct_KHSX ? this.filterModel.so_Ct_KHSX : "",
      so_Ct_LSX: this.filterModel.so_Ct_LSX ? this.filterModel.so_Ct_LSX : "",
      MA_DVCS: this.identityService.getStrCurrentMaDvCs(),
    };
    const res = await this.reportService.GetData(item).finally(() => (this.loading = false));

    const keyUpperData = res?.map((obj) =>
      _.mapKeys(obj, (v, k) => k)
    );
    this.dataSource = new MatTableDataSource(keyUpperData);
  }

  async openModalFilter() {
    const modal = await this.modalController.create({
      component: FiltersModalComponent,
      componentProps: {
        filterModel: this.filterModel,
        formlayout: this._formlayout,
        listFormLayout: this.listFormLayout,
      },
    });

    modal.onDidDismiss().then(async (dataReturned) => {
      const data = dataReturned.data;

      if (data && data.filter) {
        this.filterModel = Object.assign(data.model, {
          keyword: this.filterModel.keyword,
          top: this.filterModel.top,
        })
        await this.getData().finally();
      }
    });
    return await modal.present();
  }

  splitModel(_object: any[]) {
    let _values = "";
    if (_object && _object.length > 0) {
      _object.forEach((element) => {
        if (_values == "") _values = element.value;
        else _values = _values + "," + element.value;
      });
    }
    return _values;
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  gotoListReport() {
    const routeLink =
      "/components/report-info/list" +
      (this.report_Parent ? `/${this.report_Parent.split(",").join("/")}` : "");
    this.router.navigate([routeLink], {
      queryParams: { strTitle: this.strTitle },
    });
  }
}
