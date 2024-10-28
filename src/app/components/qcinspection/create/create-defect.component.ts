import { Component, OnInit } from '@angular/core';
import { FilterQcdefectModalComponent } from '../filter/filter-qcdefect-modal.component';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../core/services/qcins.service';
import { IdentityService } from 'src/app/shared/services';
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
  defectID: any;
  defectQuantity: any;
  iqcCheckID: any;
  constructor(
    private modalController: ModalController,
    private utilityService: UtilityService,
    private qcinsService: QcinsService,
    private identityService: IdentityService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.headerID = this.route.snapshot.params.headerID;
    this.iqcCheckID = this.route.snapshot.params.iqcCheckID;
   }

  ngOnInit() {
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
    this.submitting = true;
    
    const res = await this.qcinsService
      .SaveDefectExins(this.headerID, this.iqcCheckID, this.defectID, this.defectQuantity, this.createdBy, this.createdDate)
      .finally(() => (this.submitting = false));

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
