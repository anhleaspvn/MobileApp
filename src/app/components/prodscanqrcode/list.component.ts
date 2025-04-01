import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import * as _ from "lodash";
import { BarcodeScanner,BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmpScanService } from "./core/services/empscan.service"
import { UtilityService } from "src/app/shared";
import { FilterWoModalComponent } from "./filter-wo-modal.component";
import { FilterStageModalComponent } from "./filter-stage-modal.component";
import { IdentityService } from "src/app/shared/services";
import { FilterMulEmpModalComponent } from "./filter-mulemp-modal.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  searchTerm: string = "";
  loading: boolean = true;
  routeLink: string = "";
  today: any = new Date();
  barcodeScannerOptions: BarcodeScannerOptions;
  userName: any;
  emps: any = [];
  data: any = [];
  model: any = [];
  woDocNo: any;
  stageID: any;
  empID: any;
  mulempID: any;
  lineID: any;
  isNativePlatform: boolean = true;
  platformStr: string = 'web';
  param: { typeOfScanner: number; username: any; woDocNo: any; };
  paramqr: { EmpID: any; EmpName: any; DeptName: any; StartDate: any; CheckInDT: Date; };

  constructor(
    private empScanService: EmpScanService,
    private alertController: AlertController,
    private modalController: ModalController,
    private identityService: IdentityService,
    private utilityService: UtilityService,
    private barcodeScanner: BarcodeScanner,
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.getList();
    }, 1);
  }
  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    this.param = {
        typeOfScanner: 1,
        username: this.getStrCurrentUser(),
        woDocNo: this.woDocNo
    }
    
    var res = await this.empScanService.GetListEmpCheckIn(1, this.param.username, this.param.woDocNo).finally(() => this.loading = false);
    this.data = res;
  }

  private getStrCurrentUser() {
    let strCurrentUser='';
    this.identityService.currentUser.subscribe(res => {
      strCurrentUser = res.Member_ID;
    }); 
    return strCurrentUser;
  }

  async openWOsFilterModal() {
    await this.utilityService.showLoader();
    
    const modal = await this.modalController.create({
      component: FilterWoModalComponent,
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
        this.woDocNo = dataReturned.data;
        this.model = Object.assign({}, this.model, {
          woDocNo: dataReturned.data.woDocNo,
        });
        this.getList();
      }
    });
    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
}

clearWODocNo(ev) {
    ev.stopPropagation();
    this.woDocNo = "";
    this.woDocNo = {};
}
async openStagesFilterModal() {
  await this.utilityService.showLoader();
  const modal = await this.modalController.create({
    component: FilterStageModalComponent,
    componentProps: {
      woDocNo: this.woDocNo
  },
  });
  modal.onDidDismiss().then(async (dataReturned) => {
    if (dataReturned.data) {
      this.stageID = dataReturned.data.join(',');
      this.model = Object.assign({}, this.model, {
        stageID: dataReturned.data.join(','),
      });
      this.getList();
    }
  });
  return await modal
    .present()
    .finally(() => this.utilityService.hideLoader());
}

async openMulEmpsFilterModal() {
  await this.utilityService.showLoader();
  const modal = await this.modalController.create({
    component: FilterMulEmpModalComponent,
  });
  modal.onDidDismiss().then(async (dataReturned) => {
    if (dataReturned.data) {
      this.mulempID = dataReturned.data.join(',');
      this.model = Object.assign({}, this.model, {
        mulempID: dataReturned.data.join(','),
      });
      this.getList();
    }
  });
  return await modal
    .present()
    .finally(() => this.utilityService.hideLoader());
}

clearStages(ev) {
  ev.stopPropagation();
  this.stageID = "";
  this.stageID = {};
}

async delete(item: any)
{
  const alert = await this.alertController.create({
    header: 'Thông báo!',
    message: 'Xoá thông tin nhân viên Scan QR Code',
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
          const check = await this.empScanService.DeleteEmpCheckIn(item);
          setTimeout(() => {
            this.getList();
          }, 1);
        }
      }
    ]
    }); await alert.present();
  }

  async update(item: any) {
    const alert = await this.alertController.create({
      header: 'Thông báo',
      message: 'Cập nhật số lượng',
      inputs: [
        {
            name: 'quantity',
            type: 'number'
        }
      ],    
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
          handler: async (alertData) => {
            item = Object.assign({}, item, {
              quantity: alertData.quantity
          });
          const check = await this.empScanService.UpdateEmpCheckIn(item);
            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
      }); await alert.present();
  }

  async updatenote(item: any) {
    const alert = await this.alertController.create({
      header: 'Thông báo',
      message: 'Ghi chú',
      inputs: [
        {
            name: 'notes',
            type: 'text'
        }
      ],    
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
          handler: async (alertData) => {
            item = Object.assign({}, item, {
              notes: alertData.notes
          });
          const check = await this.empScanService.UpdateEmpCheckIn(item);
            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
      }); await alert.present();
  }

  async employeeScanner() {
    await this.barcodeScanner
      .scan(this.barcodeScannerOptions)
      .then(async (data) => {
        if (data.cancelled) {
          console.log("User cancelled the action!");
          return false;
        } else if (data.text && data.text != "")
           await this.getEmployeeByQRCodeIn(data.text);
           await this.getList();
      })
      .catch((err) => {
        this.utilityService.showToast(JSON.stringify(err));
      });
  }
  async getEmployeeByQRCodeIn(qrCode)
  {
    if (qrCode.includes('-')) {
      let result = qrCode.split('-');
      this.paramqr = {
          EmpID: result[0] ?? "",
          EmpName: result[1] ?? "",
          DeptName: result[2] ?? "",
          StartDate: result[3] ?? "",
          CheckInDT: new Date()
      };
    }
    else {
        this.paramqr = {
            EmpID: qrCode,
            EmpName: '',
            DeptName: '',
            StartDate: '',
            CheckInDT: new Date(1900, 1, 1)
        };
    }
    this.empID = this.paramqr.EmpID;
    var res = await this.empScanService.GetEmpByQRCode(this.paramqr.EmpID).finally();
    await this.employeeModelSet(res);
    await this.empScanService.SaveInEmpByQRCode(res[0]);
  }

  async employeeModelSet(item) {
    if (!item)
        return;
    item[0] = Object.assign({}, item[0], {
        woDocNo: this.woDocNo.woDocNo
    });
    item[0] = Object.assign({}, item[0], {
        stageID: this.stageID
    });
    item[0] = Object.assign({}, item[0], {
      empID: this.empID
    });
    item[0] = Object.assign({}, item[0], {
      mulempID: this.mulempID
    });
    await this.data.push(item[0]);
}
}

