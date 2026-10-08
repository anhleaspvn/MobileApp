import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { IdentityService } from 'src/app/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { UtilityService } from "src/app/shared";
import { QcinsService } from '../data-access/qcins.service';
import { AlertController, ModalController } from '@ionic/angular';
import { FilterWoModalComponent } from '../components/filter/filter-wo-modal.component';
import { Platform } from '@ionic/angular';
import { FilterQcdefectModalComponent } from '../components/filter/filter-qcdefect-modal.component';

@Component({
  selector: 'app-oqcscan',
  templateUrl: './oqcscan.component.html',
  styleUrls: ['./oqcscan.component.scss'],
})
export class OqcscanComponent implements OnInit {

  woDocNo: string;
  productID: string;
  techName: string = '';
  qrCode: string = '';
  model: any = [];
  data: any = { woDocNo: '', techName: '', scanResult: '', reasonNG: '', qrCode: '' };
  paramqr: { EmpID: any; EmpName: any; DeptName: any; StartDate: any; CheckInDT: Date; };
  barcodeScannerOptions: BarcodeScannerOptions;
  scanResult: 'OK' | 'NG' | null = null;
  reasonNotes = '';
  location = '';
  defectID = '';

  canSave = false;
  isCompleted = false;
  isAutoScanActive: boolean = false;
  lastScanType: string = '';

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private identityService: IdentityService,
    private barcodeScanner: BarcodeScanner,
    private modalController: ModalController,
    private qcinsService: QcinsService,
    private utilityService: UtilityService,
    private platform: Platform
  ) { }

  ngOnInit() { }

  async scanTechnicianQR() {
    try {
      const techOptions: BarcodeScannerOptions = {
        preferFrontCamera: false,
        showFlipCameraButton: true,
        showTorchButton: true,
        torchOn: false,
        prompt: 'Quét mã QR kỹ thuật viên',
        resultDisplayDuration: 500,
        formats: 'QR_CODE',
        orientation: 'portrait'
      };

      const result = await this.barcodeScanner.scan(techOptions);
      const qrCode = result.text;

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

      this.techName = this.paramqr.EmpID + '_' + this.paramqr.EmpName;
      this.data.techName = this.techName;
    }
    catch (error) {
      console.error('Lỗi khi quét QR:', error);
    }
  }

  validateSave() {
    if (this.scanResult === 'NG') {
      this.canSave = !!this.reasonNotes?.trim();
    }
  }

  validateBeforeScan(): boolean {
    if (!this.woDocNo) {
      this.showAlert('Thiếu lệnh sản xuất', 'Vui lòng nhập lệnh sản xuất trước');
      return false;
    }

    if (!this.techName) {
      this.showAlert('Thiếu nhân viên', 'Vui lòng scan nhân viên trước');
      return false;
    }

    return true;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
      cssClass: 'custom-alert-header'
    });

    await alert.present();
  }

  async scanQRCode(result: 'OK' | 'NG') {
    if (!this.validateBeforeScan()) {
      return;
    }

    const scanOptions: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: `Quét mã QR sản phẩm - ${result}`,
      resultDisplayDuration: 500,
      formats: 'QR_CODE',
      orientation: 'portrait'
    };

    try {
      const scanText = await this.barcodeScanner.scan(scanOptions);
      
      if (scanText.cancelled) {
        return;
      }

      this.qrCode = scanText.text.trim();
      
      this.scanResult = result;

      // Kiểm tra QR code có tồn tại
      const valQr = await this.checkExistQRCode(this.qrCode);

      if (valQr === false) {
        this.showAlert("Thông báo", "QR Code không tồn tại trên hệ thống eMES");
        this.resetScanState();
        return;
      }

      //Kiểm tra QR code có bị trùng không
      const uiqueQr = await this.checkUniqueQRCode(this.qrCode);

      if (uiqueQr === false && result === 'OK') {
        this.showAlert("Thông báo", "QR Code đã bị scan trùng, vui lòng kiểm tra lại");
        this.resetScanState();
        return;
      }

       // Kiểm tra QR code có hợp lệ không
      const validQr = await this.checkValidQRCode(this.model.woDocNo, this.qrCode);

      if (validQr === false) {
        this.showAlert("Thông báo", "QR Code không hợp lệ, vui lòng kiểm tra lại");
        this.resetScanState();
        return;
      }

      // Nếu scan OK → lưu luôn
      if (result === 'OK') {
        this.data.qrCode = this.qrCode;
        this.reasonNotes = '';
        await this.saveQRCode();
        return;
      }

      // Nếu scan NG → hỏi lý do
      if (result === 'NG') {
        await this.openNGReasonPopup();
      }

    } catch (error: any) {
      console.log('Lỗi khi scan:', error);
      this.resetScanState();
    }
  }

  async openNGReasonPopup() {
  
  // 1️⃣ chọn defect
  const defect = await this.openDefectModeModal();
  if (!defect) {
    this.resetScanState();
    return;
  }

  // 2️⃣ nhập NG Description + Location
  const alert = await this.alertCtrl.create({
    header: `NG – ${defect.defectID}`,
    backdropDismiss: false,
    inputs: [
      {
        name: 'description',
        type: 'textarea',
        placeholder: 'NG Description'
      },
      {
        name: 'location',
        type: 'text',
        placeholder: 'Location'
      }
    ],
    buttons: [
      {
        text: 'Hủy',
        role: 'cancel',
        handler: () => this.resetScanState()
      },
      {
        text: 'OK',
        handler: async (data) => {
          if (!data.description?.trim() || !data.location?.trim()) {
            this.showAlert(
              'Thiếu thông tin',
              'Vui lòng nhập đầy đủ NG Description và Location'
            );
            return false;
          }

          this.reasonNotes = data.description.trim(),
          this.location = data.location.trim(),
          this.defectID = defect.defectID

          await this.saveQRCode();
          return true;
        }
      }
    ]
  });

  await alert.present();
}

