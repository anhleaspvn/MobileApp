import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../shared/utility.service';

import * as _ from 'lodash';

import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { WarehousesService } from '../../warehouse/core';
import { ParamsQR } from '../models/paramsqr';
import * as moment from 'moment';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.scss'],
})
export class CheckingComponent implements OnInit {

  submitting: boolean = false;
  model: any;
  // qrCode = '{"Ma_Vt": "LQCH202C8453","Ma_Lo": "02062021", "Han_Sd": "31/12/2021","Ngay_Sx": "31/12/2021", "Ma_Kho": "TP", "So_Luong": "100"}';
  qrCode!: string;
  param: ParamsQR = new ParamsQR();

  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private _utilityService: UtilityService,
    private barcodeScanner: BarcodeScanner,
    private warehouseService: WarehousesService
  ) {
    this.barcodeScannerOptions = {
      prompt: '',
      showTorchButton: false,
      showFlipCameraButton: false,
      //torchOn: true,
      resultDisplayDuration: 1
    };
  }


  ngOnInit() { }

  async startScan() {
    this.barcodeScanner.scan(this.barcodeScannerOptions)
      .then((data: BarcodeScanResult) => {
        if (data.cancelled) {
          console.log("User cancelled the action!");
          return false;
        } else if (data && data.text != '') this.getProductByQRCode(data.text);

      }).catch((err) => { this._utilityService.showToast(JSON.stringify(err)) });
  }

  private async getProductByQRCode(qrCode: string) {
    if (qrCode.includes('{')) {
      let result = JSON.parse(qrCode);
      this.param = {
        MA_VT: result.Ma_Vt,
        MA_LO: result.Ma_Lo,
        HAN_SD: moment(result.Han_Sd,'DD/MM/YYYY').format('YYYY-MM-DD'),
        NGAY_SX: moment(result.Ngay_Sx,'DD/MM/YYYY').format('YYYY-MM-DD'),
        MA_KHO: result.Ma_Kho,
        SO_LUONG: result.So_Luong
      }
    }
    else {
      this.param = {
        MA_VT: qrCode,
        MA_LO: '',
        HAN_SD: '',
        NGAY_SX: '',
        MA_KHO: '',
        SO_LUONG: 0
      };
    }
    const res = await this.warehouseService.GetVtByCode(this.param).finally();
    if (res?.length <= 0) {
      await this._utilityService.showAlert(`Không tìm thấy sản phẩm cho: ${qrCode}`);
    } else {
      this.model = res[0];
    }
  }
}
