"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_base_base_module_ts"],{

/***/ 58986:
/*!**********************************************************************!*\
  !*** ./src/app/components/base/customer-filter-modal.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1maWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 78168:
/*!*********************************************************************!*\
  !*** ./src/app/components/base/product-filter-modal.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWZpbHRlci1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 36852:
/*!************************************************!*\
  !*** ./src/app/components/base/base.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModule": () => (/* binding */ BaseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 55544);
/* harmony import */ var _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-filter-modal.component */ 2774);
/* harmony import */ var _customer_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-filter-modal.component */ 44411);





let BaseModule = class BaseModule {
};
BaseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_1__.ProductFilterModalComponent,
            _customer_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__.CustomerFilterModalComponent
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        exports: [
            _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_1__.ProductFilterModalComponent,
            _customer_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__.CustomerFilterModalComponent
        ]
    })
], BaseModule);



/***/ }),

/***/ 44411:
/*!********************************************************************!*\
  !*** ./src/app/components/base/customer-filter-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFilterModalComponent": () => (/* binding */ CustomerFilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./customer-filter-modal.component.html */ 56387);
/* harmony import */ var _customer_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-filter-modal.component.scss */ 58986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ 41614);








let CustomerFilterModalComponent = class CustomerFilterModalComponent {
    constructor(modalController, sqlService) {
        this.modalController = modalController;
        this.sqlService = sqlService;
        this.top = 100;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__.ApiParameter();
        this.loading = false;
    }
    ngOnInit() {
        this.filter();
    }
    filter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.apiParams.strSQLExec = "sp_API_GetListCustomers";
            this.apiParams.paraList = {
                KEYWORD: this.searchTerm,
                TOP: this.top
            };
            this.apiParams.cmdType = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.CommandType.StoredProcedure;
            const res = yield this.sqlService.ExecuteReturnDt(this.apiParams).finally(() => this.loading = false);
            this.customers = res;
        });
    }
    onSelectedItem(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(item);
        });
    }
    // async onChangeRadio(item) {
    //   if (item) {
    //     item.stt0 = new Date().valueOf().toString();
    //   }
    //   if (item) {
    //     await this.modalController.dismiss(item)
    //   } else await this.modalController.dismiss(null);
    // }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null);
        });
    }
    loadMoreData(event) {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.top = this.top + 10;
            yield this.filter();
            event.target.complete();
            const _total = (this.customers && this.customers.length > 0) ? this.customers[0].totalCount : 0;
            event.target.disabled = (this.top >= _total);
        }), 50);
    }
};
CustomerFilterModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.SQLExecService }
];
CustomerFilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-filter-modal',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_customer_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerFilterModalComponent);



/***/ }),

/***/ 2774:
/*!*******************************************************************!*\
  !*** ./src/app/components/base/product-filter-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFilterModalComponent": () => (/* binding */ ProductFilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-filter-modal.component.html */ 76014);
/* harmony import */ var _product_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-filter-modal.component.scss */ 78168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ 41614);








let ProductFilterModalComponent = class ProductFilterModalComponent {
    constructor(modalController, sqlService) {
        this.modalController = modalController;
        this.sqlService = sqlService;
        this.loai_vt = '';
        this.top = 100;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__.ApiParameter();
        this.loading = false;
    }
    ngOnInit() {
        this.filterProducts();
    }
    filterProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.apiParams.strSQLExec = "sp_API_GetDsSanPham";
            this.apiParams.paraList = {
                KEYWORD: this.searchTerm,
                TOP: this.top,
                LOAI_VT: this.loai_vt
            };
            this.apiParams.cmdType = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.CommandType.StoredProcedure;
            const res = yield this.sqlService.ExecuteReturnDt(this.apiParams).finally(() => this.loading = false);
            this.products = res;
        });
    }
    onChangeRadio(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (item) {
                item.stt0 = new Date().valueOf().toString();
            }
            if (item) {
                yield this.modalController.dismiss(item);
            }
            else
                yield this.modalController.dismiss(null);
        });
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null);
        });
    }
    loadMoreData(event) {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.top = this.top + 10;
            yield this.filterProducts();
            event.target.complete();
            const _total = (this.products && this.products.length > 0) ? this.products[0].totalCount : 0;
            event.target.disabled = (this.top >= _total);
        }), 50);
    }
};
ProductFilterModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.SQLExecService }
];
ProductFilterModalComponent.propDecorators = {
    loai_vt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ProductFilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-filter-modal',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductFilterModalComponent);



/***/ }),

