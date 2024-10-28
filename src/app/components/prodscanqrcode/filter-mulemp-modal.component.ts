import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/shared/services';
import { EmpScanService } from './core';

@Component({
  selector: 'app-filter-mulemp-modal',
  templateUrl: './filter-mulemp-modal.component.html',
  styleUrls: ['./filter-mulemp-modal.component.scss'],
})
export class FilterMulEmpModalComponent implements OnInit {
  model: any;
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string = '';
  member_Id: string = '';
  emps: any[] = [];
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
    this.filterEmps();
  }

  async filterEmps() {
    this.loading = true;
    const res = await this.empscanService.GetMulEmpsByLine().finally(() => this.loading = false);
    this.emps = res;
  }
  
  async onChangeRadio(item) {
    await this.modalController.dismiss(item);
  }
  async handleCheckboxChange(event, item) {
    const isChecked = event.detail.checked;
    if (isChecked) {
        // Add to selected checkboxes
        this.selectedCheckboxes.push(item.empID);
    }
    else {
        // Remove from selected checkboxes
        const index = this.selectedCheckboxes.findIndex((item) => item.mulempID === item.mulempID);
        if (index !== -1) {
            this.selectedCheckboxes.splice(index, 1);
        }
    }
}
  async closeModal(ok: boolean = false) {
    this.modalController.dismiss(this.selectedCheckboxes);
  }
}
