import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../../data-access/qcins.service';
import { IdentityService } from 'src/app/core';
import { FilterStageexsModalComponent } from '../../components/filter/filter-stageexs-modal.component';
import { FilterChecklistModalComponent } from '../../components/filter/filter-checklist-modal.component';
import { FilterAspstageModalComponent } from '../../components/filter/filter-aspstage-modal.component';
import { FilterAspdeviceModalComponent } from '../../components/filter/filter-aspdevice-modal.component';
import { evaluateDimResult } from '../../utils/qc-eval.util';

@Component({
  selector: 'app-edit-dim',
  templateUrl: './edit-dim.component.html',
  styleUrls: ['./edit-dim.component.scss'],
})
export class EditDimComponent implements OnInit {
  autoID: any;
  headerID: any;
  iqcCheckID: any;
  description: any;
  lastmodifiedBy: any;
  lastmodifiedDate: any;
  iqcTemplateQuantity: any;
  iqcEvalueResult: any;
  iqcPeriodTime: any;
  iqcDFID: any;
  iqcStandardMin: any;
  iqcStandardMax: any;
  iqcEvalueActual: any;
  iqcEvalueActual1: any;
  iqcEvalueActual2: any;
  iqcEvalueActual3: any;
  iqcEvalueActual4: any;
  iqcEvalueActual5: any;
  autoIDs: any[] = [];
  iqcEvalueCheckTime: any;
  iqcCheckingContent: any;
  iqcDeviceID: any;
  iqcMeasuringToolID: any;
  iqcCutterID: any;
  originalCreatedDate: any;
  defect: any;
  model: any = {};
  iqcCheckState: string = '';
  submitting: boolean = false;
  iqcShiftID: any;
  periodTime: any = [];
  stageName: string = '';
  deviceName: string = '';
  measuringToolName: string = '';
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
          this.router.navigateByUrl('components/qcinspection/dim/' + this.headerID);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async getList() {
    var res = await this.qcinsService.GetListDimAutoID(this.headerID, this.autoID).finally();
    if (res && res.length > 0) {
      const item = res[0];
      this.model.iqcCheckID = item.iqcCheckID ?? item.IQCCheckID;
      this.iqcDFID = item.iqcDFID ?? item.IQCDFID ?? item.iqcdfid;
      this.model.iqcCheckingContent = item.iqcCheckingContent ?? item.IQCCheckingContent;
      this.iqcStandardMin = item.iqcStandardMin ?? item.IQCStandardMin;
      this.iqcStandardMax = item.iqcStandardMax ?? item.IQCStandardMax;
      this.iqcEvalueCheckTime = item.iqcEvalueCheckTime ?? item.IQCEvalueCheckTime;
      this.iqcDeviceID = item.iqcDeviceID ?? item.IQCDeviceID;
      this.iqcMeasuringToolID = item.iqcMeasuringToolID ?? item.IQCMeasuringToolID;
      this.iqcCutterID = item.iqcCutterID ?? item.IQCCutterID ?? item.iqccutterid;
      this.iqcEvalueResult = item.iqcEvalueResult ?? item.IQCEvalueResult;
      this.iqcPeriodTime = item.iqcEvalueCheckTime ?? item.IQCEvalueCheckTime;
      this.iqcShiftID = item.iqcShiftID ?? item.IQCShiftID;
      this.iqcCheckState = item.checkState ?? item.CheckState ?? '';
      this.originalCreatedDate = item.createdDate ?? item.CreatedDate;
      console.log('originalCreatedDate from database:', this.originalCreatedDate);

      this.autoIDs = res.map(r => r.autoID ?? r.AutoID);
      this.iqcEvalueActual1 = res[0] ? (res[0].iqcEvalueActual ?? res[0].IQCEvalueActual) : null;
      this.iqcEvalueActual2 = res[1] ? (res[1].iqcEvalueActual ?? res[1].IQCEvalueActual) : null;
      this.iqcEvalueActual3 = res[2] ? (res[2].iqcEvalueActual ?? res[2].IQCEvalueActual) : null;
      this.iqcEvalueActual4 = res[3] ? (res[3].iqcEvalueActual ?? res[3].IQCEvalueActual) : null;
      this.iqcEvalueActual5 = res[4] ? (res[4].iqcEvalueActual ?? res[4].IQCEvalueActual) : null;
      
      this.loadStageName();
      this.loadDeviceName();
      this.loadMeasuringToolName();
      
      const checkID = item.iqcCheckID ?? item.IQCCheckID;
      const checkName = item.iqcCheckName ?? item.IQCCheckName;
      
      if (checkID === 'STEP34') {
        this.description = checkName;
        this.iqcCheckID = { iqcCheckID: 'STEP34', iqcCheckName: 'Khác' };
      } else {
        this.description = '';
        this.iqcCheckID = { iqcCheckID: checkID, iqcCheckName: checkName };
      }

      this.onShiftChange();
      if (!this.iqcEvalueResult) {
        this.autoCheckResult();
      }
    }
  }

