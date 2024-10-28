/* eslint-disable @typescript-eslint/member-ordering */
import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ActionSheetController,
  AlertController,
  IonRouterOutlet,
  ModalController,
} from "@ionic/angular";

import * as _ from "lodash";
import { IdentityService, NotificationsService } from "src/app/shared/services";

import { UtilityService } from "../../../shared/utility.service";
import { AppFunctions,aspService } from "../../../data-services";


import { FileViewedModalComponent } from "../../../layout";
import { HttpEventType } from "@angular/common/http";
import { AboutComponent } from "./about.component";
import { PageLifeCycle } from "src/app/shared";
import { NotificationsComponent } from "./notifications.component";
import { BehaviorSubject, Subscription } from "rxjs";
import { AppConfig } from "src/app/helpers";

import {
  Capacitor
} from '@capacitor/core';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, PageLifeCycle {
  layoutConfig: any = Object.create(null);
  subscription: any;
  roleDepartments: any;
  segmentLink: string = "";
  totalNotRead: number = 0;
  companyName: string = "AIRSPEED LLC";

  funcs: AppFunctions[] = [];
  lstDvCs: any[] = [];
  lstSoftWare: any[] = [
    { Software_Id: "HRM", Name_Software: "Quản lý nhân sự" },
    { Software_Id: "ACC", Name_Software: "Quản lý sản xuất" },
    { Software_Id: "QC", Name_Software: "Quản lý chất lượng"}
  ];
  currentMaDvCs: string;
  currentSoftware: string;
  currentUser: any = {};

  slideOpts = {
    autoplay: false,
    slidesPerView: 3,
  };

  isNativePlatform: boolean = true;
  platformStr: string = 'web';

  private sub!: Subscription;

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private modalController: ModalController,
    private utilityService: UtilityService,
    private identityService: IdentityService,
    private changeDetectorRef: ChangeDetectorRef,
    private aspService: aspService,
    private notificationsService: NotificationsService,
    private router: Router,
    private route: ActivatedRoute,
    // private ionRouterOutlet: IonRouterOutlet,
  ) {
    this.sub = route.data.subscribe((data) => {
      this.funcs = data[AppConfig.APP_FNS_RESOLVER_KEY];
    });
    // this.platform.backButton.subscribeWithPriority(0, () => {
    //   if (!this.ionRouterOutlet.canGoBack()) {
    //     alert('test');
    //     App.exitApp();
    //   }
    // });
  }
  ionViewDidEnter() {
    this.getNotifi();
  }
  ionViewDidLeave() {
    this.sub?.unsubscribe();
  }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    this.viewInit();
    this.platformStr = Capacitor.getPlatform();
    this.isNativePlatform = Capacitor.isNativePlatform();
  }

  ionViewWillLeave() {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
    this.utilityService.hideLoader();
  }

  segmentChanged(ev: any) {
    this.segmentLink = ev.detail.value;
    this.router.navigateByUrl(this.segmentLink);
  }

  trackByFn(index, item) {
    return item.displayOrder;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: "action-sheets-company",
      buttons: [
        {
          text: "Đăng xuất",
          icon: "log-out-outline",
          handler: () => {
            this.identityService.purgeAuth();
            this.currentUser = Object.create(null);
            this.router.navigateByUrl("/login");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  gotoFn(fn: AppFunctions) {
    // this.router.navigateByUrl(
    //   fn.routerLink + (fn.params ? `/${fn.params.split(",").join("/")}` : "")
    // );
    this.router.navigate(
      [
        fn.routerLink +
        (fn?.params ? `/${fn.params?.split(",")?.join("/")}` : ""),
      ],
      { queryParams: { [AppConfig.OBJ_ID_QUERY_KEY]: fn?.object_ID } }
    );
  }

  private async presentAlertDvCs() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Chọn Đơn vị cơ sở",
      inputs: this.lstDvCs?.map((obj) => ({
        name: obj.Ma_Data,
        type: "radio",
        label: obj.Ten_DvCs,
        value: obj.Ma_DvCs,
        checked: obj.Ma_DvCs == this.currentMaDvCs,
      })),
      buttons: [
        {
          text: "Hủy",
          role: "cancel",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Đồng ý",
          cssClass: "asp-color",
          handler: (dataAlert) => {
            this.identityService.setDvCs(dataAlert);
            this.utilityService.showToast("Thành công");
          },
        },
      ],
    });

    await alert.present();
  }

  private async presentAlertSoftware() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Chọn phân hệ",
      inputs: this.lstSoftWare?.map((obj) => ({
        name: obj.Software_Id,
        type: "radio",
        label: obj.Name_Software,
        value: obj.Software_Id,
        checked: obj.Software_Id == this.currentSoftware,
      })),
      buttons: [
        {
          text: "Hủy",
          role: "cancel",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Đồng ý",
          cssClass: "asp-color",
          handler: (dataAlert) => {
            this.identityService.setSoftware(dataAlert);
            this.onChangeSoft();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentHDSDFile() {
    this.aspService.DowloadHDSD_Blod().subscribe((event) => {
      if (event) {
        switch (event.type) {
          case HttpEventType.DownloadProgress:
            break;
          case HttpEventType.Response:
            const blob = new Blob([event.body as BlobPart], {
              type: event.body?.type,
            });
            const url = URL.createObjectURL(blob);
            this.openFileModal(url);
            break;
        }
      }
    });
  }

  private async onChangeSoft() {
    let s;
    this.identityService.currentSoftware.subscribe((res) => (s = res));
    const sf = await this.aspService.getFunctions(s);
    this.funcs = sf;
    this.getNotifi();
  }

  private async openFileModal(url: any) {
    const modal = await this.modalController.create({
      component: FileViewedModalComponent,
      componentProps: {
        url: url,
      },
    });
    modal.onDidDismiss().then((dataReturned) => { });

    return await modal.present();
  }

  refresh(ev: any) {
    //this.getFunctions();
    this.viewInit();
    ev.target.complete();
    this.changeDetectorRef.detectChanges();
  }

  private viewInit() {
    this.initLayout();
    this.getCurrentUser();
    this.getCurrentMaDvCs();
    this.getListDvCs();
    this.getCurrentSoftware();
  }

  private getListDvCs() {
    this.identityService.listDVCS.subscribe((res) => {
      this.lstDvCs = res;
    });
  }

  private getCurrentUser() {
    this.identityService.currentUser.subscribe(
      (res) => (this.currentUser = res)
    );
  }

  private getCurrentMaDvCs() {
    this.identityService.currentMaDvCs.subscribe((res) => {
      this.currentMaDvCs = res;
    });
  }

  private getCurrentSoftware() {
    this.identityService.currentSoftware.subscribe((res) => {
      this.currentSoftware = res;
    });
  }

  private updateRouteDataVm(s: AppFunctions[]) {
    // (this.route.data as BehaviorSubject<any>).next({ this.funcs: s });
    (this.route.data as BehaviorSubject<any>).next({ appFunction: s });
  }

  private initLayout() {
    Object.defineProperty(this.layoutConfig, "colSize", {
      value: 4,
      configurable: true,
      enumerable: true,
      writable: true,
    });
  }

  //#region  notifi
  public async viewNotifi() {
    const modal = await this.modalController.create({
      component: NotificationsComponent,
    });
    modal.onDidDismiss().then((dataReturned) => { });

    return await modal.present();
  }

  private async getNotifi() {
    let s;
    this.identityService.currentSoftware.subscribe((res) => (s = res));
    const res = await this.notificationsService.GetNotificationsUser(s).finally();
    this.totalNotRead = res.table1.length > 0 ? res.table1[0].totalNotRead : 0;
  }

  //#endregion
}

@Pipe({
  name: "funcsFiltered",
  //pure: false,
})
export class FuncPipe implements PipeTransform {
  transform(items: AppFunctions[], filter: any): any {
    if (!items || filter == undefined || filter == null) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    //return items.filter(item => item.title.indexOf(filter.title) !== -1);
    return _.filter(items, filter);
  }
}
