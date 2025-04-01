import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";

import * as _ from "lodash";

import { BarcodeScanner,BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { EmpScanService } from "./core/services/empscan.service"
import { UtilityService } from "src/app/shared";
import { FilterWoModalComponent } from "./filter-wo-modal.component";
import { IdentityService } from "src/app/shared/services";
import { FilterEmpModalComponent } from "./filter-emp-modal.component";
import { FilterStageModalComponent } from "./filter-stage-modal.component";

@Component({
  selector: 'app-list-machine',
  templateUrl: './list-machine.component.html',
  styleUrls: ['./list-machine.component.scss'],
})
export class ListMachineComponent implements OnInit {
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
  isNativePlatform: boolean = true;
  platformStr: string = 'web';
  param: { typeOfScanner: number; username: any; woDocNo: any; };
  paramqrmc: { MachineID: any; MachineName: any; DeptName: any; StartDate: any; CheckInDT: Date; Username: any};
  
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
    
    var res = await this.empScanService.GetListMachineCheckIn(1, this.param.username, this.param.woDocNo).finally(() => this.loading = false);
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
  this.model.woDocNo = "";
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

clearStages(ev) {
  ev.stopPropagation();
  this.stageID = "";
  this.stageID = {};
}

async openEmpsFilterModal() {
  await this.utilityService.showLoader();
  const modal = await this.modalController.create({
      component: FilterEmpModalComponent,
      componentProps: {
        woDocNo: this.woDocNo
    },
  });
  modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned.data) {
          this.empID = dataReturned.data;
          this.model = Object.assign({}, this.model, {
              empID: dataReturned.data.empID,
          });
          this.getList(true);
      }
  });
  return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
}

clearEmpID(ev) {
  ev.stopPropagation();
  this.model.empID = "";
  this.empID = {};
}

async delete(item: any)
{
  const alert = await this.alertController.create({
    header: 'Thông báo!',
    message: 'Xoá thông tin máy Scan QR Code',
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
          const check = await this.empScanService.DeleteMachineCheckIn(item);
        
          setTimeout(() => {
            this.getList();
          }, 1);
        }
      }
    ]
    }); await alert.present();
  }

  async machineScanner() {
    await this.barcodeScanner
      .scan(this.barcodeScannerOptions)
      .then(async (data) => {
        if (data.cancelled) {
          console.log("User cancelled the action!");
          return false;
        } else if (data.text && data.text != "")
          await this.getMachineByQRCode(data.text);
          await this.getList();
      })
      .catch((err) => {
        this.utilityService.showToast(JSON.stringify(err));
      });
  }

  async getMachineByQRCode(qrCode)
  {
    if (qrCode.includes('_')) {
      let result = qrCode.split('_');
      this.paramqrmc = {
        MachineID: result[0] ?? "",
        MachineName: result[1] ?? "",
        DeptName: result[2] ?? "",
        StartDate: result[3] ?? "",
        CheckInDT: new Date(),
        Username: result[4] ?? ""
      };
    }
    else {
        this.paramqrmc = {
            MachineID: '',
            MachineName: '',
            DeptName: '',
            StartDate: '',
            CheckInDT: new Date(1900, 1, 1),
            Username: ''
        };
    }
    var res = await this.empScanService.GetMachineByQRCode(this.paramqrmc.MachineID).finally();
    await this.machineModelSet(res);
    await this.empScanService.SaveMachineByQRCode(res[0]);
  }

  async machineModelSet(item) {
    debugger
    if (!item)
      return;
    item[0] = Object.assign({}, item[0], {
        woDocNo: this.woDocNo.woDocNo
    });
    item[0] = Object.assign({}, item[0], {
      empID: this.empID.empID
    });
    item[0] = Object.assign({}, item[0], {
      stageID: this.stageID
    });
    await this.data.push(item[0]);
}
}