async openDefectModeModal(): Promise<{ defectID: string; defectName: string } | null> {
  const modal = await this.modalController.create({
    component: FilterQcdefectModalComponent,
    backdropDismiss: false
  });

  await modal.present();

  const { data, role } = await modal.onDidDismiss();

  if (role !== 'confirm' || !data?.defectID) {
    return null;
  }

  return data;
}

  async saveQRCode() {
    const payload = {
      woDocNo: this.woDocNo ?? '',
      productID: this.productID ?? '',
      techName: this.techName ?? '',
      qrCode: this.qrCode ?? '',
      result: this.scanResult ?? '',
      reasonNG: this.reasonNotes ?? '',
      location: this.location ?? '',
      defectID: this.defectID ?? ''
    };

    try {
      await this.qcinsService.SaveQRCodeScanLog(payload);
      await this.showAlert('Thành công', 'Đã lưu kết quả scan');
      this.resetScanState();
    } catch (error) {
      console.error('Lỗi khi lưu:', error);
      await this.showAlert('Lỗi', 'Không thể lưu kết quả scan');
    }
  }

  resetScanState() {
    this.qrCode = '';
    this.scanResult = null;
    this.reasonNotes = '';
    this.canSave = false;
  }

  async checkExistQRCode(qrCode: any) {
    const check = await this.qcinsService.CheckExistQRCode(qrCode);
    if (Array.isArray(check)) {
      if (check.length === 0) {
        return false;
      }
      return true;
    }
    return false;
  }

  async checkUniqueQRCode(qrCode: any) {
    const check = await this.qcinsService.CheckUniqueQRCode(qrCode);
    
    if (Array.isArray(check)) {
      if (check.length === 0) {
        return true;
      }
      return false;
    }
    return true;
  }

  async checkValidQRCode(woDocNo: any, qrCode: any) {
    const check = await this.qcinsService.CheckValidQRCode(woDocNo, qrCode);
    if (Array.isArray(check)) {
      if (check.length === 0) {
        return false;
      }
      return true;
    }
    return false;
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
          productID: dataReturned.data.productID
        });
      }
    });

    return await modal
      .present()
      .finally(() => this.utilityService.hideLoader());
  }
}

interface FilterModel {
  fromDate: any;
  toDate: any;
  top?: number;
  keyword?: string;
}
