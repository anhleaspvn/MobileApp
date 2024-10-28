import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { CommandType, enuEdit } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { SQLExecService } from "src/app/shared/services";
import * as _ from "lodash";
import { UtilityService } from "src/app/shared/utility.service";
import { StatisticsService } from "../core";

@Component({
  selector: "app-statistics-products-form",
  templateUrl: "./step-products-form.component.html",
  styleUrls: ["./step-products-form.component.scss"],
})
export class StepProductsFormComponent implements OnInit {
  @Input() model!: any;
  @Input() is_QC!: boolean;
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  labelPosition: 'true' | 'false' = 'false';
  enuEdit: enuEdit = enuEdit.New;
  today: Date = new Date();
  listDataAQL: any[] = [];
  listAQL: any[] = [];

  currencyMask: any = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 0,
    prefix: "",
    suffix: "",
    thousands: ".",
    nullable: false,
  };

  constructor(
    private utilityService: UtilityService, 
    private route: ActivatedRoute,
    private statisticsService: StatisticsService
  ) {
    this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));
  }

  ngOnInit() {
    if (this.is_QC) this.getListAQL().finally();
    // model.is_Dat_Qc
  }

  ngAfterContentChecked(): void {
    this.modelChange.emit(this.model);
  }

  ionViewWillEnter() {
    this.labelPosition = this.model.is_Dat_Qc?'true' : 'false';
    
  }

  async change_AQL() {
    const param ={
      AQL : this.model.aql,
      so_Luong : this.model.so_Luong,
    }
    const res = await this.statisticsService.Change_AQL(param);
    const itemAQL  = res[0] || [];
    
    this.model.so_Luong_Lay_Mau = itemAQL.so_Luong_Lay_Mau;
    this.model.so_Luong_ACC = itemAQL.acc;

    this.changeKhongDat();
  }

  async getListAQL() {
    const res = await this.statisticsService.GetListAQL();
    this.listAQL = res || [];
  }

  changeKhongDat() {
    
    if(this.model.so_Luong_Khong_Dat > this.model.so_Luong)
    {
      this.utilityService.showAlert(
        "Không được nhập lớn hơn số lượng thống kê."
      );
      this.model.so_Luong_Khong_Dat = 0;
    }

    this.model.so_Luong_Dat = this.model.so_Luong - this.model.so_Luong_Khong_Dat;
      
    if(this.model.is_AQL && this.is_QC )
      {
        this.model.is_Dat_Qc = this.model.so_Luong_Khong_Dat <= this.model.so_Luong_ACC? true: false;
        this.labelPosition = this.model.is_Dat_Qc?'true' : 'false';
      }
  }

  deleteKhongDat()
  {
    this.model.so_Luong_Khong_Dat = 0;
    this.changeKhongDat();
  }

  checkchangeSo_Luong() {
   
    if (this.model.so_Luong > this.model.so_Luong_Dau_Vao) {
      this.utilityService.showAlert(
        "Không được nhập lớn hơn số lượng đầu vào."
      );
      this.model.so_Luong = 0;
    }
  }
}
