"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_warehouse_warehouse_module_ts"],{

/***/ 4293:
/*!********************************************************************!*\
  !*** ./src/app/components/warehouse/product-detail.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label {\n  font-size: 11pt;\n}\nion-item .title {\n  font-size: 10pt;\n}\nion-item .body {\n  max-width: 70%;\n  text-align: right;\n  white-space: normal !important;\n}\n.info, .product-detail {\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFFSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBQVI7QUFHQTtFQUNJLGtCQUFBO0FBQUoiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG4gICAgLmJvZHl7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5pbmZvLC5wcm9kdWN0LWRldGFpbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 25310:
/*!***************************************************************!*\
  !*** ./src/app/components/warehouse/warehouse.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".basic-container {\n  padding: 20px;\n}\n\n::ng-deep td.mat-cell:first-of-type {\n  padding-left: 3px !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFLSTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGUiIsImZpbGUiOiJ3YXJlaG91c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn0gICJdfQ== */";

/***/ }),

/***/ 24859:
/*!******************************************************!*\
  !*** ./src/app/components/warehouse/models/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Params": () => (/* reexport safe */ _params__WEBPACK_IMPORTED_MODULE_0__.Params)
/* harmony export */ });
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params */ 74625);



/***/ }),

/***/ 74625:
/*!*******************************************************!*\
  !*** ./src/app/components/warehouse/models/params.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Params": () => (/* binding */ Params)
/* harmony export */ });
class Params {
    constructor() {
        this.top = 50;
        this.keyword = '';
        this.ma_Kho = '';
    }
}


/***/ }),

/***/ 74775:
/*!******************************************************************!*\
  !*** ./src/app/components/warehouse/product-detail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-detail.component.html */ 86471);
/* harmony import */ var _product_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component.scss */ 4293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ 81682);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ 24859);









let ProductDetailComponent = class ProductDetailComponent {
    constructor(_utilityService, route, router, IdentityService, warehouseService) {
        this._utilityService = _utilityService;
        this.route = route;
        this.router = router;
        this.IdentityService = IdentityService;
        this.warehouseService = warehouseService;
        this.ma_Kho = '';
        this.showSkeleton = true;
        this.param = new _models__WEBPACK_IMPORTED_MODULE_5__.Params();
        this.loading = true;
        this.ma_Kho = this.route.snapshot.params.ma_Kho;
    }
    ngOnInit() {
        setTimeout(() => {
            this.getProduct();
        });
    }
    getProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.param = {
                ma_Kho: this.ma_Kho
            };
            const res = yield this.warehouseService.getDmKhoDetail(this.param).finally(() => this.loading = false);
            if (res.length <= 0) {
                yield this._utilityService.showAlert("không tìm thấy chi tiết kho");
            }
            else {
                this.products = res;
            }
        });
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__.IdentityService },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__.WarehousesService }
];
ProductDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-product-detail',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductDetailComponent);



/***/ }),

/***/ 62666:
/*!*************************************************************!*\
  !*** ./src/app/components/warehouse/warehouse.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseComponent": () => (/* binding */ WarehouseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_warehouse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./warehouse.component.html */ 70596);
/* harmony import */ var _warehouse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse.component.scss */ 25310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tree */ 87909);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ 74634);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ 81682);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ 24859);