/***/ 56387:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/base/customer-filter-modal.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header color=\"asp\">\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <ion-searchbar #searchTermControl=\"ngModel\" [(ngModel)]=\"searchTerm\" (ionChange)=\"filter()\" [ngModelOptions]=\"{standalone: true}\" cancelButtonIcon=\"\" debounce=\"500\"\r\n      showCancelButton=\"never\" placeholder=\"Tìm kiếm khách hàng...\">\r\n    </ion-searchbar> -->\r\n    <app-asp-search [(aspModel)]=\"searchTerm\" [ngModelOptions]=\"{standalone: true}\" (aspModelChange)=\"filter()\"\r\n      placeholder=\"Tìm kiếm khách hàng...\" [autofocus]=\"true\">\r\n    </app-asp-search>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ng-container *ngIf=\"!loading;else loadingTmpl\">\r\n    <ion-list>\r\n      <ion-radio-group>\r\n        <ion-item *ngFor=\"let item of customers\" detail=\"false\" button=\"true\" (click)=\"onSelectedItem(item)\">\r\n          <!-- <ion-radio slot=\"start\" color=\"asp\" (ionFocus)=\"onChangeRadio(item.ma_Dt)\" [value]=\"item.ma_Dt\">\r\n          </ion-radio> -->\r\n          <ion-label>\r\n            <h2>{{item.ten_Dt}}&nbsp;({{item.ma_Dt}})</h2>\r\n            <p>{{item.ten_Nh_Dt}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </ng-container>\r\n\r\n  <ng-template #loadingTmpl>\r\n    <asp-skeleton></asp-skeleton>\r\n  </ng-template>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ 76014:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/base/product-filter-modal.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <ion-searchbar #searchBar [(ngModel)]=\"searchTerm\" (ionChange)=\"filterProducts()\" (ionClear)=\"products=[]\"\r\n      cancelButtonIcon=\"\" debounce=\"500\" showCancelButton=\"never\" placeholder=\"Tên, sdt, mã, đơn hàng...\">\r\n    </ion-searchbar> -->\r\n    <app-asp-search [(aspModel)]=\"searchTerm\" (aspModelChange)=\"filterProducts()\"\r\n      placeholder=\"Tìm kiếm sản phẩm...\" [autofocus]=\"true\">\r\n    </app-asp-search>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ng-container *ngIf=\"!loading;else loadingTmpl\">\r\n    <ion-list class=\"mt-10\">\r\n      <ion-item *ngFor=\"let item of products\" (click)=\"onChangeRadio(item)\" [detail]=\"false\" [button]=\"true\">\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <h3>{{item.ten_Vt}}</h3>\r\n          <p class=\"asp-color-medium\">{{item.ma_Vt}}</p>\r\n        </ion-label>\r\n        <!-- <ion-radio [value]=\"item.ma_Vt\" color=\"asp\" slot=\"start\" (ionFocus)=\"onChangeRadio(item)\"></ion-radio> -->\r\n        <ion-note slot=\"end\" color=\"asp\" class=\"mr-0\" style=\"font-size:11pt\">\r\n          <span class=\"asp-color-medium\">{{item.ton_Cuoi}}</span>\r\n        </ion-note>\r\n      </ion-item>\r\n      <!-- <ion-radio-group [(ngModel)]=\"radioModel\">\r\n        <ion-item *ngFor=\"let item of products\">\r\n          <ion-label class=\"ion-text-wrap\">\r\n            <h3>{{item.ten_Vt}}</h3>\r\n            <p class=\"asp-color-medium\">{{item.ma_Vt}}</p>\r\n            <p class=\"asp-color-medium\">{{item.ten_Nh_Vt}}</p>\r\n          </ion-label>\r\n          <ion-radio [value]=\"item.ma_Vt\" color=\"asp\" slot=\"start\" (ionFocus)=\"onChangeRadio(item)\"></ion-radio>\r\n          <ion-note slot=\"end\" color=\"asp\" class=\"mr-0\" style=\"font-size:11pt\">\r\n            <span class=\"asp-color\">{{item.gia_Goc || 0 | number}}<sup>đ</sup></span>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ion-radio-group> -->\r\n    </ion-list>\r\n  </ng-container>\r\n\r\n  <ng-template #loadingTmpl>\r\n    <asp-skeleton></asp-skeleton>\r\n  </ng-template>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_base_base_module_ts.js.map