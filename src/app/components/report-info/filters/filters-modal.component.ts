import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Inject,
  TemplateRef,
  Output,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from "@angular/core";
import { ModalController, NavParams, LoadingController } from "@ionic/angular";
import { CommandType } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { SQLExecService } from "src/app/shared/services";
import { UtilityService } from "src/app/shared/utility.service";
import { ListModalComponent } from "src/app/layout/list-modal.component";
import {
  LayoutReport,
  ReportFilter,
  SourceModel,
  StatusModel,
} from "../../../models";
import {aspDateFilterComponent } from "../../../layout/asp-date-filter.component"
import * as _ from "lodash";
import * as moment from "moment";
@Component({
  selector: "app-filters-modal",
  templateUrl: "./filters-modal.component.html",
  styleUrls: ["./filters-modal.component.scss"],
  providers: [
    {
      provide: "STATUS_TYPE",
      useValue: {
        APPROVED: "approved",
        RETURNED: "returned",
      },
    },
    {
      provide: "SOURCE_TYPE",
      useValue: {
        MOBILE: "mobile",
        WINDOWN: "windown",
      },
    },
  ],
})
export class FiltersModalComponent implements OnInit, AfterViewInit {
  @ViewChild("chon_ngay") chon_ngay!: TemplateRef<any>;
  @ViewChild("ngay_ct") ngay_ct!: TemplateRef<any>;
  @ViewChild("area") area!: TemplateRef<any>;
  @ViewChild("dept") dept!: TemplateRef<any>;
  @ViewChild("employees") employees!: TemplateRef<any>;
  @ViewChild("customer") customer!: TemplateRef<any>;
  @ViewChild("warehouse") warehouse!: TemplateRef<any>;
  @ViewChild("groupsproduct") groupsproduct!: TemplateRef<any>;
  @ViewChild("products") products!: TemplateRef<any>;
  @ViewChild("cont") cont!: TemplateRef<any>;
  @ViewChild("kien") kien!: TemplateRef<any>;
  @ViewChild("kieu_nh") kieu_nh!: TemplateRef<any>;

  @ViewChild("so_Ct_SO") so_Ct_SO!: TemplateRef<any>;
  @ViewChild("so_Ct_LSX") so_Ct_LSX!: TemplateRef<any>;
  @ViewChild("trang_Thai") trang_Thai!: TemplateRef<any>;

  private loading;
  objectKeys = Object.keys;

  @Input() filterModel: ReportFilter = new ReportFilter();
  @Input() formlayout: LayoutReport;
  @Input() listFormLayout: any;
  dteNgay_Ct: any = moment().startOf("month").format("YYYY-MM-DD");
  dteNgay_Ct1: any = moment().startOf("month");
  dteNgay_Ct2: any = moment();

 
  sources: any[];
  status: any[];
  inventories: any[];
  groupproducts: any[];
  product: any[];
  today: any = new Date();
  listKieu_Nh: any[];
  listKieu_Th: any[];
  listTrang_Thai: any[];

