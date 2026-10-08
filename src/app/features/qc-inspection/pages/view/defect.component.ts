import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../../data-access/qcins.service';
import { IdentityService } from 'src/app/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditDefectComponent } from '../edit/edit-defect.component';

@Component({
  selector: 'app-defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.scss'],
})
export class DefectComponent implements OnInit {
  createdBy: any;
  createdDate: any;
  headerID: any;
  model: any = [];
  submitting: boolean = false;
  defectID: any;
  defectQuantity: any;
  iqcCheckID: any;
  loading: boolean = true;
  data: any[];
  iqcDefect: any;
  
  constructor(
      private modalController: ModalController,
      private utilityService: UtilityService,
      private qcinsService: QcinsService,
      private identityService: IdentityService,
      private route: ActivatedRoute,
      private router: Router,
      private alertController: AlertController,
    ) {
      this.headerID = this.route.snapshot.params.headerID;
      this.iqcCheckID = this.route.snapshot.params.iqcCheckID;
      this.defectID = this.route.snapshot.params.defectID;
     }

  ngOnInit() {
    this.getList(true);
  }

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(async () => {
      await this.getList(refresh);
      event.target.complete();
    }, 20);
  }
  
  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    var res = await this.qcinsService.GetListDetailDefect(this.headerID, this.iqcCheckID).finally(() => this.loading = false);
    this.data = res;
  }
  async view_exinsdetail() {
    if (this.headerID)
      this.router.navigateByUrl(
        "components/qcinspection/exins/" + this.headerID
      );
  }
  async delete(item: any){
    const alert = await this.alertController.create({
      header: 'Thông báo!',
      message: 'Xoá thông tin',
      buttons: [
        {
          text: 'Huỷ bỏ',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Xác nhận',
          handler: async () => {
            const check = await this.qcinsService.DeleteDetailDefect(item);
            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
      }); await alert.present();
  }

  async openDefectEdit(item: any) {
    debugger
        await this.utilityService.showLoader();
        const modal = await this.modalController.create({
          component: EditDefectComponent,
          componentProps: {
            headerID: item.headerID,
            iqcCheckID: item.iqcCheckID,
            defectID: item.defectID
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
  async edit(item: any){
    if (item)
      this.openDefectEdit(item);
  }
}
