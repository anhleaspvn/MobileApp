"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_auth_auth_module_ts"],{

/***/ 63736:
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "#auth-page .form-header img {\n  max-width: 200px;\n  max-height: 150px;\n}\n#auth-page .asp-input-icon {\n  position: absolute;\n  left: 8px;\n}\n#auth-page ion-button[type=submit] {\n  height: 45px;\n}\n#auth-page .btn-login-input {\n  position: absolute;\n  right: 20px;\n}\n#auth-page .form-action {\n  line-height: 35px;\n}\n#auth-page .form-action button {\n  float: right;\n  line-height: 40px;\n  font-size: 16px;\n}\n.copyright {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRE47QUFLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUxKO0FBUUU7RUFDRSxpQkFBQTtBQU5KO0FBUUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTk47QUFVQTtFQUNDLGVBQUE7QUFQRCIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1dGgtcGFnZSB7XHJcbiAgLmZvcm0taGVhZGVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFzcC1pbnB1dC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLWxvZ2luLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYWN0aW9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmNvcHlyaWdodCB7XHJcbiBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 32671:
/*!*****************************************************************!*\
  !*** ./src/app/components/auth/forgot-pass-word.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "#auth-page .form-header img {\n  max-width: 130px;\n  max-height: 130px;\n}\n#auth-page .asp-input-icon {\n  position: absolute;\n  left: 8px;\n}\n#auth-page ion-button[type=submit] {\n  height: 45px;\n}\n#auth-page .btn-login-input {\n  position: absolute;\n  right: 20px;\n}\n#auth-page .form-action {\n  line-height: 35px;\n}\n#auth-page .form-action button {\n  float: right;\n  line-height: 40px;\n  font-size: 16px;\n}\n.copyright {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzLXdvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUhOO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUxOO0FBUUk7RUFDRSxpQkFBQTtBQU5OO0FBUU07RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTlI7QUFVRTtFQUNDLGVBQUE7QUFQSCIsImZpbGUiOiJmb3Jnb3QtcGFzcy13b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1dGgtcGFnZSB7XHJcbiAgICAuZm9ybS1oZWFkZXIge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTMwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5hc3AtaW5wdXQtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ0bi1sb2dpbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9ybS1hY3Rpb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICBcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb3B5cmlnaHQge1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 83590:
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_auth_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./auth.component.html */ 44321);
/* harmony import */ var _auth_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component.scss */ 63736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services */ 41614);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ 40688);
/* harmony import */ var _forgot_pass_word_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-pass-word.component */ 9276);











let AuthComponent = class AuthComponent {
    constructor(modalController, identityService, _utilityService, router, platform, fb) {
        this.modalController = modalController;
        this.identityService = identityService;
        this._utilityService = _utilityService;
        this.router = router;
        this.platform = platform;
        this.fb = fb;
        this.year = new Date().getFullYear();
        this.errors = new _models__WEBPACK_IMPORTED_MODULE_4__.Errors();
        this.submitting = false;
        this.errorMsg = '';
        // test: any = 123456789;
        // test1: any = 123456789;
        this.currencyMask = {
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
        this.hide = true;
        this.authForm = this.fb.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    login(form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.submitting = true;
                const credentials = this.authForm.value;
                const res = yield this.identityService.attemptAuth(credentials.username, credentials.password);
                if (!res) {
                    this.errors.errors.error = 'error';
                    this.errors.errors.error_description = 'Có lỗi xảy ra vui lòng thử lại sau';
                    this.submitting = false;
                    //this._utilityService.showAlert('Có lỗi xảy ra vui lòng thử lại sau.');
                    //throw new Error(this.errors);
                    return;
                }
                this.router.navigate(['/tabs/home']);
            }
            catch (err) {
                //return;
            }
            finally {
                this.submitting = false;
            }
        });
    }
    forgotPassword(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _forgot_pass_word_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPassWordComponent
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            }));
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.identityService.purgeAuth();
    }
    ionViewDidEnter() {
    }
    ionViewWillLeave() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
AuthComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__.IdentityService },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
AuthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-auth',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_auth_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auth_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthComponent);



/***/ }),

/***/ 51233:
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 83590);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ 41614);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ 55544);
/* harmony import */ var _forgot_pass_word_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-pass-word.component */ 9276);







const routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent
    }
]);
let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
            _forgot_pass_word_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPassWordComponent
        ],
        providers: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.NoAuthService],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            routing
        ],
        exports: [
            _forgot_pass_word_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPassWordComponent
        ]
    })
], AuthModule);



/***/ }),

/***/ 9276:
/*!***************************************************************!*\
  !*** ./src/app/components/auth/forgot-pass-word.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPassWordComponent": () => (/* binding */ ForgotPassWordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_pass_word_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./forgot-pass-word.component.html */ 83191);
/* harmony import */ var _forgot_pass_word_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-pass-word.component.scss */ 32671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models */ 40688);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);










