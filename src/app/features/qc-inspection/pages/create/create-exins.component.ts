import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../../data-access/qcins.service';
import { IdentityService } from 'src/app/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterStageexsModalComponent } from '../../components/filter/filter-stageexs-modal.component';
import { FilterQcdefectModalComponent } from '../../components/filter/filter-qcdefect-modal.component';
import { CreateDefectComponent } from './create-defect.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FilterAspstageModalComponent } from '../../components/filter/filter-aspstage-modal.component';

@Component({
  selector: 'app-create-exins',
  templateUrl: './create-exins.component.html',
  styleUrls: ['./create-exins.component.scss'],
})
export class CreateExinsComponent implements OnInit {
  iqcCheckID: any;
  customCheckName: any;
  createdBy: any;
  createdDate: any;
  headerID: any;
  iqcCheckCont: any;
  iqcTemplateQuantity: any;
  iqcEvalueResult: any;
  iqcPeriodTime: any;
  model: any = {};
  iqcCheckState: string = '';
  periodTime: any = [];
  submitting: boolean = false;
  /** Idempotency key của thao tác lưu hiện tại. Giữ nguyên khi lưu lỗi để user bấm lại
   *  không tạo phiếu trùng; chỉ reset khi lưu thành công hoặc khi mở phiếu mới. */
  private submitKey: string = '';
  iqcDefect: any;
  iqcShiftID: any;
  stageName: string = '';

  constructor(
    private modalController: ModalController,
    private utilityService: UtilityService,
    private qcinsService: QcinsService,
    private identityService: IdentityService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.headerID = this.route.snapshot.params.headerID;
   }

  ngOnInit() {
    this.submitKey = '';
    this.checkLockStatus();
    this.createdDate = new Date();
    this.createdBy = this.getStrCurrentUser();
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

  async openDefectCreate(parentAutoID?: any) {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: CreateDefectComponent,
      componentProps: {
        headerID: this.headerID,
        iqcCheckID: this.iqcCheckID.iqcCheckID,
        parentAutoID: parentAutoID
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

  async view_defect(headerID: any, iqcCheckID, parentAutoID?: any) {
    //if (item)
      this.router.navigateByUrl(
        "components/qcinspection/create-defect/" + headerID + "/" + iqcCheckID + "/" + (parentAutoID ?? '')
      );
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

  async onSubmit() {
    if (this.submitting) return;
    this.submitting = true;
    if (!this.submitKey) this.submitKey = this.utilityService.newRequestId();
    
    let checkIDValue = this.iqcCheckID ? (typeof this.iqcCheckID === 'object' ? this.iqcCheckID.iqcCheckID : this.iqcCheckID) : (this.model.iqcCheckID || '');
    let checkNameValue = '';
    if (checkIDValue === 'STEP34' && this.customCheckName) {
      checkNameValue = this.customCheckName;
    }

    const checkIDParam = (typeof this.iqcCheckID === 'object' && this.iqcCheckID !== null)
      ? this.iqcCheckID 
      : { iqcCheckID: checkIDValue, iqcCheckName: checkNameValue };

    const res = await this.qcinsService
      .SaveExinsQC(this.headerID, checkIDParam, this.iqcCheckCont, this.iqcTemplateQuantity,
          this.iqcEvalueResult, this.iqcPeriodTime, '', this.iqcShiftID, this.createdBy, this.createdDate, checkNameValue, this.iqcCheckState, this.submitKey)
      .finally(() => (this.submitting = false));
    
    let parentAutoID = null;
    if (res && res.length > 0) {
      parentAutoID = res[0].autoID ?? res[0].AutoID;
    }

    if (this.iqcEvalueResult === 'NG') {
      await this.openDefectCreate(parentAutoID);
    }

    if (res) {
      this.submitKey = '';
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
