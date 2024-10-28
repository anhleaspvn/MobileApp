import { Component, OnInit, ErrorHandler, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { ModalController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { IdentityService } from '../../shared/services';
import { UtilityService } from '../../shared/utility.service';
import { Errors } from '../../models';
import {ForgotPassWordComponent} from './forgot-pass-word.component'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  year: number = new Date().getFullYear();
  errors: Errors = new Errors();
  submitting: boolean = false;
  errorMsg: string = '';
  authForm: FormGroup;
  username: string;

  // test: any = 123456789;
  // test1: any = 123456789;

  currencyMask: any = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 0,
    prefix: "",
    suffix: "",
    thousands: ".",
    nullable: false
  };

  //@ViewChild('txtUsername') txtUsername: any;
  hide: boolean = true;

  subscription: any;

  constructor(
    private modalController: ModalController,
    private identityService: IdentityService,
    private _utilityService: UtilityService,
    private router: Router,
    private platform: Platform,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  async login(form: any) {
    try {
      this.submitting = true;
      const credentials = this.authForm.value;
      const res = await this.identityService.attemptAuth(credentials.username, credentials.password);
      if (!res) {
        this.errors.errors.error = 'error';
        this.errors.errors.error_description = 'Có lỗi xảy ra vui lòng thử lại sau';
        this.submitting = false;
        //this._utilityService.showAlert('Có lỗi xảy ra vui lòng thử lại sau.');
        //throw new Error(this.errors);
        return;
      }
      this.router.navigate(['/tabs/home']);
    } catch (err) {

      //return;
    } finally {
      this.submitting = false;
    }

  }

  async forgotPassword(ev: any) {
    const modal = await this.modalController.create({
      component: ForgotPassWordComponent
    });

    modal.onDidDismiss().then(async (dataReturned) => {
    });
    return await modal.present();
  }

  ngOnInit() {
   this.identityService.purgeAuth();
  }

  ionViewDidEnter() {
  }

  ionViewWillLeave() {
    this.subscription?.unsubscribe();
  }

}