  async getPeriodTime() {
    await this.onShiftChange();
  }

  async onShiftChange() {
    try {
      const res = await this.qcinsService.GetPeriodTime(this.iqcShiftID || 'DayShift', 'DIM');
      this.periodTime = res || [];
    } catch (e) {
      console.error(e);
      this.periodTime = [];
    }
  }

  async loadStageName() {
    if (this.iqcDFID) {
      const stages = await this.qcinsService.GetASPStageExList(this.iqcDFID);
      if (stages && stages.length > 0) {
        const matched = stages.find(s => s.stageID === this.iqcDFID);
        if (matched) {
          this.stageName = matched.stageName;
        }
      }
    }
  }

  async loadDeviceName() {
    if (this.iqcDeviceID) {
      const devices = await this.qcinsService.GetASPDeviceList(this.iqcDeviceID);
      if (devices && devices.length > 0) {
        const matched = devices.find(d => d.ma_May === this.iqcDeviceID);
        if (matched) {
          this.deviceName = matched.ten_May;
        }
      }
    }
  }

  async loadMeasuringToolName() {
    if (this.iqcMeasuringToolID) {
      const devices = await this.qcinsService.GetASPDeviceList(this.iqcMeasuringToolID);
      if (devices && devices.length > 0) {
        const matched = devices.find(d => d.ma_May === this.iqcMeasuringToolID);
        if (matched) {
          this.measuringToolName = matched.ten_May;
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
        this.iqcDFID = dataReturned.data.stageID;
        this.stageName = dataReturned.data.stageName;
      }
    });
    
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  clearStage() {
    this.iqcDFID = '';
    this.stageName = '';
  }

  async openDeviceFilterModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: FilterAspdeviceModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.iqcDeviceID = dataReturned.data.ma_May;
        this.deviceName = dataReturned.data.ten_May;
      }
    });
    
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  clearDevice() {
    this.iqcDeviceID = '';
    this.deviceName = '';
  }

  async openMeasuringToolFilterModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: FilterAspdeviceModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.iqcMeasuringToolID = dataReturned.data.ma_May;
        this.measuringToolName = dataReturned.data.ten_May;
      }
    });
    
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  clearMeasuringTool() {
    this.iqcMeasuringToolID = '';
    this.measuringToolName = '';
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
  
  clearIqcCheckID() {
    this.model.iqcCheckID = '';
    this.iqcCheckID = null;
    this.description = '';
  }

  clearCheckingContent() {
    this.model.iqcCheckingContent = '';
    this.iqcCheckingContent = null;
  }

  clearStandardMin() {
    this.iqcStandardMin = '';
    this.autoCheckResult();
  }

  clearStandardMax() {
    this.iqcStandardMax = '';
    this.autoCheckResult();
  }

  clearPeriodTime() {
    this.iqcPeriodTime = '';
  }

  clearShiftID() {
    this.iqcShiftID = '';
  }

  clearEvalueActual1() {
    this.iqcEvalueActual1 = '';
    this.autoCheckResult();
  }

  clearEvalueActual2() {
    this.iqcEvalueActual2 = '';
    this.autoCheckResult();
  }

  clearEvalueActual3() {
    this.iqcEvalueActual3 = '';
    this.autoCheckResult();
  }

  clearEvalueActual4() {
    this.iqcEvalueActual4 = '';
    this.autoCheckResult();
  }

  clearEvalueActual5() {
    this.iqcEvalueActual5 = '';
    this.autoCheckResult();
  }

  clearEvalueResult() {
    this.autoCheckResult();
    if (!this.iqcEvalueResult) {
      this.iqcEvalueResult = 'OK';
    }
  }

  autoCheckResult() {
    this.iqcEvalueResult = evaluateDimResult(
      this.iqcStandardMin,
      this.iqcStandardMax,
      [
        this.iqcEvalueActual1,
        this.iqcEvalueActual2,
        this.iqcEvalueActual3,
        this.iqcEvalueActual4,
        this.iqcEvalueActual5,
      ]
    );
  }

  async onSubmit() {
    if (this.submitting) return;
    if (!this.iqcEvalueResult) {
      this.autoCheckResult();
    }
    if (!this.iqcEvalueResult) {
      this.iqcEvalueResult = 'OK';
    }
    this.submitting = true;
   
    let checkIDValue = this.iqcCheckID ? (typeof this.iqcCheckID === 'object' ? this.iqcCheckID.iqcCheckID : this.iqcCheckID) : (this.model.iqcCheckID || '');
    let checkNameValue = '';
    if (checkIDValue === 'STEP34' && this.description) {
      checkNameValue = this.description;
    }

    const checkingContentStr = this.model.iqcCheckingContent || (typeof this.iqcCheckingContent === 'string' ? this.iqcCheckingContent : this.iqcCheckingContent?.iqcCheckingContent) || '';

    const evalues = [
      this.iqcEvalueActual1,
      this.iqcEvalueActual2,
      this.iqcEvalueActual3,
      this.iqcEvalueActual4,
      this.iqcEvalueActual5
    ];

    try {
      for (let i = 0; i < 5; i++) {
        const val = evalues[i];
        const currentAutoID = this.autoIDs[i];

        if (currentAutoID) {
          await this.qcinsService.EditDimQC(
            currentAutoID, checkIDValue, this.iqcDFID, this.iqcStandardMin, this.iqcStandardMax, val,
            this.iqcEvalueResult, this.iqcPeriodTime, checkingContentStr, this.iqcDeviceID, this.iqcMeasuringToolID,
            this.iqcShiftID, this.lastmodifiedBy, this.lastmodifiedDate, checkNameValue, this.iqcCutterID, this.iqcCheckState
          );
        } else if (val !== null && val !== undefined && val !== '') {
          await this.qcinsService.SaveDimQC(
            this.headerID, checkIDValue, this.iqcDFID, this.iqcStandardMin, this.iqcStandardMax,
            i === 0 ? val : null,
            i === 1 ? val : null,
            i === 2 ? val : null,
            i === 3 ? val : null,
            i === 4 ? val : null,
            this.iqcEvalueResult, this.iqcPeriodTime, checkingContentStr, this.iqcDeviceID, this.iqcMeasuringToolID,
            this.iqcShiftID, this.lastmodifiedBy, this.originalCreatedDate || this.lastmodifiedDate, checkNameValue, this.iqcCutterID, this.iqcCheckState, false
          );
        }
      }
    } catch (e) {
      console.error('Error saving checks:', e);
    } finally {
      this.submitting = false;
    }

    this.utilityService.showToast('Lưu thành công');
    this.router.navigateByUrl(
      'components/qcinspection/dim/' + this.headerID
    );
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
