import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../../data-access/qcins.service';
import { IdentityService } from 'src/app/core';
import { FilterQcdefectModalComponent } from '../../components/filter/filter-qcdefect-modal.component';

@Component({
  selector: 'app-edit-defect',
  templateUrl: './edit-defect.component.html',
  styleUrls: ['./edit-defect.component.scss'],
})
export class EditDefectComponent implements OnInit {
   headerID: any;
  iqcCheckID: any;
  lastmodifiedBy: any;
  lastmodifiedDate: any;
   defectID: any;
   defectName: any;
  defectQuantity: any;
  defectDescription: any;
  submitting: boolean = false;
  createdBy: any;
  model: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private utilityService: UtilityService,
    private qcinsService: QcinsService,
    private identityService: IdentityService
  ) { 
    this.headerID = this.route.snapshot.params.headerID;
    this.iqcCheckID = this.route.snapshot.params.iqcCheckID;
    this.defectID = this.route.snapshot.params.defectID;
  }

  ngOnInit() {
    this.lastmodifiedBy = this.getStrCurrentUser();
    this.lastmodifiedDate = new Date();
    this.getList();
  }

  async getList() {
    var res = await this.qcinsService.GetListEditDetailDefect(this.headerID, this.iqcCheckID, this.defectID).finally();
    //this.model.defectID = res[0].defectID;
    //this.defectID = this.model.defectID;
    this.defectName = res[0].defectName;
    this.defectQuantity = res[0].defectQuantity;
    this.defectDescription = res[0].defectDescription;
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
  private getStrCurrentUser() {
    let strCurrentUser='';
    this.identityService.currentUser.subscribe(res => {
      strCurrentUser = res.Member_ID;
    }); 
    return strCurrentUser;
  }

  view_backdefect() {
      this.router.navigateByUrl(
        "components/qcinspection/defect/" + this.headerID + "/" + this.iqcCheckID
      );
  }

  async onSubmit() {
    if (this.submitting) return;
    this.submitting = true;
    const res = await this.qcinsService
      .EditDefectExins(this.headerID, this.iqcCheckID, this.defectID, this.defectQuantity, this.defectDescription)
      .finally(() => (this.submitting = false));

    if (res) {
      this.utilityService.showToast('Lưu thành công');
      
    }
  }

  async onClose() {
    this.submitting = true;
    await this.modalController.dismiss({
      success: true
    });
  }
}
