/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from "@angular/core";
import { Location as AngularLocation } from '@angular/common';

import { AlertController, IonRouterOutlet, Platform } from "@ionic/angular";
import { environment } from '../environments/environment';
import { UtilityService } from "./shared/utility.service";
import { NetworkService } from "./shared/network.service";

import { mapTo, debounceTime } from "rxjs/operators";

import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

import { App } from '@capacitor/app';

import {
  Capacitor
} from '@capacitor/core';
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  subscription: any;
  isConnected: boolean;
  snackBar: any;
  hasStatusBar: boolean = true;

  @ViewChild(IonRouterOutlet, { static: true }) ionRouterOutlet!: IonRouterOutlet;

  constructor(
    private networkService: NetworkService,
    private utilityService: UtilityService,
    public alertController: AlertController,
    private platform: Platform,
    private router: Router,
    private angularLocation: AngularLocation
  ) {
    this.initializeApp();
  }

  ionViewDidEnter() {
  }

  ionViewWillLeave() {

  }

  ngOnInit() {
  }

  private async initializeApp() {
    await SplashScreen.hide();
    await this.initStatusBar();
    this.listenConnection();
    this.platform.backButton?.subscribeWithPriority(0, () => {
      if (!this.ionRouterOutlet?.canGoBack()) {
        this.presentAlertExitAppConfirm();
      } else {
        if (this.router.url.indexOf('/tabs/home') > -1) {
          this.presentAlertExitAppConfirm();
        } else { this.angularLocation.back(); }
      }
    });
  }

  private async initStatusBar() {
    if (Capacitor.isPluginAvailable('StatusBar')) {
      if (Capacitor.getPlatform() === 'android') {
        await StatusBar.setBackgroundColor({
          color: environment.baseColor,
        });
      }
      await StatusBar.setStyle({
        style: Style.Dark
      });
    }
  }

  private listenConnection(): void {
    this.networkService
      .getNetworkStatus()
      .pipe(debounceTime(300))
      .subscribe((connected: boolean) => {
        this.isConnected = connected;
        console.log("[Home] isConnected", this.isConnected);
        if (!connected) {
          this.snackBar = this.utilityService.showSnackBar(
            "Mất kết nối. Vui lòng kiểm tra lại kết nối mạng",
            {
              duration: null,
              verticalPosition: "top",
            }
          );
          // this.utilityService.showAlert('Mất kết nối. Vui lòng kiểm tra lại kết nối mạng', {
          //   header: 'Thông báo'
          // });
        } else if (this.snackBar != null) {
          this.utilityService.hideSnackBar(this.snackBar);
          this.snackBar = null;
        }
      });
  }

  private async presentAlertExitAppConfirm() {
    const alert = await this.alertController.create({
      header: 'Xác nhận',
      message: 'Bạn chắc chắn muốn đóng ứng dụng?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Đóng ứng dụng',
          id: 'confirm-button',
          handler: () => {
            App.exitApp();
          }
        }
      ]
    });

    await alert.present();
  }
}