let WarehouseComponent = class WarehouseComponent {
    constructor(utilityService, route, cdRef, router, warehouseService) {
        this.utilityService = utilityService;
        this.route = route;
        this.cdRef = cdRef;
        this.router = router;
        this.warehouseService = warehouseService;
        this.store = Object.create(null);
        this.searchTerm = '';
        this.showSkeleton = true;
        this.top = 30;
        this.totalCount = 0;
        this.totalQuantity = 0;
        this.param = new _models__WEBPACK_IMPORTED_MODULE_5__.Params();
        this.reportsBL = [];
        this.loading = true;
        this.displayedColumns = ['name'];
        this.transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                value: node.value,
                level: level,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__.MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
        this.cdRef.detectChanges();
    }
    ionViewDidEnter() {
        this.getListKho();
    }
    getListKho() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // this.loading = true;
            // const filterParams = {
            //   keyword: this.searchTerm
            // }
            // const res= await this.warehouseService.getDmKho(filterParams).finally(() => this.loading = false);
            // this.dataSource.data = this.fillRecursive(res);
            // this.loading = false;
        });
    }
    fillRecursive(flatObjects) {
        // if (!flatObjects || flatObjects.length == 0) return [];
        // return _.filter(flatObjects, { ma_Kho_Cha: '' }).map(obj => {
        //   const result: TreeNode = {
        //     name: obj.ten_Kho_Cha,
        //     value: '',
        //     children: this.transformerTreeData(flatObjects, { ma_Kho_Cha: obj.ma_Kho }, 'ten_Kho_Cha')
        //   };
        //   return result;
        // });
    }
    transformerTreeData(flatObjects, filter, groupBy = '') {
        if (!flatObjects || flatObjects.length == 0)
            return [];
        const groupByData = lodash__WEBPACK_IMPORTED_MODULE_3__.chain(lodash__WEBPACK_IMPORTED_MODULE_3__.filter(flatObjects, filter))
            .groupBy(groupBy)
            .map((value, key) => ({ group_By: key, items: value }))
            .value();
        const result = lodash__WEBPACK_IMPORTED_MODULE_3__.map(groupByData, (obj) => {
            const node = {
                name: obj.group_By,
                value: '',
                children: lodash__WEBPACK_IMPORTED_MODULE_3__.map(obj.items, (item) => {
                    // const child: TreeNode = {
                    //   name: item.ma_Kho + " - " + item.ten_Kho,
                    //   value: '',
                    // };
                    return null;
                })
            };
            return node;
        });
        return result;
    }
    loadMoreData(event, refresh = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getListKho();
            event.target.complete();
        });
    }
    goToDetail(item) {
        if (!item)
            return;
        this.router.navigateByUrl('components/warehouse/product-detail/' + item.value);
    }
};
WarehouseComponent.ctorParameters = () => [
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__.WarehousesService }
];
WarehouseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-warehouse',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_warehouse_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_warehouse_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WarehouseComponent);



/***/ }),

/***/ 72929:
/*!**********************************************************!*\
  !*** ./src/app/components/warehouse/warehouse.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseModule": () => (/* binding */ WarehouseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 55544);
/* harmony import */ var _warehouse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse.component */ 62666);
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.component */ 74775);







const routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
    {
        path: 'list',
        component: _warehouse_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseComponent,
    },
    {
        path: 'product-detail/:ma_Kho',
        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent,
    }
]);
let WarehouseModule = class WarehouseModule {
};
WarehouseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_warehouse_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseComponent, _product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            routing
        ]
    })
], WarehouseModule);



/***/ }),

/***/ 86471:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/warehouse/product-detail.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/components/warehouse/list\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Chi tiết kho</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen color=\"light\" class=\"ion-padding\">\r\n\r\n  <ion-list lines=\"none\" class=\"products-detail ion-margin-top\" *ngFor=\"let item of products\">\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text class=\"asp-color-medium title ion-text-left\">Mã kho</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{item.ma_Kho}}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text text-left class=\"asp-color-medium title\">Tên kho</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{item.ten_Kho}}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text text-left class=\"asp-color-medium title\">Mã kho cha</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{item.ma_Kho_Cha }}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"ion-no-margin ion-no-padding\">\r\n        <ion-text text-left class=\"asp-color-medium title\">Tên kho cha</ion-text>\r\n        <ion-text class=\"body ion-float-right\">{{item.ten_Kho_Cha }}</ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n   \r\n\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 70596:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/warehouse/warehouse.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/tabs/home\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/tabs/home\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Danh sách kho</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" [scrollX]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadMoreData($event,true)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n      </ion-refresher>\r\n      <ng-container *ngIf=\"!loading; else elseTemplate\">\r\n\r\n        <ion-col size=\"12\">\r\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 w-100\">\r\n            <ng-container matColumnDef=\"name\">\r\n              <th mat-header-cell *matHeaderCellDef>\r\n                <span [style.paddingLeft.px]=\"24\">&nbsp;</span>\r\n              </th>\r\n              <td mat-cell *matCellDef=\"let data\" >\r\n                <button mat-icon-button [style.visibility]=\"!data.expandable ? 'hidden' : ''\"\r\n                  [style.marginLeft.px]=\"data.level * 8\" (click)=\"treeControl.toggle(data)\">\r\n                  <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                    {{treeControl.isExpanded(data) ? 'expand_more' : 'chevron_right'}}\r\n                  </mat-icon>\r\n                </button>\r\n                <span (click)=\"goToDetail(data)\">{{data.name}}</span>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n        </ion-col>\r\n      </ng-container>\r\n      <ng-template #elseTemplate>\r\n        <ion-col size=\"12\">\r\n          <asp-skeleton></asp-skeleton>\r\n        </ion-col>\r\n      </ng-template>\r\n\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_warehouse_warehouse_module_ts.js.map