import { Injectable, } from '@angular/core';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { MatSnackBar, MatSnackBarRef } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  loader: any = null;

  // toast: any = null;
  toastType: any = {
    success: 'medium',
    error: 'danger',
    warning: 'warning'
  };

  alert: any = null;

  pickerButtons: any = [{
    text: 'Hủy',
    handler: (date: any) => {

    }
  }, {
    text: 'Đồng ý',
    handler: (date: any) => {

    }
  }];

  constructor(
    private _alertCtrl: AlertController,
    private _toastCtrl: ToastController,
    private _loadingController: LoadingController,
    private _snackBar: MatSnackBar
  ) { }

  public async showLoader(options: any = { message: '' }) {
    await this.showLoadingHandler(Object.assign({
      message: null,
      backdropDismiss: false,
      translucent: true,
      spinner: 'lines'
    }, options));
  }

  public async hideLoader() {
    await this.hideLoadingHandler();
  }

  public async showToast(message: string = 'Thành công', type: string = this.toastType.success, options: any = {}) {
    return await this.showToastHandler(Object.assign({ message: message, color: type, duration: 3500 }, options));
  }

  public async hideToast(toast: any) {
    await this.hideToastHandler(toast);
  }

  public async showAlert(message: string = '', options: any = {}) {
    await this.showAlertHandler(Object.assign({ message: message, buttons: ['OK'] }, options));
  }

  public async showSnackBar(message: string = '', options: any = {}) {
    return this._snackBar.open(message, options.action, Object.assign({}, options));
  }

  public hideSnackBar(snackBarPromise: Promise<MatSnackBar>, destroy: boolean = true) {
    snackBarPromise.then((sb) => {
      if (sb) {
        sb.dismiss();
        // if (destroy) sb.ngOnDestroy();
        snackBarPromise = null;
      }
    });
  }

  public blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }


  public dataURItoBlob(dataURI: any, type: string = 'image/jpeg'): Blob {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: type });
    return blob;
  }

  public fecthDataURItoBlob(dataURI: any) {
    return fetch(dataURI).then(res => { return res.blob() });
  }

  public hasValue(obj: any) {
    return (obj != null && obj != undefined && obj != 'undefined');
  }

  public isNullOrEmptyString(str: string) {
    return (str == null && str == undefined && str == '');
  }

  public formatCurrency(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;

      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - Number(i)).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };

  public caclCurrencyVietnamess(amount: number, min: number = 500) {
    if (amount < min) return min;
    const _floor = Math.floor(amount / min);
    const val = _floor * min;
    const balance = amount - val;
    return amount + (min - balance);
  }

  public isImage(contentType: string): boolean {
    return contentType.includes('image/');
  }

  //#region  Private Fnc

  private async showLoadingHandler(options: any = {}) {
    if (this.loader == null) {
      this.loader = await this._loadingController.create(options);
      await this.loader.present();
    } else {
      this.loader.message = options.message;
    }
  }

  private async hideLoadingHandler() {
    if (this.loader != null) {
      await this.loader.dismiss();
      this.loader = null;
    }
  }

  private async showAlertHandler(options: any = {}) {
    this.alert = await this._alertCtrl.create(options);
    return await this.alert.present();
    // if (this.alert == null) {
    //   this.alert = await this._alertCtrl.create(options);
    //   await this.alert.present();
    // } else {
    //   this.alert.message = options.message;
    // }
  }

  private async showToastHandler(options: any = {}): Promise<any> {
    const toast = await this._toastCtrl.create(options);
    await toast.present();
    return toast;
    // if (this.toast == null) {

    // } else {
    //   this.toast.color = options.type;
    //   this.toast.message = options.message;
    // }
  }

  private async hideToastHandler(toast: Promise<any>) {
    if (toast) {
      toast.then((result) => {
        result.dismiss();
        toast = null;
      });
    }
  }

  

  //#endregion Private Fnc

}
