import { Route } from "@angular/compiler/src/core";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommandType, enuEdit } from "src/app/helpers";
import { ApiParameter } from "src/app/shared/api-params";
import { SQLExecService } from "src/app/shared/services";
import * as _ from "lodash"
import { StatisticsService } from "../core";
import { ControlContainer, NgForm } from "@angular/forms";
@Component({
  selector: "app-statistics-info-form",
  templateUrl: "./step-info-form.component.html",
  styleUrls: ["./step-info-form.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepInfoFormComponent implements OnInit {
  @Input() is_QC!: boolean;
  @Input() model!: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  enuEdit: enuEdit = enuEdit.New;
  today: Date = new Date();

  listSO: any[] = [];
  listLSX: any[] = [];
  listKHSX: any[] = [];

  listNhaMay: any[] = [];
  listPhanXuong: any[] = [];
  listCa: any[] = [];
  listDayChuyen: any[] = [];
  listCongDoan: any[] = [];
  listChiTietSp: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private statisticsService: StatisticsService
  ) {
    this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));    
  }

  ngOnInit() {
    setTimeout(() => {
      this.getList().finally();
    }, 10);
  }

  ngAfterContentChecked(): void {
    this.modelChange.emit(this.model);
  }

  async getList() {

    const paraList = {
      Ma_Sp : this.model.ma_Vt,
      Ma_DvCs: "A01",
    };

    const res = await this.statisticsService.GetDanhMucThongKe(paraList).finally();
    this.listNhaMay = res.table;
    this.listPhanXuong = res.table1;
    this.listCa = res.table2;
    this.listDayChuyen = res.table3;
    this.listCongDoan = res.table4;
    this.listChiTietSp = res.table5;
    this.listSO = res.table6;
    this.listKHSX = res.table7;
    this.listLSX = res.table8

  }
}
