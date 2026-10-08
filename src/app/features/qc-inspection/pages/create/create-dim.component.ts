import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../../data-access/qcins.service';
import { IdentityService } from 'src/app/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterStageexsModalComponent } from '../../components/filter/filter-stageexs-modal.component';
import { FilterChecklistModalComponent } from '../../components/filter/filter-checklist-modal.component';
import { FilterQcdefectModalComponent } from '../../components/filter/filter-qcdefect-modal.component';
import { FilterAspstageModalComponent } from '../../components/filter/filter-aspstage-modal.component';
import { FilterAspdeviceModalComponent } from '../../components/filter/filter-aspdevice-modal.component';
import { evaluateDimResult } from '../../utils/qc-eval.util';

@Component({
  selector: 'app-create-dim',
  templateUrl: './create-dim.component.html',
  styleUrls: ['./create-dim.component.scss'],
})
export class CreateDimComponent implements OnInit {
  iqcCheckID: any;
  description: any;
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
  iqcCheckState: string = '';
  iqcDeviceID: any;
  iqcMeasuringToolID: any;
  iqcCutterID: any;
  defect: any;
  model: any = [];
  submitting: boolean = false;
  /** Idempotency key của thao tác lưu hiện tại. Giữ nguyên khi lưu lỗi để user bấm lại
   *  không tạo phiếu trùng; chỉ reset khi lưu thành công hoặc khi mở phiếu mới. */
  private submitKey: string = '';
  periodTime: any = [];
  iqcShiftID: any;
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
   }

  ngOnInit() {
    this.submitKey = '';
    this.checkLockStatus();
    this.createdBy = this.getStrCurrentUser();
    this.createdDate = new Date();
    this.getPeriodTime();
    this.iqcEvalueResult = 'OK';
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

  clearEvalueCheckTime() {
    this.iqcEvalueCheckTime = '';
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
    if (!this.submitKey) this.submitKey = this.utilityService.newRequestId();

    let checkIDValue = this.iqcCheckID ? (typeof this.iqcCheckID === 'object' ? this.iqcCheckID.iqcCheckID : this.iqcCheckID) : (this.model.iqcCheckID || '');
    let checkNameValue = '';
    if (checkIDValue === 'STEP34' && this.description) {
      checkNameValue = this.description;
    }

    const checkingContentStr = this.model.iqcCheckingContent || (typeof this.iqcCheckingContent === 'string' ? this.iqcCheckingContent : this.iqcCheckingContent?.iqcCheckingContent) || '';

    const res = await this.qcinsService
      .SaveDimQC(this.headerID, checkIDValue, this.iqcDFID, this.iqcStandardMin, this.iqcStandardMax, this.iqcEvalueActual1,
                  this.iqcEvalueActual2, this.iqcEvalueActual3, this.iqcEvalueActual4, this.iqcEvalueActual5,
                  this.iqcEvalueResult, this.iqcEvalueCheckTime, checkingContentStr, this.iqcDeviceID, this.iqcMeasuringToolID,
                  this.iqcShiftID, this.createdBy, this.createdDate, checkNameValue, this.iqcCutterID, this.iqcCheckState, true, this.submitKey)
      .finally(() => (this.submitting = false));

    if (res) {
      this.submitKey = '';
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

}
