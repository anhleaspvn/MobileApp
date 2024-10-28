import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../core/services/qcins.service';
import { IdentityService } from 'src/app/shared/services';
import { FilterStageexsModalComponent } from '../filter/filter-stageexs-modal.component';
import { FilterChecklistModalComponent } from '../filter/filter-checklist-modal.component';

@Component({
  selector: 'app-edit-dim',
  templateUrl: './edit-dim.component.html',
  styleUrls: ['./edit-dim.component.scss'],
})
export class EditDimComponent implements OnInit {
  autoID: any;
  headerID: any;
  iqcCheckID: any;
  lastmodifiedBy: any;
  lastmodifiedDate: any;
  iqcTemplateQuantity: any;
  iqcEvalueResult: any;
  iqcPeriodTime: any;
  iqcDFID: any;
  iqcStandardMin: any;
  iqcStandardMax: any;
  iqcEvalueActual: any;
  iqcEvalueCheckTime: any;
  iqcCheckingContent: any;
  iqcDeviceID: any;
  iqcMeasuringToolID: any;
  defect: any;
  model: any = [];
  submitting: boolean = false;
  constructor(
    private modalController: ModalController,
    private utilityService: UtilityService,
    private qcinsService: QcinsService,
    private identityService: IdentityService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.headerID = this.route.snapshot.params.headerID;
    this.autoID = this.route.snapshot.params.autoID;
   }

  ngOnInit() {
    this.lastmodifiedBy = this.getStrCurrentUser();
    this.lastmodifiedDate = new Date();
    this.getList();
  }

  async getList() {
    var res = await this.qcinsService.GetListDimAutoID(this.headerID, this.autoID).finally();
    this.model.iqcCheckID = res[0].iqcCheckID;
    this.iqcDFID = res[0].iqcdfid;
    this.model.iqcCheckingContent = res[0].iqcCheckingContent;
    this.iqcStandardMin = res[0].iqcStandardMin;
    this.iqcStandardMax = res[0].iqcStandardMax;
    this.iqcEvalueCheckTime = res[0].iqcEvalueCheckTime;
    this.iqcDeviceID = res[0].iqcDeviceID;
    this.iqcMeasuringToolID = res[0].iqcMeasuringToolID;
    this.iqcEvalueActual = res[0].iqcEvalueActual;
    this.iqcEvalueResult = res[0].iqcEvalueResult;
  }

  async openStageExsFilterModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: FilterStageexsModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.iqcCheckID = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          iqcCheckID: dataReturned.data.iqcCheckID,
        });
      }
    });
    
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  async openCheckListFilterModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: FilterChecklistModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.iqcCheckingContent = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          iqcCheckingContent: dataReturned.data.iqcCheckingContent,
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
      .EditDimQC(this.autoID, this.model.iqcCheckID,this.iqcDFID, this.iqcStandardMin, this.iqcStandardMax, this.iqcEvalueActual,
                  this.iqcEvalueResult, this.iqcEvalueCheckTime, this.model.iqcCheckingContent, this.iqcDeviceID, this.iqcMeasuringToolID,
                  this.lastmodifiedBy, this.lastmodifiedDate)
      .finally(() => (this.submitting = false));

      debugger
    if (res) {
      this.utilityService.showToast('Lưu thành công');
      this.router.navigateByUrl(
        'components/qcinspection/dim/' + this.headerID
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

  view_backdim() {
      this.router.navigateByUrl(
        "components/qcinspection/dim/" + this.headerID
      );
  }
}
