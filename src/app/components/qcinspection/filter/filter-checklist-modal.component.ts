import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/shared/services';
import { QcinsService } from '../core/services/qcins.service';

@Component({
  selector: 'app-filter-checklist-modal',
  templateUrl: './filter-checklist-modal.component.html',
  styleUrls: ['./filter-checklist-modal.component.scss'],
})
export class FilterChecklistModalComponent implements OnInit {
  model: any;
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string ='';
  member_Id: string ='';
  checkList: any[] = [];
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
    this.filterCheckList()
  }

  async filterCheckList() {
    this.loading = true;
    const res = await this.qcinsService.GetCheckListQC('1').finally(() => this.loading = false);
    this.checkList = res;
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
