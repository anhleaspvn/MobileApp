import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../core/services/qcins.service';
import { IdentityService } from 'src/app/shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterStageexsModalComponent } from '../filter/filter-stageexs-modal.component';
import { FilterQcdefectModalComponent } from '../filter/filter-qcdefect-modal.component';

@Component({
  selector: 'app-edit-exins',
  templateUrl: './edit-exins.component.html',
  styleUrls: ['./edit-exins.component.scss'],
})
export class EditExinsComponent implements OnInit {
  iqcCheckID: any;
  lastmodifiedBy: any;
  lastmodifiedDate: any;
  headerID: any;
  autoID: any;
  iqcCheckCont: any;
  iqcTemplateQuantity: any;
  iqcEvalueResult: any;
  iqcPeriodTime: any;
  model: any = [];
  submitting: boolean = false;
  iqcDefect: any;
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
    var res = await this.qcinsService.GetListExinsAutoID(this.headerID, this.autoID).finally();
    this.model.iqcCheckID = res[0].iqcCheckID;
    this.iqcCheckCont = res[0].iqcCheckCont;
    this.iqcTemplateQuantity = res[0].iqcTemplateQuantity;
    this.iqcEvalueResult = res[0].iqcEvalueResult;
    this.iqcPeriodTime = res[0].iqcPeriodTime;
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

  async openDefectFilterModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: FilterQcdefectModalComponent,
      componentProps: {
        iqcDefect: this.iqcDefect
    },
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.iqcDefect = dataReturned.data.join(',');
        this.model = Object.assign({}, this.model, {
          iqcDefect: dataReturned.data.join(','),
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
      .EditExinsQC(this.autoID, this.model.iqcCheckID, this.iqcCheckCont, this.iqcTemplateQuantity, this.iqcEvalueResult,
          this.iqcPeriodTime, this.lastmodifiedBy, this.lastmodifiedDate)
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
