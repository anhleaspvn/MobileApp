"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_tabpages_user_user_module_ts"],{

/***/ 42320:
/*!**************************************************************!*\
  !*** ./src/app/components/tabpages/user/user.component.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#auth-page .form-header img {\n  max-width: 200px;\n  max-height: 140px;\n}\n#auth-page .asp-input-icon {\n  position: absolute;\n  left: 8px;\n}\n#auth-page ion-button[type=submit] {\n  height: 45px;\n}\n#auth-page .btn-login-input {\n  position: absolute;\n  right: 20px;\n}\n#auth-page .btn-submit {\n  line-height: 40px;\n}\n#auth-page .copyright {\n  margin-top: 100%;\n  bottom: 6px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUhOO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUxOO0FBUUk7RUFDRSxpQkFBQTtBQU5OO0FBU0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQTiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1dGgtcGFnZSB7XHJcbiAgICAuZm9ybS1oZWFkZXIge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5hc3AtaW5wdXQtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ0bi1sb2dpbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnRuLXN1Ym1pdCB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMCU7XHJcbiAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 43456:
/*!************************************************************!*\
  !*** ./src/app/components/tabpages/user/user.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user.component.html */ 71545);
/* harmony import */ var _user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component.scss */ 42320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);











let UserComponent = class UserComponent {
    constructor(identityService, _utilityService, fb, sqlService, router) {
        this.identityService = identityService;
        this._utilityService = _utilityService;
        this.fb = fb;
        this.sqlService = sqlService;
        this.router = router;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__.ApiParameter();
        this.employee = {};
        this.submitting = false;
        this.hide = true;
        this.authForm = this.fb.group({
            'password_old': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'password_new': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'password_newcf': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.getInfoUser();
        }, 10);
    }
    getInfoUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.apiParams.strSQLExec = "sp_API_GetUser";
            this.apiParams.paraList = {
                MEMBER_ID: this.getStrCurrentUser()
            };
            this.apiParams.cmdType = src_app_helpers__WEBPACK_IMPORTED_MODULE_4__.CommandType.StoredProcedure;
            const res = yield this.sqlService.ExecuteReturnDt(this.apiParams);
            this.employee = res[0];
        });
    }
    getStrCurrentUser() {
        let strCurrentUser = '';
        this.identityService.currentUser.subscribe(res => {
            strCurrentUser = res;
        });
        return strCurrentUser;
    }
};
UserComponent.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__.IdentityService },
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__.SQLExecService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
UserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserComponent);



/***/ }),

/***/ 84200:
/*!*********************************************************!*\
  !*** ./src/app/components/tabpages/user/user.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ 43456);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ 55544);





let UserModule = class UserModule {
};
UserModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{ path: '', component: _user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent }])
        ]
    })
], UserModule);



/***/ }),

/***/ 71545:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/tabpages/user/user.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/tabs/home\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/tabs/home\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>Nhân viên</ion-title>\r\n   \r\n    <!-- <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" ios=\"filter-outline\" size=\"default\" md=\"filter-sharp\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ion-margin-top\">\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"person-circle-outline\" color=\"medium\" size=\"default\"></ion-icon>\r\n      <ion-label>\r\n        <h3>{{employee.member_ID}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"bookmark-sharp\" color=\"medium\" size=\"default\"></ion-icon>\r\n      <ion-label>\r\n        <h3>{{employee.ma_CbNv}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"bookmark-sharp\" color=\"medium\" size=\"default\"></ion-icon>\r\n      <ion-label>\r\n        <h3>{{employee.ten_CbNv}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"phone-portrait-sharp\" color=\"medium\" size=\"default\"></ion-icon>\r\n      <ion-label>\r\n        <h3>{{employee.so_Phone}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"mail-sharp\" color=\"medium\" size=\"default\"></ion-icon>\r\n      <ion-label>\r\n        <h3>{{employee.email}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"card-sharp\" color=\"medium\" size=\"default\"></ion-icon>\r\n      <ion-label>\r\n        <h3>{{employee.so_CMND}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon slot=\"start\" name=\"map-sharp\" color=\"medium\" size=\"default\"></ion-icon>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <h3>{{employee.dia_Chi}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_tabpages_user_user_module_ts.js.map