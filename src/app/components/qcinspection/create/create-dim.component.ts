import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../core/services/qcins.service';
import { IdentityService } from 'src/app/shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterStageexsModalComponent } from '../filter/filter-stageexs-modal.component';
import { FilterChecklistModalComponent } from '../filter/filter-checklist-modal.component';
import { FilterQcdefectModalComponent } from '../filter/filter-qcdefect-modal.component';

@Component({
  selector: 'app-create-dim',
  templateUrl: './create-dim.component.html',
  styleUrls: ['./create-dim.component.scss'],
})
export class CreateDimComponent implements OnInit {
  iqcCheckID: any;
  createdBy: any;
  createdDate: any;
  headerID: any;
  iqcTemplateQuantity: any;
  iqcEvalueResult: any;
  iqcPeriodTime: any;
  iqcDFID: any;
  iqcStandardMin: any;
  iqcStandardMax: any;
  iqcEvalueActual1: any;
  iqcEvalueActual2: any;
  iqcEvalueActual3: any;
  iqcEvalueActual4: any;
  iqcEvalueActual5: any;
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
   }

  ngOnInit() {
    this.createdBy = this.getStrCurrentUser();
    this.createdDate = new Date();
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
    debugger

    const res = await this.qcinsService
      .SaveDimQC(this.headerID,this.iqcCheckID.iqcCheckID,this.iqcDFID, this.iqcStandardMin, this.iqcStandardMax, this.iqcEvalueActual1,
                  this.iqcEvalueActual2, this.iqcEvalueActual3, this.iqcEvalueActual4, this.iqcEvalueActual5,
                  this.iqcEvalueResult, this.iqcEvalueCheckTime, this.iqcCheckingContent.iqcCheckingContent, this.iqcDeviceID, this.iqcMeasuringToolID,
                  this.createdBy, this.createdDate)
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
