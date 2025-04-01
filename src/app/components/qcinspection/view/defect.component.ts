import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UtilityService } from 'src/app/shared';
import { QcinsService } from '../core/services/qcins.service';
import { IdentityService } from 'src/app/shared/services';
import { ActivatedRoute, Router } from '@angular/router';

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
     }

  ngOnInit() {
    this.getList(true);
  }
  async getList(isLoading: boolean = true) {
    debugger
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
}
