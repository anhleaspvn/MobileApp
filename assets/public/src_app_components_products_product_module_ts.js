"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_products_product_module_ts"],{

/***/ 86662:
/*!********************************************************************!*\
  !*** ./src/app/components/products/categories/list.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 98969:
/*!******************************************************************************!*\
  !*** ./src/app/components/products/categories/product-detail.component.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label {\n  font-size: 11pt;\n}\nion-item .title {\n  font-size: 10pt;\n}\nion-item .body {\n  max-width: 70%;\n  text-align: right;\n  white-space: normal !important;\n}\n.info, .product-detail {\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFFSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBQVI7QUFHQTtFQUNJLGtCQUFBO0FBQUoiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG4gICAgLmJvZHl7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5pbmZvLC5wcm9kdWN0LWRldGFpbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 74326:
/*!***************************************************************************!*\
  !*** ./src/app/components/products/checking-info/checking.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".hinhanh {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQUE7QUFBUiIsImZpbGUiOiJjaGVja2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaW5oYW5oXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfSJdfQ== */";

/***/ }),

/***/ 52524:
/*!************************************************************!*\
  !*** ./src/app/components/products/product.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 28132:
/*!*******************************************************************!*\
  !*** ./src/app/components/products/categories/category.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryModule": () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.module */ 55544);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/base.module */ 36852);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component */ 92032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.component */ 49644);





// import { DetailComponent } from './detail.component';


const routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
    {
        path: 'list',
        component: _list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent,
    },
    // {
    //   path: 'detail',
    //   component: DetailComponent,
    // },
    // {
    //   path: 'product-detail/:ma_Vt',
    //   component: ProductDetailComponent,
    // }
]);
let CategoryModule = class CategoryModule {
};
CategoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            // VourcherViewModdule,
            _list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent,
            // DetailComponent,
            _product_detail_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailComponent
        ],
        imports: [
            // VourcherViewModdule,
            // ViewModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _base_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule,
            routing
        ]
    })
], CategoryModule);



/***/ }),

/***/ 92032:
/*!******************************************************************!*\
  !*** ./src/app/components/products/categories/list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list.component.html */ 63829);
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component.scss */ 86662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility.service */ 76515);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 41614);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ 67698);
/* harmony import */ var _warehouse_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../warehouse/core */ 81682);
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail.component */ 49644);












let ListComponent = class ListComponent {
    constructor(sqlService, voucherService, alertController, modalController, IdentityService, router, route, _utilityService, warehouserService) {
        this.sqlService = sqlService;
        this.voucherService = voucherService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.IdentityService = IdentityService;
        this.router = router;
        this.route = route;
        this._utilityService = _utilityService;
        this.warehouserService = warehouserService;
        this.top = 20;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__.ApiParameter();
        this.totalCount = 0;
        this.selectTrang_Thai = "";
        this.skeletons = [];
        this.loading = true;
        this.searchTerm = '';
        this.today = new Date();
        this.Param = new _models__WEBPACK_IMPORTED_MODULE_5__.Params();
        this.strMaCt = this.route.snapshot.params.maCt;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.getListVatTu();
        }, 5);
    }
    loadMoreData(event, refresh = false) {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.top = this.top + 5;
            yield this.getListVatTu(refresh);
            event.target.complete();
            if (!refresh)
                event.target.disabled = (this.top >= this.totalCount);
        }), 10);
    }
    getListVatTu(isLoading = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = isLoading;
            this.Param = {
                top: this.top,
                keyword: this.searchTerm,
            };
            const res = yield this.warehouserService.getDmVt(this.Param).finally(() => this.loading = false);
            if (res.length <= 0) {
                yield this._utilityService.showAlert("không tìm thấy cho sản phẩm");
            }
            else {
                this.products = res;
                this.totalCount = res[0].totalCount;
            }
        });
    }
    goToDetail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // if (!item) return;
            // this.router.navigateByUrl('components/product/product-detail/' + item.ma_Vt);
            const modal = yield this.modalController.create({
                component: _product_detail_component__WEBPACK_IMPORTED_MODULE_7__.ProductDetailComponent,
                componentProps: {
                    product: item
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    openModalFilter() {
    }
    trackBy(index, item) {
        var _a;
        return (_a = item === null || item === void 0 ? void 0 : item.stt) !== null && _a !== void 0 ? _a : index;
    }
};
ListComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__.SQLExecService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__.VoucherService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__.IdentityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _warehouse_core__WEBPACK_IMPORTED_MODULE_6__.WarehousesService }
];
ListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-product-list',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListComponent);



