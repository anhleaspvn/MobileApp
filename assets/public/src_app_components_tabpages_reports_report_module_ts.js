"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_tabpages_reports_report_module_ts"],{

/***/ 88381:
/*!*******************************************************************!*\
  !*** ./src/app/components/tabpages/reports/report.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 94177:
/*!******************************************************!*\
  !*** ./src/app/components/report-info/core/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_0__.ReportService)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 49475);



/***/ }),

/***/ 49475:
/*!***************************************************************!*\
  !*** ./src/app/components/report-info/core/services/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* reexport safe */ _report_service__WEBPACK_IMPORTED_MODULE_0__.ReportService)
/* harmony export */ });
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.service */ 17866);



/***/ }),

/***/ 85572:
/*!*****************************************************************!*\
  !*** ./src/app/components/tabpages/reports/report.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report.component.html */ 70836);
/* harmony import */ var _report_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.component.scss */ 88381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _report_info_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../report-info/core */ 94177);








let ReportComponent = class ReportComponent {
    constructor(reportService, identityService, router) {
        this.reportService = reportService;
        this.identityService = identityService;
        this.router = router;
        this.navs = [];
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__.ApiParameter();
    }
    ngOnInit() {
        setTimeout(() => {
            this.getReport().finally();
        }, 10);
    }
    getReport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let sw;
            this.identityService.currentSoftware.subscribe(res => sw = res);
            // this.apiParams.strSQLExec = `SELECT * FROM dbo.L00MobileReport 
            //                             WHERE report_Parent ='' and Software_Id ='${sw}' ORDER BY DisplayOrder`;
            // this.apiParams.cmdType = CommandType.Text;
            const res = yield this.reportService.GetMobileReport(sw).finally();
            this.navs = res;
        });
    }
    gotoListReport(nav) {
        const routeLink = nav.routerLink + (nav.report_Id ? `/${nav.report_Id.split(",").join("/")}` : "");
        // this.router.navigateByUrl(routeLink);
        this.router.navigate([routeLink], { queryParams: { strTitle: nav.title } });
    }
};
ReportComponent.ctorParameters = () => [
    { type: _report_info_core__WEBPACK_IMPORTED_MODULE_4__.ReportService },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.IdentityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-report",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportComponent);



/***/ }),

/***/ 30042:
/*!**************************************************************!*\
  !*** ./src/app/components/tabpages/reports/report.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportModule": () => (/* binding */ ReportModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services */ 41614);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ 55544);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/layout.module */ 46092);
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ 85572);







const routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
    {
        path: "",
        component: _report_component__WEBPACK_IMPORTED_MODULE_3__.ReportComponent,
    },
]);
let ReportModule = class ReportModule {
};
ReportModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_report_component__WEBPACK_IMPORTED_MODULE_3__.ReportComponent],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutModule,
            routing,
        ],
        providers: [_shared_services__WEBPACK_IMPORTED_MODULE_0__.DataToolService, _shared_services__WEBPACK_IMPORTED_MODULE_0__.SQLExecService],
    })
], ReportModule);



/***/ }),

/***/ 70836:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/tabpages/reports/report.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-title class=\"ion-text-center\">\r\n      Báo cáo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-list class=\"mt-16\">\r\n    <ion-item *ngFor=\"let nav of navs\" [detail]=\"true\" (click)=\"gotoListReport(nav)\">\r\n      <ion-icon class=\"icon\" [ios]=\"nav.iconName+ '-outline'\" [md]=\"nav.iconName+'-sharp'\" color=\"asp\"></ion-icon>\r\n      <ion-label class=\"ml-5\" > {{nav.title}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_tabpages_reports_report_module_ts.js.map