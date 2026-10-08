import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../../data-access/qcins.service';
import { IdentityService } from 'src/app/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterStageexsModalComponent } from '../../components/filter/filter-stageexs-modal.component';
import { FilterQcdefectModalComponent } from '../../components/filter/filter-qcdefect-modal.component';
import { CreateDefectComponent } from '../create/create-defect.component';
import { FilterAspstageModalComponent } from '../../components/filter/filter-aspstage-modal.component';

@Component({
  selector: 'app-edit-exins',
  templateUrl: './edit-exins.component.html',
  styleUrls: ['./edit-exins.component.scss'],
})
export class EditExinsComponent implements OnInit {
  iqcCheckID: any;
  customCheckName: any;
  lastmodifiedBy: any;
  lastmodifiedDate: any;
  headerID: any;
  autoID: any;
  iqcCheckCont: any;
  iqcTemplateQuantity: any;
  iqcEvalueResult: any;
  iqcPeriodTime: any;
  model: any = {};
  iqcCheckState: string = '';
  submitting: boolean = false;
  iqcDefect: any;
  iqcShiftID: any;
  periodTime: any = [];
  stageName: string = '';
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
    this.checkLockStatus();
    this.lastmodifiedBy = this.getStrCurrentUser();
    this.lastmodifiedDate = new Date();
    this.getList();
    this.getPeriodTime();
  }

  async checkLockStatus() {
    try {
      const res = await this.qcinsService.GetListQCInspection(this.headerID, '1970-01-01', '2099-12-31', '');
      if (res && res.length > 0) {
        const isLocked = res[0].isLocked === 1 || res[0].isLocked === true || res[0].IsLocked === 1 || res[0].IsLocked === true;
        if (isLocked) {
          this.utilityService.showToast('Phiếu kiểm tra đã bị khóa bởi Leader.');
          this.router.navigateByUrl('components/qcinspection/exins/' + this.headerID);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async getList() {
    var res = await this.qcinsService.GetListExinsAutoID(this.headerID, this.autoID).finally();
    if (res && res.length > 0) {
      const item = res[0];
      this.model.iqcCheckID = item.iqcCheckID ?? item.IQCCheckID;
      this.iqcCheckCont = item.iqcCheckCont ?? item.IQCCheckCont;
      this.iqcTemplateQuantity = item.iqcTemplateQuantity ?? item.IQCTemplateQuantity;
      this.iqcEvalueResult = item.iqcEvalueResult ?? item.IQCEvalueResult;
      this.iqcPeriodTime = item.iqcPeriodTime ?? item.IQCPeriodTime;
      this.iqcShiftID = item.iqcShiftID ?? item.IQCShiftID;
      this.iqcCheckState = item.checkState ?? item.CheckState ?? '';

      const checkID = item.iqcCheckID ?? item.IQCCheckID;
      const checkName = item.iqcCheckName ?? item.IQCCheckName;
      if (checkID === 'STEP34') {
        this.customCheckName = checkName;
        this.iqcCheckID = { iqcCheckID: 'STEP34', iqcCheckName: 'Khác' };
      } else {
        this.customCheckName = '';
        this.iqcCheckID = { iqcCheckID: checkID, iqcCheckName: checkName };
      }

      this.loadStageName();
      this.onShiftChange();
    }
  }

  async getPeriodTime() {
    await this.onShiftChange();
  }

  async onShiftChange() {
    try {
      const res = await this.qcinsService.GetPeriodTime(this.iqcShiftID || 'DayShift', 'EXINS');
      this.periodTime = res || [];
    } catch (e) {
      console.error(e);
      this.periodTime = [];
    }
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

  async loadStageName() {
    if (this.iqcCheckCont) {
      const stages = await this.qcinsService.GetASPStageExList(this.iqcCheckCont);
      if (stages && stages.length > 0) {
        const matched = stages.find(s => s.stageID === this.iqcCheckCont);
        if (matched) {
          this.stageName = matched.stageName;
        }
      }
    }
  }

  async openStageFilterModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: FilterAspstageModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.iqcCheckCont = dataReturned.data.stageID;
        this.stageName = dataReturned.data.stageName;
      }
    });
    
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  clearStage() {
    this.iqcCheckCont = '';
    this.stageName = '';
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

  clearCheckID() {
    this.model.iqcCheckID = '';
    this.iqcCheckID = null;
    this.customCheckName = '';
  }

  clearTemplateQuantity() {
    this.iqcTemplateQuantity = '';
  }

  clearEvalueResult() {
    this.iqcEvalueResult = '';
  }

  clearPeriodTime() {
    this.iqcPeriodTime = '';
  }

  clearShiftID() {
    this.iqcShiftID = '';
  }

  async openDefectCreate(parentAutoID?: any) {
    await this.utilityService.showLoader();
    const checkIDStr = this.iqcCheckID ? (typeof this.iqcCheckID === 'object' ? this.iqcCheckID.iqcCheckID : this.iqcCheckID) : (this.model.iqcCheckID || '');
    const modal = await this.modalController.create({
      component: CreateDefectComponent,
      componentProps: {
        headerID: this.headerID,
        iqcCheckID: checkIDStr,
        parentAutoID: parentAutoID || this.autoID
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
    if (this.submitting) return;
    this.submitting = true;
    
    let checkIDValue = this.iqcCheckID ? (typeof this.iqcCheckID === 'object' ? this.iqcCheckID.iqcCheckID : this.iqcCheckID) : (this.model.iqcCheckID || '');
    let checkNameValue = '';
    if (checkIDValue === 'STEP34' && this.customCheckName) {
      checkNameValue = this.customCheckName;
    }

    const res = await this.qcinsService
      .EditExinsQC(this.autoID, checkIDValue, this.iqcCheckCont, this.iqcTemplateQuantity, this.iqcEvalueResult,
          this.iqcPeriodTime, this.iqcShiftID, this.lastmodifiedBy, this.lastmodifiedDate, checkNameValue, this.iqcCheckState)
      .finally(() => (this.submitting = false));

    if (this.iqcEvalueResult === 'NG') {
      await this.openDefectCreate(this.autoID);
    }

    if (res) {
      this.utilityService.showToast('Lưu thành công');
      this.router.navigateByUrl(
        'components/qcinspection/exins/' + this.headerID
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
