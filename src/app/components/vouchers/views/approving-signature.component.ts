import { ModalController, NavController, ToastController } from '@ionic/angular';
import { AfterViewInit, asNativeElements, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
import { ApiParameter } from 'src/app/shared/api-params';
import { CommandType } from 'src/app/helpers';
import { SQLExecService, VoucherService } from 'src/app/shared/services';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-approving-signature',
  templateUrl: './approving-signature.component.html',
  styleUrls: ['./approving-signature.component.scss'],
})
export class ApprovingSignatureComponent implements AfterViewInit {

  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  @Input() stt!: any;
  @Input() loai_chu_ky!: any;
  apiParams: ApiParameter = new ApiParameter();
  signatureImg! : any;
  image! : ImageData ;
  signaturePadOptions: Object = { 
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 500
  };
  
  constructor(
    private modalController: ModalController,
    private voucherService: VoucherService,
    private sqlService : SQLExecService,
    private domSanitizer: DomSanitizer ) { 
    
  }

  async ngAfterViewInit() {
    debugger
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    this.apiParams = new ApiParameter();
    if(this.loai_chu_ky == "1")
      this.apiParams.strSQLExec = `SELECT  Data  FROM L81CHUKYONLINE WHERE Stt = '${this.stt}' `;
    if(this.loai_chu_ky == "2")
      this.apiParams.strSQLExec = `SELECT Data  FROM L81CHUKYONLINE_NV WHERE Stt = '${this.stt}' `;
    
      //this.apiParams.strSQLExec = `SELECT Hinh FROM L81DMCBNV WHERE Ma_CbnV = 'ASP0001' `;
    
    this.apiParams.cmdType = CommandType.Text;
    const res2 = await this.sqlService.ExecuteReturnDt(this.apiParams);
    if (res2)     
      // var uints = new Uint8Array(res2[0].data);
      // var base64 = btoa(String.fromCharCode(...uints));
      this.signatureImg = res2[0].data;
 
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  clearPad() {
    this.signaturePad.clear();
  }

  async savePad() {
    debugger
    //this.signatureImg = this.signaturePad.toDataURL();
    //this.apiParams.strSQLExec = "Sp_API_Update_Chu_Ky";
    const paraList = {
        LOAI_CHU_KY : this.loai_chu_ky,
        STT : this.stt,
        DATA : this.signaturePad.toDataURL(),
      };
      //this.apiParams.cmdType = CommandType.StoredProcedure;
      await this.voucherService.UpdateChuKy(paraList);

      this.apiParams = new ApiParameter();
      if(this.loai_chu_ky == "1")
        this.apiParams.strSQLExec = `SELECT  Data  FROM L81CHUKYONLINE WHERE Stt = '${this.stt}' `;
        if(this.loai_chu_ky == "2")
        this.apiParams.strSQLExec = `SELECT Data  FROM L81CHUKYONLINE_NV WHERE Stt = '${this.stt}' `;
      
        //this.apiParams.strSQLExec = `SELECT Hinh FROM L81DMCBNV WHERE Ma_CbnV = 'ASP0001' `;
      
      this.apiParams.cmdType = CommandType.Text;
      const res2 = await this.sqlService.ExecuteReturnDt(this.apiParams);
      if (res2)     
        // var uints = new Uint8Array(res2[0].data);
        // var base64 = btoa(String.fromCharCode(...uints));
        this.signatureImg = res2[0].data;
  }
  async closeModal(ok: boolean = false) { 
    await this.modalController.dismiss();
  }
   hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}
}
  