  constructor(
    private sqlService: SQLExecService,
    private modalController: ModalController,
    private navParams: NavParams,
    private _utilityService: UtilityService,
    @Inject("STATUS_TYPE") private statusType: any,
    @Inject("SOURCE_TYPE") private sourceType: any,
    private LoadingCtrl: LoadingController,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
  dateChange() {
    if (!this._utilityService.hasValue(this.dteNgay_Ct2)) return;
    this.filterModel.startDate = moment(this.dteNgay_Ct1).format("YYYY-MM-DD");
    this.filterModel.endDate = moment(this.dteNgay_Ct2).format("YYYY-MM-DD");
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.filterModel = this.navParams.get("filterModel");
      this.formlayout = this.navParams.get("formlayout");
      this.listFormLayout = this.navParams.get("listFormLayout");
      this.get_List();
      this.initSource();
      this.initStatus();
      this.filterModel.ngay_Ct = this.dteNgay_Ct;
      this.filterModel.endDate = this.dteNgay_Ct2;
      this.filterModel.startDate = this.dteNgay_Ct1;
      this.showdefault_Value();
    }, 20);
  }

  showdefault_Value() {
    // _.forEach(this.listFormLayout, (o) => {
    //   switch (o.column_ID) {
    //     case "KIEU_NH": 
    //       this.filterModel.kieu_nh = o.default_Value;
    //       this.listKieu_Nh = this.listKieu_Nh? this.listKieu_Nh: o.default_Value_Name.split(",");
    //       break;
        
    //     case "KIEU_TH": 
    //       this.filterModel.kieu_th = o.default_Value;
    //       this.listKieu_Th = this.listKieu_Th
    //         ? this.listKieu_Th
    //         : o.default_Value_Name.split(",");
    //       break;
        
    //     case "TRANG_THAI": 
    //       this.filterModel.trang_Thai = o.default_Value;
    //       this.listTrang_Thai = this.listTrang_Thai
    //         ? this.listTrang_Thai
    //         : o.default_Value_Name.split(",");
    //       break;
        
    //   }
    // });
  }

  ionViewDidEnter() {}

  changeSource(source: any) {
    if (source.selected == true) {
      source.selected = false;
    } else {
      source.selected = true;
    }
  }

  removeChip(entry, type: string) {
    let idx = -1;
    switch (type) {
      case "area":
        idx = _.findIndex(this.filterModel.areas, { value: entry.value });
        if (idx > -1) this.filterModel.areas.splice(idx, 1);
        break;
      case "dept":
        idx = _.findIndex(this.filterModel.depts, { value: entry.value });
        if (idx > -1) this.filterModel.depts.splice(idx, 1);
        break;
      case "emp":
        idx = _.findIndex(this.filterModel.emps, { value: entry.value });
        if (idx > -1) this.filterModel.emps.splice(idx, 1);
        break;
      case "warehouses":
        idx = _.findIndex(this.filterModel.warehouses, { value: entry.value });
        if (idx > -1) this.filterModel.warehouses.splice(idx, 1);
        break;
      case "products":
        idx = _.findIndex(this.filterModel.products, { value: entry.value });
        if (idx > -1) this.filterModel.products.splice(idx, 1);
        break;
      case "groupsproduct":
        idx = _.findIndex(this.filterModel.groupsproduct, {
          value: entry.value,
        });
        if (idx > -1) this.filterModel.groupsproduct.splice(idx, 1);
        break;
      case "cont":
        idx = _.findIndex(this.filterModel.cont, { value: entry.value });
        if (idx > -1) this.filterModel.cont.splice(idx, 1);
        break;
      case "kien":
        idx = _.findIndex(this.filterModel.kien, { value: entry.value });
        if (idx > -1) this.filterModel.kien.splice(idx, 1);
        break;
    }
  }

  async openModalFilter(columnId: string = "", keyFilter: string = "") {
    const modal = await this.modalController.create({
      component: ListModalComponent,
      componentProps: {
        columnId: columnId,
        keyFilter: keyFilter,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != null) {
        if (columnId == "ma_Kho") {
          this.filterModel.warehouses = dataReturned.data?.columnID;
          this.filterModel.warehousesname = dataReturned.data?.columnName;
        }
        if (columnId == "ma_Nh_Vt") {
          this.filterModel.groupsproduct = dataReturned.data?.columnID;
          this.filterModel.groupsproductname = dataReturned.data?.columnName;
        }
        if (columnId == "ma_Vt") {
          (this.filterModel.products = dataReturned.data?.columnID),
            (this.filterModel.productsname = dataReturned.data?.columnName);
        }
        if (columnId == "ma_Dt") {
          (this.filterModel.customer = dataReturned.data?.columnID),
            (this.filterModel.customername = dataReturned.data?.columnName);
        }
        if (columnId == "ma_Bp") {
          (this.filterModel.depts = dataReturned.data?.columnID),
            (this.filterModel.deptsname = dataReturned.data?.columnName);
        }
        if (columnId == "ma_CbNv") {
          (this.filterModel.emps = dataReturned.data?.columnID),
            (this.filterModel.empsname = dataReturned.data?.columnName);
        }
        if (columnId == "so_Ct_SO")
          this.filterModel.so_Ct_SO = dataReturned.data?.columnID;
        if (columnId == "so_Ct_KHSX")
          this.filterModel.so_Ct_KHSX = dataReturned.data?.columnID;
        if (columnId == "so_Ct_LSX")
          this.filterModel.so_Ct_LSX = dataReturned.data?.columnID;
      }
    });

    return await modal.present();
  }

  async closeModal(ok: boolean) {
    if (ok) {
      this.filterModel.sources = new SourceModel({
        mobile: _.find(this.sources, { id: this.sourceType.MOBILE }).selected,
        windown: _.find(this.sources, { id: this.sourceType.WINDOWN }).selected,
      });

      this.filterModel.status = new StatusModel({
        approved: _.find(this.status, { id: this.statusType.APPROVED }).checked,
        returned: _.find(this.status, { id: this.statusType.RETURNED }).checked,
      });

      const dataReturned = {
        filter: true,
        model: this.filterModel,
      };
      this.LoadingCtrl.create({
        message: "Đang tải",
      }).then((overlay) => {
        this.loading = overlay;
        this.loading.present();
      });
      setTimeout(() => {
        this.loading.dismiss();
        this.modalController.dismiss(dataReturned);
      }, 3000);
    } else {
      await this.modalController.dismiss(null);
    }
  }
  async removeFilter() {
    await this.modalController.dismiss();
  }

  private initStatus() {
    this.status = [
      {
        id: this.statusType.APPROVED,
        title: "Đã xuất bill",
        color: "asp",
        checked: this.filterModel.status.approved,
      },
      //{ id: '2', title: 'Chưa xuất bill', checked: false, color: 'warning' },
      {
        id: this.statusType.RETURNED,
        title: "Đã trả bill",
        color: "danger",
        checked: this.filterModel.status.returned,
      },
    ];
  }

  private initSource() {
    this.sources = [
      {
        id: this.sourceType.MOBILE,
        title: "Điện thoại",
        icon: "phone-portrait-outline",
        selected: this.filterModel.sources.mobile,
      },
      {
        id: this.sourceType.WINDOWN,
        title: "Phần mềm",
        icon: "desktop-outline",
        selected: this.filterModel.sources.windown,
      },
    ];
  }
  private async get_List() {
    const apiParams: ApiParameter = new ApiParameter();
    apiParams.strSQLExec = "SELECT * FROM L81DMKHO ; SELECT * FROM L81DMVTNH";
    apiParams.cmdType = CommandType.Text;
    const res = await this.sqlService.ExecuteReturnDs(apiParams);
    this.inventories = res.table;
    this.groupproducts = res.table1;
  }
}

// {
//   uctngay: false,
//   ngay_ct: false,
//   area: false,
//   dept: false,
//   customer: false,
//   employees: false,
//   warehouse: false,
//   groupsproduct: false,
//   products: false,
//   cont: false,
//   kien: false,
//   kieu_nhom: false,
//   so_Ct_SO: false,
//   so_Ct_KHSX: false,
//   so_Ct_LSX: false,
//   trang_Thai: false,
// };
