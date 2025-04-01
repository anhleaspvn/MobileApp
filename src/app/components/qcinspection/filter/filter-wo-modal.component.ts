import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/shared/services';
import { QcinsService } from '../core/services/qcins.service';

@Component({
  selector: 'app-filter-wo-modal',
  templateUrl: './filter-wo-modal.component.html',
  styleUrls: ['./filter-wo-modal.component.scss'],
})
export class FilterWoModalComponent implements OnInit {
  model: any;
  loading: boolean = false;
  searchTerm: any = '';
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
    private qcinsService : QcinsService
  ) { }

  ngOnInit() {
    this.filterWOs()
  }

  async filterWOs() {
    this.loading = true;
    const res = await this.qcinsService.GetWODocNoListByLine('1', this.searchTerm).finally(() => this.loading = false);
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
