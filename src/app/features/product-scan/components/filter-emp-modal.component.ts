import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { DataToolService, SQLExecService, VoucherService } from 'src/app/core';

import { ApiParameter } from 'src/app/core/api/api-params';
import { IdentityService } from 'src/app/core'
import * as _ from 'lodash';
import { UtilityService } from 'src/app/shared/utils/utility.service';
import { CommandType } from 'src/app/shared/types';
import { EmpScanService } from '../data-access/empscan.service';


@Component({
  selector: 'app-filter-emp-modal',
  templateUrl: './filter-emp-modal.component.html',
  styleUrls: ['./filter-emp-modal.component.scss'],
})
export class FilterEmpModalComponent implements OnInit {
  model: any;
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string ='';
  member_Id: string ='';
  woDocNo: string = '';
  emps: any[] = [];
  apiParams: ApiParameter = new ApiParameter();

  constructor(
    private identityService: IdentityService,
    private sqlService: SQLExecService,
    private modalController: ModalController,
    public _utilityService: UtilityService,
    private navParams: NavParams,
    private empscanService: EmpScanService
  ) { }

  ngOnInit() {
    this.filterEmps();
  }

  async filterEmps() {
    this.loading = true;
    this.member_Id = await this.identityService.getStrMemberId();
    const res = await this.empscanService.GetEmpsByLine(this.member_Id, this.woDocNo).finally(() => this.loading = false);
    this.emps = res;
  }
  
  async onChangeRadio(item) {
    await this.modalController.dismiss(item);
  }

  async closeModal(ok: boolean = false) {
    if (ok) {
      await this.modalController.dismiss(this.model);
    } else {
      await this.modalController.dismiss(null);
    }
  }
}
