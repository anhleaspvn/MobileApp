import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IdentityService } from 'src/app/shared/services';
import { UtilityService } from 'src/app/shared';
import { FilterWoModalComponent } from './filter/filter-wo-modal.component';
import { FilterProdstatusModalComponent } from './filter/filter-prodstatus-modal.component';
import { FilterCheckstateModalComponent } from './filter/filter-checkstate-modal.component';
import { Router } from '@angular/router';
import { QcinsService } from './core/services/qcins.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  woDocNo: any;
  status: any;
  checkState: any;
  docDate: any;
  qcID: any;
  createdBy: any;
  createdDate: any;
  submitting: boolean = false;
  model: any = [];
  constructor(
    private modalController: ModalController,
    private utilityService: UtilityService,
    private qcinsService: QcinsService,
    private identityService: IdentityService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createdBy = this.getStrCurrentUser();
    this.createdDate = new Date();
  }

  async openWOsFilterModal() {
    await this.utilityService.showLoader();
    
    const modal = await this.modalController.create({
      component: FilterWoModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.woDocNo = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          woDocNo: dataReturned.data.woDocNo,
        });
      }
    });
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }
  async openStatusFilterModel() {
    const modal = await this.modalController.create({
      component: FilterProdstatusModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.status = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          status: dataReturned.data.status,
        });
      }
    });
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  async openCheckStateFilterModel() {
    const modal = await this.modalController.create({
      component: FilterCheckstateModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.checkState = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          checkState: dataReturned.data.checkState,
        });
      }
    });
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  async onSubmit() {
    this.submitting = true;
    
    const res = await this.qcinsService
      .SaveHeaderQC(this.woDocNo, this.docDate, this.status, this.qcID, this.checkState, this.createdBy, this.createdDate)
      .finally(() => (this.submitting = false));

    if (res) {
      this.utilityService.showToast('Lưu thành công');
      this.router.navigateByUrl(
        'components/qcinspection/list'
      );
    }
  }

  private getStrCurrentUser() {
    let strCurrentUser='';
    this.identityService.currentUser.subscribe(res => {
      strCurrentUser = res.Member_ID;
    }); 
    return strCurrentUser;
  }
}
