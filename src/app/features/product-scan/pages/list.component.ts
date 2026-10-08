import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import * as _ from "lodash";
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmpScanService } from "../data-access/empscan.service"
import { UtilityService } from "src/app/shared";
import { FilterWoModalComponent } from "../components/filter-wo-modal.component";
import { FilterStageModalComponent } from "../components/filter-stage-modal.component";
import { IdentityService } from "src/app/core";
import { FilterMulEmpModalComponent } from "../components/filter-mulemp-modal.component";
import Swal from 'sweetalert2'

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
  barcodeScannerOptions: BarcodeScannerOptions | undefined;
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

  ngOnInit() { }

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
    let strCurrentUser = '';
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

  async delete(item: any) {
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
      header: 'Cập nhật số lượng',
      message: 'Nhập số lượng OK và số lượng NG:',
      inputs: [
        {
          name: 'quantityOK',
          type: 'number',
          placeholder: 'Số lượng OK',
          value: item.quantityOK ?? item.quantity_OK ?? item.quantity ?? '',
          min: 0
        },
        {
          name: 'quantityNG',
          type: 'number',
          placeholder: 'Số lượng NG',
          value: item.quantityNG ?? item.quantity_NG ?? '',
          min: 0
        }
      ],
      buttons: [
        {
          text: 'Huỷ bỏ',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Xác nhận',
          handler: async (alertData) => {
            const hasOk = alertData.quantityOK !== '' && alertData.quantityOK !== null && alertData.quantityOK !== undefined;
            const hasNg = alertData.quantityNG !== '' && alertData.quantityNG !== null && alertData.quantityNG !== undefined;
            const numOK = hasOk && !isNaN(Number(alertData.quantityOK)) ? Number(alertData.quantityOK) : 0;
            const numNG = hasNg && !isNaN(Number(alertData.quantityNG)) ? Number(alertData.quantityNG) : 0;

            item = Object.assign({}, item, {
              quantity: numOK,
              quantityOK: numOK,
              quantityNG: numNG,
              quantity_OK: numOK,
              quantity_NG: numNG,
              quantityOk: numOK,
              quantityNg: numNG,
              so_Luong_Dat: numOK,
              so_Luong_Khong_Dat: numNG,
              totalQuantity: numOK + numNG,
            });
            const check = await this.empScanService.UpdateEmpCheckIn(item);
            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
    });
    await alert.present();
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

  // async employeeScanner() {
  //   // await this.barcodeScanner
  //   //   .scan(this.barcodeScannerOptions)
  //   //   .then(async (data) => {
  //   //     if (data.cancelled) {
  //   //       console.log("User cancelled the action!");
  //   //       return false;
  //   //     } else if (data.text && data.text != "")
  //          await this.getEmployeeByQRCodeIn('ASP1680-Trang-SX-2025/11/27');
  //          await this.getList();
  //     // })
  //     // .catch((err) => {
  //     //   this.utilityService.showToast(JSON.stringify(err));
  //     // });
  // }

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

  async getEmployeeByQRCodeIn(qrCode) {
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
    await this.empScanService.SaveInEmpByQRCodeV2(res[0]);
    //await this.getEmpSkillChecking(res[0]);
  }

  async getEmpSkillChecking(item) {
    try {
      const response = await this.empScanService.GetEmpSkillChecking(item);
      const skillData = response;

      // Tạo HTML table với màu chữ đen
      let tableHtml = `
      <table border="1" cellpadding="5" cellspacing="0" 
             style="
               border-collapse: collapse; 
               width:100%; 
               background:white; 
               color:black; 
               font-size:14px; 
               font-family: Arial, sans-serif;
             ">
        <thead>
          <tr>
            <th style="color:black;">STT</th>
            <th style="color:black;">Mã KN</th>
            <th style="color:black;">Tên KN</th>
            <th style="color:black;">Tình trạng</th>
          </tr>
        </thead>
        <tbody>
    `;

      if (skillData.length === 0) {
      }
      else {
        skillData.forEach((item, index) => {
          tableHtml += `
          <tr>
            <td style="color:black;">${index + 1}</td>
            <td style="color:black;">${item.skillID}</td>
            <td style="color:black;">${item.skillName}</td>
            <td style="color: ${item.trangThai_ID === 'No' ? '#b71c1c' : item.trangThai_ID === 'Yes' ? '#0d47a1' : 'black'};">
              <strong>${item.trangThai_Name}</strong>
            </td>
          </tr>
        `;
        });
        tableHtml += `</tbody></table>`;

        // Tạo popup đơn giản
        const popup = document.createElement('div');
        popup.innerHTML = `
        <div style="
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        ">
          <div style="
            background: white;
            padding: 16px;
            border-radius: 8px;
            max-height: 80vh;
            width: 90vw;
            overflow-y: auto;
            color: black;
            font-family: Arial, sans-serif;
            font-size: 14px;
          ">
            <h5 style="color:black;">Danh sách kỹ năng cần thiết</h5>
            ${tableHtml}
            <button id="popup-close-btn" style="
              margin-top: 12px;
              padding: 6px 12px;
              border: none;
              background: #3880ff;
              color: white;
              border-radius: 4px;
              cursor: pointer;
            ">Đóng</button>
          </div>
        </div>
      `;
        document.body.appendChild(popup);
        // Bắt sự kiện đóng
        popup.querySelector('#popup-close-btn')?.addEventListener('click', () => {
          document.body.removeChild(popup);
        });
      }
    } catch (error) {
      console.error(error);
      alert('Không tải được dữ liệu');
    }
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

