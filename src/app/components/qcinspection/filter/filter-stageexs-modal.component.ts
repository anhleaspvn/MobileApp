import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/shared/services';
import { QcinsService } from '../core/services/qcins.service';

@Component({
  selector: 'app-filter-stageexs-modal',
  templateUrl: './filter-stageexs-modal.component.html',
  styleUrls: ['./filter-stageexs-modal.component.scss'],
})
export class FilterStageexsModalComponent implements OnInit {

  model: any;
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string ='';
  member_Id: string ='';
  stageexs: any[] = [];
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
    this.filterStageExs()
  }

  async filterStageExs() {
    this.loading = true;
    const res = await this.qcinsService.GetStageExs('1').finally(() => this.loading = false);
    this.stageexs = res;
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