/***/ }),

/***/ 49644:
/*!****************************************************************************!*\
  !*** ./src/app/components/products/categories/product-detail.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-detail.component.html */ 48543);
/* harmony import */ var _product_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component.scss */ 98969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);





let ProductDetailComponent = class ProductDetailComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.product = {};
        this.showSkeleton = true;
    }
    ngOnInit() {
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(ok);
        });
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ProductDetailComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ProductDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-detail',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductDetailComponent);



/***/ }),

/***/ 4269:
/*!*************************************************************************!*\
  !*** ./src/app/components/products/checking-info/checking.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckingComponent": () => (/* binding */ CheckingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checking_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./checking.component.html */ 76097);
/* harmony import */ var _checking_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checking.component.scss */ 74326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility.service */ 76515);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var _warehouse_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../warehouse/core */ 81682);
/* harmony import */ var _models_paramsqr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/paramsqr */ 75084);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);









let CheckingComponent = class CheckingComponent {
    constructor(_utilityService, barcodeScanner, warehouseService) {
        this._utilityService = _utilityService;
        this.barcodeScanner = barcodeScanner;
        this.warehouseService = warehouseService;
        this.submitting = false;
        this.param = new _models_paramsqr__WEBPACK_IMPORTED_MODULE_5__.ParamsQR();
        this.barcodeScannerOptions = {
            prompt: '',
            showTorchButton: false,
            showFlipCameraButton: false,
            //torchOn: true,
            resultDisplayDuration: 1
        };
    }
    ngOnInit() { }
    startScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.barcodeScanner.scan(this.barcodeScannerOptions)
                .then((data) => {
                if (data.cancelled) {
                    console.log("User cancelled the action!");
                    return false;
                }
                else if (data && data.text != '')
                    this.getProductByQRCode(data.text);
            }).catch((err) => { this._utilityService.showToast(JSON.stringify(err)); });
        });
    }
    getProductByQRCode(qrCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (qrCode.includes('{')) {
                let result = JSON.parse(qrCode);
                this.param = {
                    MA_VT: result.Ma_Vt,
                    MA_LO: result.Ma_Lo,
                    HAN_SD: moment__WEBPACK_IMPORTED_MODULE_6__(result.Han_Sd, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                    NGAY_SX: moment__WEBPACK_IMPORTED_MODULE_6__(result.Ngay_Sx, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                    MA_KHO: result.Ma_Kho,
                    SO_LUONG: result.So_Luong
                };
            }
            else {
                this.param = {
                    MA_VT: qrCode,
                    MA_LO: '',
                    HAN_SD: '',
                    NGAY_SX: '',
                    MA_KHO: '',
                    SO_LUONG: 0
                };
            }
            const res = yield this.warehouseService.GetVtByCode(this.param).finally();
            if ((res === null || res === void 0 ? void 0 : res.length) <= 0) {
                yield this._utilityService.showAlert(`Không tìm thấy sản phẩm cho: ${qrCode}`);
            }
            else {
                this.model = res[0];
            }
        });
    }
};
CheckingComponent.ctorParameters = () => [
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner },
    { type: _warehouse_core__WEBPACK_IMPORTED_MODULE_4__.WarehousesService }
];
CheckingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-checking',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_checking_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checking_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckingComponent);



/***/ }),

/***/ 76770:
/*!**********************************************************************!*\
  !*** ./src/app/components/products/checking-info/checking.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckingModule": () => (/* binding */ CheckingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.module */ 55544);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/base.module */ 36852);
/* harmony import */ var _checking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checking.component */ 4269);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);






const routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
    {
        path: 'checking',
        component: _checking_component__WEBPACK_IMPORTED_MODULE_2__.CheckingComponent,
    }
]);
let CheckingModule = class CheckingModule {
};
CheckingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _checking_component__WEBPACK_IMPORTED_MODULE_2__.CheckingComponent
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _base_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule,
            routing
        ]
    })
], CheckingModule);



/***/ }),

/***/ 67698:
/*!*****************************************************!*\
  !*** ./src/app/components/products/models/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Params": () => (/* reexport safe */ _params__WEBPACK_IMPORTED_MODULE_0__.Params)
