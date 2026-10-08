import { Component, OnInit, Optional } from '@angular/core';
import { FilterQcdefectModalComponent } from '../../components/filter/filter-qcdefect-modal.component';
import { ModalController, NavParams } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../../data-access/qcins.service';
import { IdentityService } from 'src/app/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-defect',
  templateUrl: './create-defect.component.html',
  styleUrls: ['./create-defect.component.scss'],
})
export class CreateDefectComponent implements OnInit {
  createdBy: any;
  createdDate: any;
  headerID: any;
  model: any = [];
  submitting: boolean = false;
  /** Idempotency key của thao tác lưu hiện tại. Giữ nguyên khi lưu lỗi để user bấm lại
   *  không tạo phiếu trùng; chỉ reset khi lưu thành công hoặc khi mở phiếu mới. */
  private submitKey: string = '';
  defectID: any;
  defectQuantity: any;
  defectDescription: any;
  iqcCheckID: any;
  parentAutoID: any;
  constructor(
    private modalController: ModalController,
    private utilityService: UtilityService,
    private qcinsService: QcinsService,
    private identityService: IdentityService,
    private route: ActivatedRoute,
    private router: Router,
    @Optional() private navParams: NavParams
  ) {
    this.headerID = this.route.snapshot.params.headerID ?? this.navParams?.get('headerID');
    this.iqcCheckID = this.route.snapshot.params.iqcCheckID ?? this.navParams?.get('iqcCheckID');
    this.parentAutoID = this.route.snapshot.params.parentAutoID ?? this.navParams?.get('parentAutoID');
   }

  ngOnInit() {
    this.submitKey = '';
    this.createdDate = new Date();
    this.createdBy = this.getStrCurrentUser();
  }
  
  async openDefectFilterModal() {
    await this.utilityService.showLoader();
    const modal = await this.modalController.create({
      component: FilterQcdefectModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.defectID = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          defectID: dataReturned.data.defectID,
        });
      }
    });
    
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }

  async view_exinsdetail() {
    if (this.headerID)
      this.router.navigateByUrl(
        "components/qcinspection/exins/" + this.headerID
      );
  }

  async onSubmit() {
    if (this.submitting) return;
    this.submitting = true;
    if (!this.submitKey) this.submitKey = this.utilityService.newRequestId();
    const res = await this.qcinsService
      .SaveDefectExins(this.headerID, this.iqcCheckID, this.defectID, this.defectQuantity, this.defectDescription, this.createdBy, this.createdDate, this.parentAutoID, this.submitKey)
      .finally(() => (this.submitting = false));

    if (res) {
      this.submitKey = '';
      this.utilityService.showToast('Lưu thành công');
      await this.onClose();
    }
  }

  async onClose() {
    try {
      const topModal = await this.modalController.getTop();
      if (topModal) {
        await this.modalController.dismiss({
          success: true
        });
        return;
      }
    } catch (e) {
      console.error('Failed to dismiss modal:', e);
    }

    if (this.headerID) {
      this.router.navigateByUrl(
        "components/qcinspection/exins/" + this.headerID
      );
    } else {
      this.router.navigateByUrl("components/qcinspection/list");
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
