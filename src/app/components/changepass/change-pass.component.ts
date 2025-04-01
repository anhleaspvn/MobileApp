import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
} from "@angular/forms";
import { UtilityService } from "src/app/shared/utility.service";
// import { EmployeesService } from '../../shared/services/entities';
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { ErrorStateMatcher } from "@angular/material/core";
import { IdentityService, SQLExecService } from "src/app/shared/services";
import { ApiParameter } from "src/app/shared/api-params";
import { CommandType } from "src/app/helpers";

interface ChangePassRequest {
  current_password: string;
  password: string;
  confirm_password: string;
}

@Component({
  selector: "app-user-changepass",
  templateUrl: "./change-pass.component.html",
  styleUrls: ["./change-pass.component.scss"],
})
export class ChangePassComponent implements OnInit {
  submitting: boolean;
  apiParams: ApiParameter = new ApiParameter();
  //pForm: FormGroup;

  req: ChangePassRequest = Object.create(null);

  matcher = new MyErrorStateMatcher();

  hide: boolean = true;
  currentUser: any = { Member_Id: "" };

  constructor(
    private identityService: IdentityService,
    private _utilityService: UtilityService,
    private sqlService: SQLExecService,
    private router: Router,
    private platform: Platform,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // this.pForm = this.fb.group(
    //   {
    //     password: ["", Validators.required],
    //     new_password: ["", Validators.required],
    //     re_password: ["", Validators.required],
    //   },
    //   { validator: this.checkPasswords }
    // );
    //this.getCurrentUser().finally();
    this.identityService.currentUser.subscribe(
      (res) => (this.currentUser = res)
    );
  }

  /**
   * TODO: Đưa về xử lý ở server
   */
  async onSubmit() {
    const strmemberId = this.currentUser.Member_ID;

    this.submitting = true;

    this.apiParams.strSQLExec =
      "SELECT dbo.fn_Decrypt(CheckPass) FROM dbo.L00MEMBER WHERE Member_ID = '" +
      strmemberId +
      "'";
    this.apiParams.cmdType = CommandType.Text;

    const res = await this.sqlService.ExecuteReturnDt(this.apiParams).finally(()=>this.submitting = false);
    if (res[0].column1 != this.req.current_password) {
      this._utilityService.showToast(
        "Mật khẩu cũ chưa chính xác",
        this._utilityService.toastType.error
      );
      return;
    } else {
      this.apiParams.strSQLExec =
        "UPDATE L00MEMBER SET CheckPass = dbo.fn_Encrypt('" +
        this.req.password +
        "') WHERE Member_ID = '" +
        strmemberId +
        "'";
      this.apiParams.cmdType = CommandType.Text;
      await this.sqlService.Execute(this.apiParams);
      this._utilityService.showAlert(
        "Đồi mật khẩu thành công. Vui lòng đăng nhập nhập lại"
      );
      this.router.navigateByUrl("/login");
    }
  }

  checkPasswords(group: FormGroup) {
    
    const pass = group.get("new_password").value;
    const confirmPass = group.get("re_password").value;
    if (!confirmPass) return;
    return pass === confirmPass ? null : { notSame: true };
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}