let ForgotPassWordComponent = class ForgotPassWordComponent {
    constructor(_utilityService, modalController, identityService, router, fb) {
        this._utilityService = _utilityService;
        this.modalController = modalController;
        this.identityService = identityService;
        this.router = router;
        this.fb = fb;
        this.errors = new src_app_models__WEBPACK_IMPORTED_MODULE_2__.Errors();
        this.submitting = false;
        this.errorMsg = '';
        this.authForm = this.fb.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() { }
    onSubmit(form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.submitting = true;
                const credentials = this.authForm.value;
                const res = yield this.identityService.sendMailPass(credentials.username, credentials.email);
                if (!res) {
                    this._utilityService.showToast("Tài khoản hoặc Email không đúng.");
                    this.submitting = false;
                    return;
                }
                this._utilityService.showToast("Tài khoản đã gửi đến mail của bạn.");
                // this.closeModal(true);
            }
            catch (err) {
                //return;
            }
            finally {
                this.submitting = false;
            }
        });
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
ForgotPassWordComponent.ctorParameters = () => [
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.IdentityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
ForgotPassWordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-forgot-pass-word',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_pass_word_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_pass_word_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPassWordComponent);



/***/ }),

/***/ 44321:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/auth/auth.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" padding id=\"auth-page\">\r\n\r\n  <form role=\"form\" [formGroup]=\"authForm\" (ngSubmit)=\"authForm.valid && login(authForm)\">\r\n    \r\n    <div class=\"form-header ion-text-center mt-40 ion-margin-bottom\">\r\n      <img src=\"/assets/images/airpeed.jpg\">\r\n    </div>\r\n    <div class=\"ion-margin-top p-20\">\r\n\r\n      <div class=\"standard\">\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Tài khoản</mat-label>\r\n          <mat-icon matPrefix color=\"primary\" class=\"mr-5\">person</mat-icon>\r\n          <input matInput autocomplete=\"off\" name=\"username\" matInputAutofocus formControlName=\"username\" required #txtUsername\r\n            [(ngModel)]=\"username\" />\r\n          <button type=\"button\" class=\"asp-color-medium\" *ngIf=\"username\" mat-icon-button matSuffix\r\n            (click)=\"username=''\" aria-label=\"Xóa\" aria-pressed=\"true\">\r\n            <mat-icon>clear</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Mật khẩu</mat-label>\r\n          <mat-icon matPrefix color=\"primary\" class=\"mr-5\">vpn_key</mat-icon>\r\n          <input matInput autocomplete=\"off\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" formControlName=\"password\" required\r\n            #txtPassword>\r\n          <button type=\"button\" mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n            [attr.aria-pressed]=\"hide\">\r\n            <mat-icon class=\"asp-color-medium\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-action\">\r\n        <button class=\"float-right\" [disabled]=\"!authForm.valid || submitting\" (click)=\"login(authForm)\"\r\n          mat-raised-button color=\"primary\">Đăng nhập</button>\r\n        <a href=\"javascript:void(0)\" (click)=\"forgotPassword($event)\" class=\"mt-16 asp-color-medium\">Quên mật\r\n          khẩu?</a>\r\n      </div>\r\n      <mat-progress-bar *ngIf=\"submitting\" mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center copyright\">\r\n      Copyright © {{year}} <a href=\"https://asp.com.vn/\" target=\"_blank\">asp ERP Software JSC</a>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 83191:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/auth/forgot-pass-word.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Quên mật khẩu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" padding id=\"auth-page\">  \r\n\r\n  <form role=\"form\" [formGroup]=\"authForm\" (ngSubmit)=\"authForm.valid && onSubmit(authForm)\">\r\n    \r\n    <div class=\"form-header ion-text-center mt-40 ion-margin-bottom\">\r\n      <img src=\"/assets/images/logo_footer.png\">\r\n    </div>\r\n    <div class=\"ion-margin-top p-20\">\r\n\r\n      <div class=\"standard\">\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Tài khoản</mat-label>\r\n          <mat-icon matPrefix color=\"primary\" class=\"mr-5\">person</mat-icon>\r\n          <input matInput autocomplete=\"off\" name=\"username\" matInputAutofocus formControlName=\"username\" required #txtUsername\r\n            [(ngModel)]=\"username\" />\r\n          <button type=\"button\" class=\"asp-color-medium\" *ngIf=\"username\" mat-icon-button matSuffix\r\n            (click)=\"username=''\" aria-label=\"Xóa\" aria-pressed=\"true\">\r\n            <mat-icon>clear</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Email</mat-label>\r\n          <mat-icon matPrefix color=\"primary\" class=\"mr-5\">email</mat-icon>\r\n          <input  matInput autocomplete=\"off\" name=\"email\" formControlName=\"email\" required #txtEmail\r\n            [(ngModel)]=\"email\" \r\n            pattern=\"[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\"\r\n            />\r\n          <button type=\"button\" class=\"asp-color-medium\" *ngIf=\"email\" mat-icon-button matSuffix\r\n            (click)=\"email=''\" aria-label=\"Xóa\" aria-pressed=\"true\">\r\n            <mat-icon>clear</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-action\">\r\n        <a class=\"mt-16 asp-color-medium\">Mật khẩu được gửi lại đến mail tài khoản!</a>\r\n        <button class=\"float-center\" [disabled]=\"!authForm.valid || submitting\" (click)=\"onSubmit(authForm)\"\r\n          mat-raised-button color=\"primary\">Xác nhận</button>\r\n      </div>\r\n      <mat-progress-bar *ngIf=\"submitting\" mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\r\n    </div>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_auth_auth_module_ts.js.map