/* harmony export */ });
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params */ 82981);



/***/ }),

/***/ 82981:
/*!******************************************************!*\
  !*** ./src/app/components/products/models/params.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Params": () => (/* binding */ Params)
/* harmony export */ });
class Params {
    constructor() {
        this.top = 50;
        this.keyword = '';
        this.ma_Vt = '';
    }
}


/***/ }),

/***/ 75084:
/*!********************************************************!*\
  !*** ./src/app/components/products/models/paramsqr.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParamsQR": () => (/* binding */ ParamsQR)
/* harmony export */ });
class ParamsQR {
    constructor() {
        this.MA_VT = '';
        this.MA_LO = '';
        this.MA_KHO = '';
        this.SO_LUONG = 0;
    }
    get HAN_SD() {
        return this.$HAN_SD ? this.$HAN_SD : '';
    }
    get NGAY_SX() {
        return this.$NGAY_SX ? this.$NGAY_SX : '';
        // moment(new Date(this.$NGAY_SX).toISOString()).format('YYYY-MM-DD')
    }
}


/***/ }),

/***/ 43162:
/*!**********************************************************!*\
  !*** ./src/app/components/products/product.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product.component.html */ 75265);
/* harmony import */ var _product_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component.scss */ 52524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let ProductComponent = class ProductComponent {
    constructor() {
        this.navs = [
            { id: 'list', title: 'Quản lý sản phẩm', routerLink: '../product/list', icon: { name: 'list', color: 'asp' } },
            { id: 'checking_info', title: 'Kiểm tra thông tin', routerLink: '../product/checking', icon: { name: 'qr-code', color: 'secondary' } },
        ];
    }
    ngOnInit() { }
};
ProductComponent.ctorParameters = () => [];
ProductComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-product',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductComponent);



/***/ }),

/***/ 40037:
/*!*******************************************************!*\
  !*** ./src/app/components/products/product.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 55544);
/* harmony import */ var _checking_info_checking_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checking-info/checking.module */ 76770);
/* harmony import */ var _categories_category_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/category.module */ 28132);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.component */ 43162);







const routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
    { path: '', component: _product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent, pathMatch: 'full' }
]);
let ProductModule = class ProductModule {
};
ProductModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _checking_info_checking_module__WEBPACK_IMPORTED_MODULE_1__.CheckingModule,
            _categories_category_module__WEBPACK_IMPORTED_MODULE_2__.CategoryModule,
            routing
        ]
    })
], ProductModule);



/***/ }),

