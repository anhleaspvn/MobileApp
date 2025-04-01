import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from './core/services/qcins.service';
import { IdentityService } from 'src/app/shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterProdstatusModalComponent } from './filter/filter-prodstatus-modal.component';
import { FilterCheckstateModalComponent } from './filter/filter-checkstate-modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  woDocNo: any;
  status: any;
  checkState: any;
  docDate: any;
  qcID: any;
  headerID: any;
  lastmodifiedBy: any;
  lastmodifiedDate: any;
  submitting: boolean = false;
  model: any = [];
  filterModel: FilterModel = {
    fromDate: moment().format('YYYY-MM-DD'),
    toDate: moment().format('YYYY-MM-DD')
  };

  searchTerm: any = '';
  constructor(
    private modalController: ModalController,
    private utilityService: UtilityService,
    private qcinsService: QcinsService,
    private identityService: IdentityService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.headerID = this.route.snapshot.params.headerID;
  }

  ngOnInit() {
    this.lastmodifiedBy = this.getStrCurrentUser();
    this.lastmodifiedDate = new Date();
    this.GetCurrentQC();
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
    debugger
    const res = await this.qcinsService
      .EditHeaderQC(this.headerID, this.model.status, this.qcID, this.model.checkState, this.lastmodifiedBy, this.lastmodifiedDate)
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
  async GetCurrentQC(){
    const res = await this.qcinsService.GetListQCInspection(this.headerID, this.filterModel.fromDate, this.filterModel.toDate, this.searchTerm);
    this.model.status = res[0].prodStatus;
    this.model.checkState = res[0].checkState;
    this.qcID = res[0].qcid;
  }
}
interface FilterModel {
  fromDate: any;
  toDate: any;
}
