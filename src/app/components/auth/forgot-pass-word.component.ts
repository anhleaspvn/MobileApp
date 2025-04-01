import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Errors } from 'src/app/models';
import { IdentityService } from 'src/app/shared/services';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-forgot-pass-word',
  templateUrl: './forgot-pass-word.component.html',
  styleUrls: ['./forgot-pass-word.component.scss'],
})
export class ForgotPassWordComponent implements OnInit {
  
  errors: Errors = new Errors();
  submitting: boolean = false;
  errorMsg: string = '';
  authForm: FormGroup;
  username: string;
  email: string;

  constructor(
    private _utilityService: UtilityService,
    private modalController: ModalController,
    private identityService: IdentityService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required]
    });
  }

  ngOnInit() {}

  async onSubmit(form: any) {
    
    try {
      this.submitting = true;
      const credentials = this.authForm.value;
      const res = await this.identityService.sendMailPass(credentials.username, credentials.email);
      if (!res) {
        this._utilityService.showToast("Tài khoản hoặc Email không đúng.");
        this.submitting = false;
        return;
      }
      this._utilityService.showToast("Tài khoản đã gửi đến mail của bạn.");
      // this.closeModal(true);
    } catch (err) {

      //return;
    } finally {
      this.submitting = false;
    }
  }

  async closeModal(ok: boolean = false) {

    await this.modalController.dismiss();
  }

}
