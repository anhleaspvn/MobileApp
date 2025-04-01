import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { DataToolService, SQLExecService, VoucherService } from '../../shared/services';

import { ApiParameter } from 'src/app/shared/api-params';
import { IdentityService } from '../../shared/services'
import * as _ from 'lodash';
import { UtilityService } from '../../shared/utility.service';
import { CommandType } from '../../helpers';
import { EmpScanService } from './core/services/empscan.service';


@Component({
  selector: 'app-filter-wo-modal',
  templateUrl: './filter-wo-modal.component.html',
  styleUrls: ['./filter-wo-modal.component.scss'],
})
export class FilterWoModalComponent implements OnInit {

  model: any;
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string ='';
  member_Id: string ='';
  wos: any[] = [];
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
    this.filterWOs()
  }

  async filterWOs() {
    this.loading = true;
    this.member_Id = await this.identityService.getStrMemberId();
    debugger
    const res = await this.empscanService.GetWOsByLine(this.member_Id).finally(() => this.loading = false);
    this.wos = res;
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
