import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/shared/services';
import { EmpScanService } from './core';

@Component({
  selector: 'app-filter-stage-modal',
  templateUrl: './filter-stage-modal.component.html',
  styleUrls: ['./filter-stage-modal.component.scss'],
})
export class FilterStageModalComponent implements OnInit {
  woDocNo: any;
  model: any;
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string = '';
  member_Id: string = '';
  stages: any[] = [];
  selectedCheckboxes: any[] = [];
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
    this.filterStages();
  }

  async filterStages() {
    this.loading = true;
    const res = await this.empscanService.GetStageIDByWO(this.woDocNo).finally(() => this.loading = false);
    this.stages = res;
  }
  
  async onChangeRadio(item) {
    await this.modalController.dismiss(item);
  }
  async handleCheckboxChange(event, item) {
    const isChecked = event.detail.checked;
    
    if (isChecked) {
        // Add to selected checkboxes
        this.selectedCheckboxes.push(item.stageID);
    }
    else {
        // Remove from selected checkboxes
        const index = this.selectedCheckboxes.findIndex((item) => item.stageIDID === item.stageID);
        if (index !== -1) {
            this.selectedCheckboxes.splice(index, 1);
        }
    }
}
  async closeModal(ok: boolean = false) {
    this.modalController.dismiss(this.selectedCheckboxes);
  }
}
