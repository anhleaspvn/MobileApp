import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams, Platform } from "@ionic/angular";
import { UtilityService } from "../shared/utility.service";
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
@Component({
  selector: "app-file-viewed-modal",
  templateUrl: "./file-viewed-modal.component.html",
  styleUrls: ["./file-viewed-modal.component.scss"],
})
export class FileViewedModalComponent implements OnInit {
  @Input() hasDelete: boolean = false;

  @Input() url!: any;
  @Input() isImage: boolean = false;
  @Input() fileName: string= new Date().valueOf.toString();
  @Input() data!: Blob;
  constructor(private platform: Platform,
    private modalController: ModalController,
    private navParams: NavParams,
    public utilityService: UtilityService
  ) {
  }

  ngOnInit() {
    
    //this.initAttachment();
  }

  // async initAttachment() {
  //   await this.utilityService.showLoader();
  //   this.isImage = this.utilityService.isImage(this.vm.file_ContentType);
  //   //const blob = this.utilityService.dataURItoBlob(this.vm.file_Data);
  //   this.url = this.isImage
  //     ? this.vm.from_Api
  //       ? `${this.vm.origin}/${this.vm.thumbnail_Path}/${this.vm.file_Name}`
  //       : `data:image/jpeg;base64,${this.vm.file_Data}`
  //     : URL.createObjectURL(
  //         this.utilityService.dataURItoBlob(this.vm.file_Data)
  //       );
  //   await this.utilityService.hideLoader();
  // }
 
  async closeModal(ok: boolean = false) {
    await this.modalController.dismiss();
  }
  download() {
    debugger
    if (this.platform.is('pwa' || 'mobileweb' || 'desktop')) {
      
      let url = window.URL.createObjectURL(this.url);
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = 'file' + new Date().toLocaleTimeString();
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } else {
      this.downloadToDevice();
    }
  }
  async downloadToDevice() {
    //try {
    //   var reader = new FileReader();
    //   reader.onload = (ev: ProgressEvent<FileReader>) => {
    //     Filesystem.writeFile({
    //       path: this.fileName,
    //       data: reader.result.toString(),
    //       directory: Directory.Documents,
    //     })
    //       .then((res) => {           
    //         const option={
    //           header: 'Tải xuống ?',
    //           message: JSON.stringify(res),
    //           buttons: ['Đồng ý'],
    //         };
    //         this.utilityService.showAlert("Hoàn thành",option);
    //         //window.location.href = this.url;
    //       })         
    //       .catch((err) => alert(err));
    //   };
    //   //window.location.href = this.url;
    //   reader.readAsDataURL(this.data);
    // } catch (error) {
    //   this.utilityService.showToast(error);
     //}
  }
}