/***/ 63829:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/products/categories/list.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/components/products/list\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" [routerLink]=\"['/components/product']\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Quản lý sản phẩm</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <app-asp-search [(aspModel)]=\"searchTerm\" (aspModelChange)=\"getListVatTu()\" placeholder=\"Tìm sản phẩm\"></app-asp-search>\r\n\r\n  <ion-grid>\r\n    <ng-container *ngIf=\"!loading; else elseTemplate\">\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <p>Tổng:&nbsp;<span style=\"font-size: 14px;\" text-bold>{{totalCount | number}}</span></p>\r\n        </ion-label>\r\n      </ion-list-header>\r\n      \r\n      <ion-list class=\"info-detail\">\r\n        <ion-item no-margin-vertical *ngFor=\"let item of products;trackBy:trackBy\" button=\"true\" detail=\"false\"\r\n          (click)=\"goToDetail(item)\">\r\n          <ion-avatar slot=\"start\" class=\"avatar\">\r\n            <img style=\"width: 100%;height: 100%;\" [src]=\"item?.hinh | displayAvatar\" title=\"{{item.ten_Vt}}\">\r\n          </ion-avatar>\r\n          <ion-label no-margin no-padding>\r\n            <h3 class=\"ion-text-wrap\">{{item.ten_Vt}} &nbsp; \r\n              <span class=\"asp-color-medium\"> ({{item.ma_Vt}})</span> </h3>\r\n          </ion-label>\r\n          <ion-note slot=\"end\"> {{item.ton_Cuoi}} </ion-note>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ng-container>\r\n\r\n    <ng-template #elseTemplate>\r\n      <asp-skeleton></asp-skeleton>\r\n    </ng-template>\r\n\r\n  </ion-grid>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ 48543:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/products/categories/product-detail.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" (click)=\"closeModal()\">\r\n        <ion-icon slot=\"icon-only\" ios=\"close-outline\" md=\"close-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Chi tiết sản phẩm</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen color=\"light\" class=\"ion-padding\">\r\n\r\n  <ion-item lines=\"none\" class=\"info ion-margin-bottom\" >\r\n    <ion-avatar slot=\"start\" class=\"avatar\">\r\n      <img style=\"width: 100%;height: 100%;\" [src]=\"product?.hinh | displayAvatar\" title=\"{{product.ten_Vt}}\">\r\n    </ion-avatar>\r\n    <ion-label class=\"ion-no-padding\">\r\n      <h4 class=\"ion-text-wrap ion-text-bold\">{{product.ten_Vt}}</h4>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list lines=\"none\" class=\"products-detail ion-margin-top\">\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text text-left class=\"asp-color-medium title\">Nhóm vật tư</ion-text>\r\n        <ion-text class=\"body ion-float-right\">({{product.ma_Nh_Vt}}) {{product.ten_Nh_Vt}}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text class=\"asp-color-medium title ion-text-left\">Mã vật tư</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{product.ma_Vt}}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text text-left class=\"asp-color-medium title\">Mã sản phẩm</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{product.ma_Sp}}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text text-left class=\"asp-color-medium title\">Đơn vị tính</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{product.dvt}}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text text-left class=\"asp-color-medium title\">Tồn cuối</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{product.ton_Cuoi}}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 76097:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/products/checking-info/checking.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/components/inventory/list\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" [routerLink]=\"['/components/product']\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Kiểm tra thông tin sản phẩm</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen color=\"light\" class=\"ion-padding\">\r\n    <div >\r\n      <ion-list *ngIf=\"model; else null \">\r\n        <ion-item lines=\"none\" class=\"info ion-margin-bottom\" >\r\n          <ion-avatar slot=\"start\" class=\"avatar\">\r\n            <img style=\"width: 100%;height: 100%;\" [src]=\"model.hinh | displayAvatar\"\r\n              title=\"{{model.ten_Vt}}\">\r\n          </ion-avatar>\r\n          <ion-label class=\"ion-no-padding\">\r\n            <h4 class=\"ion-text-wrap ion-text-bold\">{{model.ten_Vt}}</h4>\r\n          </ion-label>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Mã vật tư</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.ma_Vt}}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Nhóm vật tư</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.ma_Nh_Vt}}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Tên nhóm vật tư</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.ten_Nh_Vt}}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Mã Lô</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.ma_Lo}}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Mã Kho</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.ma_Kho}}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Số lượng tồn</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.so_Luong | number}}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Hạn sử dụng</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.han_Sd | formatDate }}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        \r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"asp-color-medium title\">Ngày sản xuất</ion-text>\r\n            <ion-text class=\"body ion-float-right\">{{model.ngay_Sx | formatDate}}</ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n  \r\n      </ion-list>\r\n    </div>\r\n    <!-- <ng-template #nodata>\r\n      <div class=\"hinhanh\">\r\n        <img src=\"/assets/images/nodata.png\" alt=\"logo\" >\r\n      </div>\r\n  </ng-template> -->\r\n</ion-content>\r\n\r\n<ion-footer color=\"bgcolor\" class=\"bg-footer ion-no-border\">\r\n  <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n    <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n      <ion-button mat-icon-button class=\"scaner-button\"  aria-label=\"Product Scaner\" (click)=\"startScan()\" expand=\"block\" size=\"default\" color=\"asp\" [disabled]=\"submitting\">\r\n        <span>Scan Now</span>\r\n        <ion-spinner slot=\"start\" size=\"default\" *ngIf=\"submitting\"></ion-spinner>\r\n        <!-- <ion-icon name=\"checkmark-done-sharp\" slot=\"start\" size=\"default\" *ngIf=\"!submitting\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-footer>");

/***/ }),

/***/ 75265:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/products/product.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/tabs/home\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/tabs/home\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Quản lý sản phẩm\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-list class=\"mt-16\">\r\n    <ion-item *ngFor=\"let nav of navs\" [detail]=\"true\" [routerLink]=\"[nav.routerLink]\">\r\n      <ion-icon slot=\"start\" [ios]=\"nav.icon.name+'-outline'\" [md]=\"nav.icon.name+'-sharp'\" [color]=\"nav.icon.color\"></ion-icon>\r\n      <ion-label>{{nav.title}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_products_product_module_ts.js.map