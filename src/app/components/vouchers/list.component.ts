import { Component, Inject, OnInit, Optional } from "@angular/core";

import { CommandType } from "../../helpers";
import { enuEdit , AppConfig} from "../../helpers";
import { UtilityService } from "../../shared/utility.service";

import {aspPermissionsService, VoucherService} from "../../shared/services";
import { ApiParameter } from "src/app/shared/api-params";
import { AlertController, ModalController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { HttpEventType } from "@angular/common/http";
import { FileViewedModalComponent } from "src/app/layout";
import { IdentityService, aspPermission } from "src/app/shared/services";
import {
  Capacitor
} from '@capacitor/core';
import { ApprovingSignatureComponent } from "./views/approving-signature.component";

@Component({
  selector: "app-voucher-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  perm_duyet: aspPermission = Object.create(null);
  filterModel: FilterModel = {
    ngay_Ct1: moment().startOf("month").format("YYYY-MM-DD"),
    ngay_Ct2: moment().format("YYYY-MM-DD"),
    top: 10,
  };
  strMaCt: string;
  strMa_Ct_Convert: string;
  currentMaDvCs: any;
  totalCount: number = 0;
  selectTrang_Thai: string = "";
  skeletons: any = [];
  loading: boolean = true;
  data: any[];
  searchTerm: string = "";
  routeLink: string = "";

  today: any = new Date();

  title: any = {
    PN: "Phiếu nhập kho",
    PX: "Phiếu xuất kho",
    DC: "Phiếu điều chuyển",
    XP: "Xuất kho thành phẩm",
    TP: "Nhập Kho thành phẩm",
    NK: "Phiếu nhập khẩu"
  };

  isNativePlatform: boolean = true;
  platformStr: string = 'web';

  constructor(
    private voucherService: VoucherService,
    private alertController: AlertController,
    private modalController: ModalController,
    private identityService: IdentityService,
    private router: Router,
    private route: ActivatedRoute,
    private utilityService: UtilityService,
    private permissionsService: aspPermissionsService
  ) {
    
    this.strMaCt = this.route.snapshot.params.maCt;
    this.strMa_Ct_Convert = this.route.snapshot.params.maCt_Convert;

    route.data.subscribe((data) => {
      this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    });

    this.permissionsService.GetPermission('duyet').then(res => this.perm_duyet = res);
  }

  ngOnInit() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.getList();
    }, 1);
    this.platformStr = Capacitor.getPlatform();
    this.isNativePlatform = Capacitor.isNativePlatform();
  }

  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    const filterParams = {
      STATUS: this.selectTrang_Thai,
      KEYWORD: this.searchTerm,
      Ma_Ct: this.strMaCt,
      Ngay_Ct1: this.filterModel.ngay_Ct1 || moment().startOf('month'),
      Ngay_Ct2: this.filterModel.ngay_Ct2 || moment(),
      TOP: this.filterModel.top,
      MA_DVCS: this.identityService.getStrCurrentMaDvCs(),
    };
    const res = await this.voucherService.GetListVoucher(filterParams).finally(() => (this.loading = false));
    this.data = res || [];
    this.totalCount = res[0]?.["totalCount"] || 0;
  }

  dateChange() {
    this.getList();
  }


  loadMoreData(event, refresh: boolean = false) {
    // this.filterModel.top = !refresh ? this.filterModel.top + 5 : this.filterModel.top;
    this.filterModel.top = this.filterModel.top + 5;

    setTimeout(async () => {
      this.getList(refresh).finally(() => {
        event.target.complete();
        if (!refresh)
          event.target.disabled = this.filterModel.top >= this.totalCount;
      });
    }, 100);
  }

  async confirm(item: any, Is_duyet: boolean) {
    const alert = await this.alertController.create({
      header: "Thông báo!",
      message: Is_duyet ? "Duyệt" : "Bõ duyệt",
      buttons: [
        {
          text: "Huỷ bỏ",
          role: "cancel",
          handler: (blah) => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Xác nhận",
          handler: async () => {
            const filterParams = {
              STT: item.stt,
              MA_CT: this.strMaCt,
              DUYET: Is_duyet,
            };
            const check = await this.voucherService.DuyetVoucher(filterParams);
            if (check) this.utilityService.showAlert("Thay đổi thành công");

            setTimeout(() => {
              this.getList();
            }, 1);
          },
        },
      ],
    });
    await alert.present();
  }

  async delete(item: any) {
    const alert = await this.alertController.create({
      header: "Thông báo!",
      message: "Xoá chứng từ",
      buttons: [
        {
          text: "Huỷ bỏ",
          role: "cancel",
          handler: (blah) => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Xác nhận",
          handler: async () => {
            const check = await this.voucherService.SQLDeleteCt(
              item.stt,
              this.strMaCt
            );
            if (check) this.utilityService.showAlert("Xoá thành công");

            setTimeout(() => {
              this.getList();
            }, 1);
          },
        },
      ],
    });
    await alert.present();
  }

  async view_edit(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/voucher/detail/" + item.stt + "/" + this.strMaCt
      );
  }

  async edit(item: any, _enuEdit: enuEdit) {
    
    if (item) {
      
      if (_enuEdit == enuEdit.Convert) {
        if (this.strMaCt == "PN" || this.strMaCt == "PX")
          this.strMa_Ct_Convert = this.strMaCt == "PN" ? "PX" : "PN";
        else if (this.strMaCt == "TP" || this.strMaCt == "XP")
          this.strMa_Ct_Convert = this.strMaCt == "TP" ? "XP" : "TP";
          item.stt_Org = item.stt;
      }
      
      this.routeLink = "components/voucher/create/" +this.strMaCt;
      if(_enuEdit == enuEdit.New)
        this.router.navigate([this.routeLink],{queryParams:{enuEdit:_enuEdit} });
      else
        this.router.navigate([this.routeLink],{queryParams:{stt: item.stt, maCt_Convert: this.strMa_Ct_Convert, enuEdit:_enuEdit} });
    }
  }

  async exportPDF(_item: any) {
    if (!_item) return;

    this.loading = true;

    const item: any = {};
    item.stt = _item.stt;
    item.ma_Ct = this.strMaCt;
    item.report_File = "rptCT_";
    item.report_File = item.report_File + this.strMaCt;
    this.voucherService.DowloadPDF_Blod(item).subscribe((event) => {
      debugger
      if (event) {
        switch (event.type) {
          case HttpEventType.DownloadProgress:
            break;
          case HttpEventType.Response:
            const blob = new Blob([event.body as BlobPart], {
              type: event.body?.type,
            });
            const url = URL.createObjectURL(blob);
            this.openFileModal(url,blob);
            break;
        }
      }
      this.loading = false;
    });
  }

  async signPDF(item : any, loai_chu_ky : string)
  {
    const modal = await this.modalController.create({
      component: ApprovingSignatureComponent,
      componentProps: {
          stt : item.stt,
          loai_chu_ky : loai_chu_ky
      },
    });
    modal.onDidDismiss().then((dataReturned) => {});
    
    return await modal.present();
  }

  private async openFileModal(url: any, data: Blob) {

    const modal = await this.modalController.create({
      component: FileViewedModalComponent,
      componentProps: {
        url: url,
        data : data
      },
    });
    modal.onDidDismiss().then((dataReturned) => {});
    
    return await modal.present();
  }


  trackBy(index: number, item: any) {
    return item?.stt ?? index;
  }
}

interface FilterModel {
  ngay_Ct1: any;
  ngay_Ct2: any;
  top?: number;
  keyword?: string;
}
