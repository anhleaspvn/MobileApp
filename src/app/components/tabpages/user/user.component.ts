import { Component, OnInit, ViewChild, DebugElement } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { SQLExecService } from 'src/app/shared/services';
import { UtilityService } from 'src/app/shared/utility.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentityService } from 'src/app/shared/services';
import { Router } from '@angular/router';
import { CommandType } from 'src/app/helpers';
import { ApiParameter } from 'src/app/shared/api-params';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  apiParams: ApiParameter = new ApiParameter();
  employee: any = {};
  submitting: boolean = false;
  authForm: FormGroup;
  hide: boolean = true;
  subscription: any;

  constructor(
    private identityService: IdentityService,
    private _utilityService: UtilityService,
    private fb: FormBuilder,
    private sqlService: SQLExecService,
    private router: Router
  ) {
    this.authForm = this.fb.group({

      'password_old': ['', Validators.required],
      'password_new': ['', Validators.required],
      'password_newcf': ['', Validators.required]
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.getInfoUser();
    }, 10);
  }

  async getInfoUser() {
    this.apiParams.strSQLExec = "sp_API_GetUser";
    this.apiParams.paraList = {
      MEMBER_ID: this.getStrCurrentUser()
    };
    this.apiParams.cmdType = CommandType.StoredProcedure;
    const res = await this.sqlService.ExecuteReturnDt(this.apiParams);
    this.employee = res[0];
  }

  private getStrCurrentUser() {
    let strCurrentUser='';
    this.identityService.currentUser.subscribe(res => {
      strCurrentUser = res;
    }); 
    return strCurrentUser;
  }
  /* logout() {
    this.identityService.purgeAuth();
    this.router.navigateByUrl("/login");
  } */

  /* async ChangPass(form: any) {
    try {
      const user = this.identityService.currentUserSubject.getValue().Member_ID;
      const credentials = this.authForm.value;
      this.submitting = true;

      this.apiParams.strSQLExec = "SELECT dbo.fn_Decrypt(CheckPass) FROM dbo.L00MEMBER WHERE Member_ID = '" + user + "'";
      this.apiParams.cmdType = CommandType.Text;
      const res_PassOld = await this.sqlService.ExecuteReturnDt(this.apiParams);
      if (res_PassOld[0].column1 != credentials.password_old) {
        this._utilityService.showAlert('Mật khẩu củ chưa chính xác');
        credentials.password_old = null;
        this.submitting = false;
        return;
      }


      if (credentials.password_new != credentials.password_newcf) {
        this._utilityService.showAlert('Mật khẩu khác nhau vui lòng thử lại sau');
        credentials.password_new = credentials.password_newcf = null;
        this.submitting = false;
        return;
      }

      this.apiParams.strSQLExec = "UPDATE L00MEMBER SET CheckPass = dbo.fn_Encrypt('" + credentials.password_new + "') WHERE Member_ID = '" + user + "'";
      this.apiParams.cmdType = CommandType.Text;
      const res = await this.sqlService.Execute(this.apiParams);
      if (!res) {
        this._utilityService.showAlert('Có lỗi xảy ra vui lòng thử lại sau');
        this.submitting = false;
        return;
      }
      this._utilityService.showAlert('Đổi mật khẩu thành công');
    } catch (err) {

      return;
    } finally {
      this.submitting = false;
    }

  } */



}
