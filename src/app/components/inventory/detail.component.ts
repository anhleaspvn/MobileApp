import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UtilityService } from '../../shared/utility.service';
import { IdentityService } from '../../shared/services';
import { DataToolService, SQLExecService, VoucherService } from '../../shared/services';
import { ApiParameter } from 'src/app/shared/api-params';
//import { MakeAdjustedModalComponent } from './make-adjusted-modal.component';
import { AppConfig, CommandType } from '../../helpers';
import { InventoryService } from './core/services/inventory.service';
import { aspPermission } from './../../shared/services/asp-permissions.service';
@Component({
  selector: 'app-inventory-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [
    { provide: 'OBJECTID_CCKK', useValue: 'ALLOW_CCKK' }
  ]
})
export class DetailComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  segment: string = 'info';
  apiParams: ApiParameter = new ApiParameter();
  stt: string;
  vm: any = {};
  data: any[]=[];
  loading: boolean = true;
  submitting: boolean = false;
  allowMakeAdjusted: boolean = false;

  constructor(
    private alertController: AlertController,
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
    @Inject('OBJECTID_CCKK') private objectIdCCKK: string
  ) {
    this.stt = this.route.snapshot.params.stt;

    route.data.subscribe((data) =>{
      return this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    })
  }

  ngOnInit() {
    this.initPermisson();
    this.getInformation();
  }

  async completedSet() {
    const alert = await this.alertController.create({
      header: 'Xác nhận!',
      message: 'Bạn chắc chắn muốn tạo phiếu điều chỉnh?',
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Đồng ý',
          handler: async () => {
            this.submitting = true;
            const res = await this.inventoryService.GetKK_Update(this.stt).finally(() => this.loading = false);
            this.submitting = false;
            this.utilityService.showToast('Thành công');
            this.getInformation();
          }
        }
      ]
    });
    await alert.present();
  }

  private async getInformation() {
    this.loading = true;
    const res = await this.inventoryService.getInformation(this.stt).finally(() => this.loading = false);
    if(res)
    {
      this.vm = res[0];
    }
    
  }

  private async initPermisson() {
  }

}
