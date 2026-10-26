"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_report-info_report-info_module_ts"],{

/***/ 42114:
/*!*****************************************************************************!*\
  !*** ./src/app/components/report-info/filters/filters-modal.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXJzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 32596:
/*!*******************************************************************!*\
  !*** ./src/app/components/report-info/list-report.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 824:
/*!*******************************************************************!*\
  !*** ./src/app/components/report-info/report-info.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".bold {\n  font-weight: normal;\n}\n\n.displayNumber {\n  text-align: right;\n}\n\n.displayNumber .negative {\n  color: red;\n}\n\n.example-container {\n  height: 100%;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntd.mat-column-star {\n  text-align: center;\n  padding-right: 8px;\n}\n\nth.mat-header-cell:first-of-type,\ntd.mat-cell:first-of-type {\n  text-align: center;\n  padding: unset;\n}\n\nth.mat-header-cell:last-of-type,\ntd.mat-cell:last-of-type {\n  text-align: center;\n  padding: unset;\n}\n\nth.mat-header-cell,\ntd.mat-cell {\n  padding-right: 8px !important;\n  padding-left: 8px !important;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n\nth.mat-header-cell {\n  color: black;\n  text-align: center;\n  border: 1px solid darkgrey;\n}\n\ntd.mat-cell,\ntd.mat-footer-cell {\n  text-align: center;\n  border: 1px solid darkgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFDSSxVQUFBO0FBR1I7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBOztFQUVJLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBOztFQUVJLGtCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBOztFQUVJLDZCQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTs7RUFFSSxrQkFBQTtFQUNBLDBCQUFBO0FBQUoiLCJmaWxlIjoicmVwb3J0LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmRpc3BsYXlOdW1iZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5uZWdhdGl2ZXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQubWF0LWNvbHVtbi1zdGFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsXHJcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogdW5zZXQ7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSxcclxudGQubWF0LWNlbGw6bGFzdC1vZi10eXBlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IHVuc2V0O1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwsXHJcbnRkLm1hdC1jZWxsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tYXQtdGFibGUtc3RpY2t5OmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG5cclxudGQubWF0LWNlbGwsXHJcbnRkLm1hdC1mb290ZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 47268:
/*!***************************************************************************!*\
  !*** ./src/app/components/report-info/filters/filters-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersModalComponent": () => (/* binding */ FiltersModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_filters_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./filters-modal.component.html */ 33300);
/* harmony import */ var _filters_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters-modal.component.scss */ 42114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var src_app_layout_list_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/layout/list-modal.component */ 57532);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ 40688);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);













let FiltersModalComponent = class FiltersModalComponent {
    constructor(sqlService, modalController, navParams, _utilityService, statusType, sourceType, LoadingCtrl, changeDetectorRef) {
        this.sqlService = sqlService;
        this.modalController = modalController;
        this.navParams = navParams;
        this._utilityService = _utilityService;
        this.statusType = statusType;
        this.sourceType = sourceType;
        this.LoadingCtrl = LoadingCtrl;
        this.changeDetectorRef = changeDetectorRef;
        this.objectKeys = Object.keys;
        this.filterModel = new _models__WEBPACK_IMPORTED_MODULE_7__.ReportFilter();
        this.dteNgay_Ct = moment__WEBPACK_IMPORTED_MODULE_9__().startOf("month").format("YYYY-MM-DD");
        this.dteNgay_Ct1 = moment__WEBPACK_IMPORTED_MODULE_9__().startOf("month");
        this.dteNgay_Ct2 = moment__WEBPACK_IMPORTED_MODULE_9__();
        this.today = new Date();
    }
    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
    }
    dateChange() {
        if (!this._utilityService.hasValue(this.dteNgay_Ct2))
            return;
        this.filterModel.startDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.dteNgay_Ct1).format("YYYY-MM-DD");
        this.filterModel.endDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.dteNgay_Ct2).format("YYYY-MM-DD");
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.filterModel = this.navParams.get("filterModel");
            this.formlayout = this.navParams.get("formlayout");
            this.listFormLayout = this.navParams.get("listFormLayout");
            this.get_List();
            this.initSource();
            this.initStatus();
            this.filterModel.ngay_Ct = this.dteNgay_Ct;
            this.filterModel.endDate = this.dteNgay_Ct2;
            this.filterModel.startDate = this.dteNgay_Ct1;
            this.showdefault_Value();
        }, 20);
    }
    showdefault_Value() {
        // _.forEach(this.listFormLayout, (o) => {
        //   switch (o.column_ID) {
        //     case "KIEU_NH": 
        //       this.filterModel.kieu_nh = o.default_Value;
        //       this.listKieu_Nh = this.listKieu_Nh? this.listKieu_Nh: o.default_Value_Name.split(",");
        //       break;
        //     case "KIEU_TH": 
        //       this.filterModel.kieu_th = o.default_Value;
        //       this.listKieu_Th = this.listKieu_Th
        //         ? this.listKieu_Th
        //         : o.default_Value_Name.split(",");
        //       break;
        //     case "TRANG_THAI": 
        //       this.filterModel.trang_Thai = o.default_Value;
        //       this.listTrang_Thai = this.listTrang_Thai
        //         ? this.listTrang_Thai
        //         : o.default_Value_Name.split(",");
        //       break;
        //   }
        // });
    }
    ionViewDidEnter() { }
    changeSource(source) {
        if (source.selected == true) {
            source.selected = false;
        }
        else {
            source.selected = true;
        }
    }
    removeChip(entry, type) {
        let idx = -1;
        switch (type) {
            case "area":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.areas, { value: entry.value });
                if (idx > -1)
                    this.filterModel.areas.splice(idx, 1);
                break;
            case "dept":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.depts, { value: entry.value });
                if (idx > -1)
                    this.filterModel.depts.splice(idx, 1);
                break;
            case "emp":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.emps, { value: entry.value });
                if (idx > -1)
                    this.filterModel.emps.splice(idx, 1);
                break;
            case "warehouses":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.warehouses, { value: entry.value });
                if (idx > -1)
                    this.filterModel.warehouses.splice(idx, 1);
                break;
            case "products":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.products, { value: entry.value });
                if (idx > -1)
                    this.filterModel.products.splice(idx, 1);
                break;
            case "groupsproduct":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.groupsproduct, {
                    value: entry.value,
                });
                if (idx > -1)
                    this.filterModel.groupsproduct.splice(idx, 1);
                break;
            case "cont":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.cont, { value: entry.value });
                if (idx > -1)
                    this.filterModel.cont.splice(idx, 1);
                break;
            case "kien":
                idx = lodash__WEBPACK_IMPORTED_MODULE_8__.findIndex(this.filterModel.kien, { value: entry.value });
                if (idx > -1)
                    this.filterModel.kien.splice(idx, 1);
                break;
        }
    }
    openModalFilter(columnId = "", keyFilter = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_layout_list_modal_component__WEBPACK_IMPORTED_MODULE_6__.ListModalComponent,
                componentProps: {
                    columnId: columnId,
                    keyFilter: keyFilter,
                },
            });
            modal.onDidDismiss().then((dataReturned) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                if (dataReturned.data != null) {
                    if (columnId == "ma_Kho") {
                        this.filterModel.warehouses = (_a = dataReturned.data) === null || _a === void 0 ? void 0 : _a.columnID;
                        this.filterModel.warehousesname = (_b = dataReturned.data) === null || _b === void 0 ? void 0 : _b.columnName;
                    }
                    if (columnId == "ma_Nh_Vt") {
                        this.filterModel.groupsproduct = (_c = dataReturned.data) === null || _c === void 0 ? void 0 : _c.columnID;
                        this.filterModel.groupsproductname = (_d = dataReturned.data) === null || _d === void 0 ? void 0 : _d.columnName;
                    }
                    if (columnId == "ma_Vt") {
                        (this.filterModel.products = (_e = dataReturned.data) === null || _e === void 0 ? void 0 : _e.columnID),
                            (this.filterModel.productsname = (_f = dataReturned.data) === null || _f === void 0 ? void 0 : _f.columnName);
                    }
                    if (columnId == "ma_Dt") {
                        (this.filterModel.customer = (_g = dataReturned.data) === null || _g === void 0 ? void 0 : _g.columnID),
                            (this.filterModel.customername = (_h = dataReturned.data) === null || _h === void 0 ? void 0 : _h.columnName);
                    }
                    if (columnId == "ma_Bp") {
                        (this.filterModel.depts = (_j = dataReturned.data) === null || _j === void 0 ? void 0 : _j.columnID),
                            (this.filterModel.deptsname = (_k = dataReturned.data) === null || _k === void 0 ? void 0 : _k.columnName);
                    }
                    if (columnId == "ma_CbNv") {
                        (this.filterModel.emps = (_l = dataReturned.data) === null || _l === void 0 ? void 0 : _l.columnID),
                            (this.filterModel.empsname = (_m = dataReturned.data) === null || _m === void 0 ? void 0 : _m.columnName);
                    }
                    if (columnId == "so_Ct_SO")
                        this.filterModel.so_Ct_SO = (_o = dataReturned.data) === null || _o === void 0 ? void 0 : _o.columnID;
                    if (columnId == "so_Ct_KHSX")
                        this.filterModel.so_Ct_KHSX = (_p = dataReturned.data) === null || _p === void 0 ? void 0 : _p.columnID;
                    if (columnId == "so_Ct_LSX")
                        this.filterModel.so_Ct_LSX = (_q = dataReturned.data) === null || _q === void 0 ? void 0 : _q.columnID;
                }
            });
            return yield modal.present();
        });
    }
    closeModal(ok) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (ok) {
                this.filterModel.sources = new _models__WEBPACK_IMPORTED_MODULE_7__.SourceModel({
                    mobile: lodash__WEBPACK_IMPORTED_MODULE_8__.find(this.sources, { id: this.sourceType.MOBILE }).selected,
                    windown: lodash__WEBPACK_IMPORTED_MODULE_8__.find(this.sources, { id: this.sourceType.WINDOWN }).selected,
                });
                this.filterModel.status = new _models__WEBPACK_IMPORTED_MODULE_7__.StatusModel({
                    approved: lodash__WEBPACK_IMPORTED_MODULE_8__.find(this.status, { id: this.statusType.APPROVED }).checked,
                    returned: lodash__WEBPACK_IMPORTED_MODULE_8__.find(this.status, { id: this.statusType.RETURNED }).checked,
                });
                const dataReturned = {
                    filter: true,
                    model: this.filterModel,
                };
                this.LoadingCtrl.create({
                    message: "Đang tải",
                }).then((overlay) => {
                    this.loading = overlay;
                    this.loading.present();
                });
                setTimeout(() => {
                    this.loading.dismiss();
                    this.modalController.dismiss(dataReturned);
                }, 3000);
            }
            else {
                yield this.modalController.dismiss(null);
            }
        });
    }
    removeFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    initStatus() {
        this.status = [
            {
                id: this.statusType.APPROVED,
                title: "Đã xuất bill",
                color: "asp",
                checked: this.filterModel.status.approved,
            },
            //{ id: '2', title: 'Chưa xuất bill', checked: false, color: 'warning' },
            {
                id: this.statusType.RETURNED,
                title: "Đã trả bill",
                color: "danger",
                checked: this.filterModel.status.returned,
            },
        ];
    }
    initSource() {
        this.sources = [
            {
                id: this.sourceType.MOBILE,
                title: "Điện thoại",
                icon: "phone-portrait-outline",
                selected: this.filterModel.sources.mobile,
            },
            {
                id: this.sourceType.WINDOWN,
                title: "Phần mềm",
                icon: "desktop-outline",
                selected: this.filterModel.sources.windown,
            },
        ];
    }
    get_List() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__.ApiParameter();
            apiParams.strSQLExec = "SELECT * FROM L81DMKHO ; SELECT * FROM L81DMVTNH";
            apiParams.cmdType = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.CommandType.Text;
            const res = yield this.sqlService.ExecuteReturnDs(apiParams);
            this.inventories = res.table;
            this.groupproducts = res.table1;
        });
    }
};
FiltersModalComponent.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.SQLExecService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams },
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Inject, args: ["STATUS_TYPE",] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Inject, args: ["SOURCE_TYPE",] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef }
];
FiltersModalComponent.propDecorators = {
    chon_ngay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["chon_ngay",] }],
    ngay_ct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["ngay_ct",] }],
    area: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["area",] }],
    dept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["dept",] }],
    employees: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["employees",] }],
    customer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["customer",] }],
    warehouse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["warehouse",] }],
    groupsproduct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["groupsproduct",] }],
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["products",] }],
    cont: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["cont",] }],
    kien: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["kien",] }],
    kieu_nh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["kieu_nh",] }],
    so_Ct_SO: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["so_Ct_SO",] }],
    so_Ct_LSX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["so_Ct_LSX",] }],
    trang_Thai: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["trang_Thai",] }],
    filterModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    formlayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }],
    listFormLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
};
FiltersModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-filters-modal",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_filters_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: "STATUS_TYPE",
                useValue: {
                    APPROVED: "approved",
                    RETURNED: "returned",
                },
            },
            {
                provide: "SOURCE_TYPE",
                useValue: {
                    MOBILE: "mobile",
                    WINDOWN: "windown",
                },
            },
        ],
        styles: [_filters_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FiltersModalComponent);

// {
//   uctngay: false,
//   ngay_ct: false,
//   area: false,
//   dept: false,
//   customer: false,
//   employees: false,
//   warehouse: false,
//   groupsproduct: false,
//   products: false,
//   cont: false,
//   kien: false,
//   kieu_nhom: false,
//   so_Ct_SO: false,
//   so_Ct_KHSX: false,
//   so_Ct_LSX: false,
//   trang_Thai: false,
// };


/***/ }),

/***/ 21819:
/*!*****************************************************************!*\
  !*** ./src/app/components/report-info/list-report.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListReportComponent": () => (/* binding */ ListReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_report_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list-report.component.html */ 23621);
/* harmony import */ var _list_report_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-report.component.scss */ 32596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _core_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/report.service */ 17866);








let ListReportComponent = class ListReportComponent {
    constructor(identityService, reportService, route, router) {
        this.identityService = identityService;
        this.reportService = reportService;
        this.route = route;
        this.router = router;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__.ApiParameter();
        this.navs = [];
        this.report_Id = this.route.snapshot.params.report_Id;
        this.strTitle = this.route.snapshot.queryParamMap.get('strTitle');
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
            const res = yield this.reportService.GetReport(this.report_Id, sw);
            this.navs = res || [];
        });
    }
    gotoReport(nav) {
        const routeLink = nav.routerLink + (nav.report_Id ? `/${nav.report_Id.split(",").join("/")}` : "");
        this.router.navigate([routeLink], { queryParams: { strTitle: nav.title, report_Parent: this.report_Id } });
    }
};
ListReportComponent.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.IdentityService },
    { type: _core_services_report_service__WEBPACK_IMPORTED_MODULE_4__.ReportService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ListReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-list-report",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_report_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_report_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListReportComponent);



/***/ }),

/***/ 56584:
/*!*****************************************************************!*\
  !*** ./src/app/components/report-info/report-info.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportInfoComponent": () => (/* binding */ ReportInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report-info.component.html */ 21330);
/* harmony import */ var _report_info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-info.component.scss */ 824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models */ 40688);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var _filters_filters_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/filters-modal.component */ 47268);
/* harmony import */ var _core_services_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/report.service */ 17866);



/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */












let ReportInfoComponent = class ReportInfoComponent {
    constructor(modalController, identityService, utilityService, route, reportService, router) {
        this.modalController = modalController;
        this.identityService = identityService;
        this.utilityService = utilityService;
        this.route = route;
        this.reportService = reportService;
        this.router = router;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__.ApiParameter();
        this.loading = true;
        this.filterModel = new src_app_models__WEBPACK_IMPORTED_MODULE_4__.ReportFilter();
        this._formlayout = new src_app_models__WEBPACK_IMPORTED_MODULE_4__.LayoutReport();
        this.list_Columns = [];
        this.listFormLayout = [];
        this.dteNgay_Ct1 = moment__WEBPACK_IMPORTED_MODULE_3__().startOf("month").format("YYYY-MM-DD");
        this.dteNgay_Ct2 = moment__WEBPACK_IMPORTED_MODULE_3__().format("YYYY-MM-DD");
        this.report_Id = this.route.snapshot.params.report_Id;
        this.strTitle = this.route.snapshot.queryParamMap.get("strTitle");
        this.report_Parent = this.route.snapshot.queryParamMap.get("report_Parent");
    }
    ngOnInit() {
        this.filterModel.startDate = this.dteNgay_Ct1;
        this.filterModel.endDate = this.dteNgay_Ct2;
        setTimeout(() => {
            this.getColumn(this.report_Id).finally(() => this.openModalFilter());
        }, 20);
    }
    //get report
    getColumn(Report_ID = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.reportService
                .GetColumnReport(Report_ID)
                .finally(() => (this.loading = false));
            this.reportInfo = res.table;
            this.list_Columns = res.table1;
            this.listFormLayout = res.table2;
            this.showControlFilter();
        });
    }
    showControlFilter() {
        lodash__WEBPACK_IMPORTED_MODULE_2__.forEach(this.listFormLayout, (o) => {
            switch (o.column_ID) {
                case "CHON_NGAY":
                    this._formlayout.chon_ngay = true;
                    break;
                case "NGAY_CT":
                    this._formlayout.ngay_ct = true;
                    break;
                case "MA_KV":
                    this._formlayout.area = true;
                    break;
                case "MA_DT":
                    this._formlayout.customer = true;
                    break;
                case "MA_CBNV":
                    this._formlayout.employees = true;
                    break;
                case "MA_BP":
                    this._formlayout.dept = true;
                    break;
                case "MA_KHO":
                    this._formlayout.warehouse = true;
                    break;
                case "MA_NH_VT":
                    this._formlayout.groupsproduct = true;
                    break;
                case "MA_VT":
                    this._formlayout.products = true;
                    break;
                case "KIEU_NH":
                    this._formlayout.kieu_nh = true;
                    break;
                case "KIEU_TH":
                    this._formlayout.kieu_th = true;
                    break;
                case "SO_CT_SO":
                    this._formlayout.so_Ct_SO = true;
                    break;
                case "SO_CTKHSX":
                    this._formlayout.so_Ct_KHSX = true;
                    break;
                case "SO_CT_LSX":
                    this._formlayout.so_Ct_LSX = true;
                    break;
                case "TRANG_THAI":
                    this._formlayout.trang_Thai = true;
                    break;
            }
        });
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const item = {
                report_Id: this.report_Id,
                NGAY_CT1: this.filterModel.startDate
                    ? new Date(this.filterModel.startDate).toISOString()
                    : this.filterModel.startDate,
                NGAY_CT2: this.filterModel.endDate
                    ? new Date(this.filterModel.endDate).toISOString()
                    : this.filterModel.endDate,
                NGAY_CT: this.filterModel.ngay_Ct
                    ? new Date(this.filterModel.ngay_Ct).toISOString()
                    : this.filterModel.ngay_Ct,
                MA_KHO: this.filterModel.warehouses
                    ? this.filterModel.warehouses
                    : "",
                MA_NH_VT: this.filterModel.groupsproduct
                    ? this.filterModel.groupsproduct
                    : "",
                MA_VT: this.filterModel.products ? this.filterModel.products : "",
                MA_KV: this.filterModel.areas ? this.filterModel.areas : "",
                MA_DT: this.filterModel.customer ? this.filterModel.customer : "",
                MA_CBNV: this.filterModel.emps ? this.filterModel.emps : "",
                MA_BP: this.filterModel.depts ? this.filterModel.depts : "",
                KIEU_NH: this.filterModel.kieu_nh ? this.filterModel.kieu_nh.trim() : "",
                KIEU_TH: this.filterModel.kieu_th ? this.filterModel.kieu_th.trim() : "",
                TRANG_THAI: this.filterModel.trang_Thai ? this.filterModel.trang_Thai.trim() : "",
                SO_CT_SO: this.filterModel.so_Ct_SO ? this.filterModel.so_Ct_SO : "",
                SO_CT_KHSX: this.filterModel.so_Ct_KHSX ? this.filterModel.so_Ct_KHSX : "",
                so_Ct_LSX: this.filterModel.so_Ct_LSX ? this.filterModel.so_Ct_LSX : "",
                MA_DVCS: this.identityService.getStrCurrentMaDvCs(),
            };
            const res = yield this.reportService.GetData(item).finally(() => (this.loading = false));
            const keyUpperData = res === null || res === void 0 ? void 0 : res.map((obj) => lodash__WEBPACK_IMPORTED_MODULE_2__.mapKeys(obj, (v, k) => k));
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(keyUpperData);
        });
    }
    openModalFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _filters_filters_modal_component__WEBPACK_IMPORTED_MODULE_8__.FiltersModalComponent,
                componentProps: {
                    filterModel: this.filterModel,
                    formlayout: this._formlayout,
                    listFormLayout: this.listFormLayout,
                },
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                const data = dataReturned.data;
                if (data && data.filter) {
                    this.filterModel = Object.assign(data.model, {
                        keyword: this.filterModel.keyword,
                        top: this.filterModel.top,
                    });
                    yield this.getData().finally();
                }
            }));
            return yield modal.present();
        });
    }
    splitModel(_object) {
        let _values = "";
        if (_object && _object.length > 0) {
            _object.forEach((element) => {
                if (_values == "")
                    _values = element.value;
                else
                    _values = _values + "," + element.value;
            });
        }
        return _values;
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    gotoListReport() {
        const routeLink = "/components/report-info/list" +
            (this.report_Parent ? `/${this.report_Parent.split(",").join("/")}` : "");
        this.router.navigate([routeLink], {
            queryParams: { strTitle: this.strTitle },
        });
    }
};
ReportInfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__.IdentityService },
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_7__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _core_services_report_service__WEBPACK_IMPORTED_MODULE_9__.ReportService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router }
];
ReportInfoComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInfiniteScroll,] }]
};
ReportInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: "app-report-info",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_info_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_info_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportInfoComponent);



/***/ }),

/***/ 99634:
/*!**************************************************************!*\
  !*** ./src/app/components/report-info/report-info.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportInfoModule": () => (/* binding */ ReportInfoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _list_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-report.component */ 21819);
/* harmony import */ var _report_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-info.component */ 56584);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 55544);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.module */ 36852);
/* harmony import */ var _filters_filters_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/filters-modal.component */ 47268);









const routing = _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
    {
        path: "list/:report_Id",
        component: _list_report_component__WEBPACK_IMPORTED_MODULE_0__.ListReportComponent
    },
    {
        path: "info/:report_Id",
        component: _report_info_component__WEBPACK_IMPORTED_MODULE_1__.ReportInfoComponent
    },
]);
let ReportInfoModule = class ReportInfoModule {
};
ReportInfoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_report_info_component__WEBPACK_IMPORTED_MODULE_1__.ReportInfoComponent, _list_report_component__WEBPACK_IMPORTED_MODULE_0__.ListReportComponent, _filters_filters_modal_component__WEBPACK_IMPORTED_MODULE_5__.FiltersModalComponent],
        imports: [
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _base_base_module__WEBPACK_IMPORTED_MODULE_4__.BaseModule,
            routing,
        ],
        providers: [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.DataToolService, src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.SQLExecService],
    })
], ReportInfoModule);



/***/ }),

/***/ 33300:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/report-info/filters/filters-modal.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"removeFilter()\" fill=\"clear\">\r\n        Bỏ lọc\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Lọc</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"closeModal(false)\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  \r\n\r\n  <ng-container *ngFor=\"let part of objectKeys(formlayout);\">\r\n    <ng-container *ngIf=\"formlayout[part]\">\r\n      <ng-container [ngTemplateOutlet]=\"this[part]\"></ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n <ng-template #chon_ngay>\r\n    <!-- <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Chọn ngày</mat-label>\r\n        <mat-date-range-input [max]=\"today\" [rangePicker]=\"picker\" (click)=\"picker.open()\">\r\n          <input matStartDate required name=\"ngay_Ct1\" [(ngModel)]=\"dteNgay_Ct1\" placeholder=\"Từ ngày\"\r\n            (focus)=\"picker.open()\">\r\n          <input matEndDate required name=\"ngay_Ct2\" (dateChange)=\"dateChange()\" [(ngModel)]=\"dteNgay_Ct2\"\r\n            placeholder=\"Đến ngày\" (focus)=\"picker.open()\">\r\n        </mat-date-range-input>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-date-range-picker touchUi #picker></mat-date-range-picker>\r\n      </mat-form-field>\r\n    </ion-col> -->\r\n    <asp-date-filter [classList]=\"['mat-elevation-z']\" [(fromDate)]=\"this.filterModel.startDate\"\r\n    [(toDate)]=\"this.filterModel.endDate\"></asp-date-filter>\r\n  </ng-template>\r\n \r\n  <ng-template #ngay_ct>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Ngày chứng từ</mat-label>\r\n        <input matInput name=\"ngay_ct\" [max]=\"today\" [(ngModel)]=\"dteNgay_Ct\" [matDatepicker]=\"picker\"\r\n          (focus)=\"picker.open()\" />\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker touchUi color=\"primary\"></mat-datepicker>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #customer>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Tên đối tượng</mat-label>\r\n        <input matInput name=\"ma_Dt\" autocomplete=\"off\" (focus)=\"openModalFilter('ma_Dt')\"\r\n          [(ngModel)]=\"filterModel.customer\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.customer\" mat-icon-button\r\n          matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-hint align=\"end\">{{filterModel.customername}}</mat-hint>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #warehouse>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Tên kho</mat-label>\r\n        <input matInput name=\"ma_Kho\" autocomplete=\"off\" (focus)=\"openModalFilter('ma_Kho')\"\r\n          [(ngModel)]=\"filterModel.warehouses\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.warehouses\" mat-icon-button\r\n          matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-hint align=\"end\">{{filterModel.warehousesname}}</mat-hint>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #groupsproduct>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Tên nhóm vật tư</mat-label>\r\n        <input matInput name=\"ma_Nh_Vt\" autocomplete=\"off\" (focus)=\"openModalFilter('ma_Nh_Vt')\"\r\n          [(ngModel)]=\"filterModel.groupsproduct\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.groupsproduct\" mat-icon-button\r\n          matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-hint align=\"end\">{{filterModel.groupsproductname}}</mat-hint>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #products>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Tên vật tư</mat-label>\r\n        <input matInput name=\"ma_Vt\" autocomplete=\"off\" (focus)=\"openModalFilter('ma_Vt')\"\r\n          [(ngModel)]=\"filterModel.products\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.products\" mat-icon-button\r\n          matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-hint align=\"end\">{{filterModel.productsname}}</mat-hint>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n  \r\n  <ng-template #cont>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Mã lô</mat-label>\r\n        <input matInput name=\"ma_Lo\" autocomplete=\"off\" (focus)=\"openModalFilter('ma_Lo')\"\r\n          [(ngModel)]=\"filterModel.cont\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.cont\" mat-icon-button matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #kieu_nh>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Kiểu nhóm</mat-label>\r\n        <mat-select name=\"kieu_nh\" [(ngModel)]=\"filterModel.kieu_nh\">\r\n          <mat-option *ngFor=\"let op of listKieu_Nh\" [value]=\"op\">\r\n            {{ op }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #kieu_th>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Kiểu nhóm</mat-label>\r\n        <mat-select name=\"kieu_th\" [(ngModel)]=\"filterModel.kieu_nh\">\r\n          <mat-option *ngFor=\"let op of listKieu_Th\" [value]=\"op\">\r\n            {{ op }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #so_Ct_SO>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Số chứng từ SO</mat-label>\r\n        <input matInput name=\"so_Ct_SO\" autocomplete=\"off\" (focus)=\"openModalFilter('so_Ct_SO')\"\r\n          [(ngModel)]=\"filterModel.so_Ct_SO\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.so_Ct_SO\" mat-icon-button matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #so_Ct_LSX>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Số chứng từ LSX</mat-label>\r\n        <input matInput name=\"so_Ct_LSX\" autocomplete=\"off\" (focus)=\"openModalFilter('so_Ct_LSX')\"\r\n          [(ngModel)]=\"filterModel.so_Ct_LSX\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.so_Ct_LSX\" mat-icon-button matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #trang_Thai>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Trạng thái</mat-label>\r\n        <mat-select name=\"trang_Thai\" [(ngModel)]=\"filterModel.trang_Thai\">\r\n          <mat-option *ngFor=\"let op of listTrang_Thai\" [value]=\"op\">\r\n            {{ op }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #dept>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Mã bộ phận</mat-label>\r\n        <input matInput name=\"ma_Bp\" autocomplete=\"off\" (focus)=\"openModalFilter('ma_Bp')\"\r\n          [(ngModel)]=\"filterModel.depts\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.depts\" mat-icon-button\r\n          matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-hint align=\"end\">{{filterModel.deptsname}}</mat-hint>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n  <ng-template #emp>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Mã nhân viên</mat-label>\r\n        <input matInput name=\"ma_CbNv\" autocomplete=\"off\" (focus)=\"openModalFilter('ma_CbNv')\"\r\n          [(ngModel)]=\"filterModel.emps\" />\r\n        <button style=\"font-size: 18px;\"  *ngIf=\"filterModel.emps\" mat-icon-button\r\n          matSuffix>\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-hint align=\"end\">{{filterModel.empsname}}</mat-hint>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-template>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"bg-footer ion-padding ion-no-border\">\r\n  <ion-button (click)=\"closeModal(true)\" expand=\"block\" size=\"default\" color=\"asp\">Đồng ý\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ 23621:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/report-info/list-report.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/tabs/report\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"ion-text-center\">\r\n      {{strTitle}}\r\n    </ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-list class=\"mt-16\">\r\n    <ion-item *ngFor=\"let nav of navs\" [detail]=\"true\" (click)=\"gotoReport(nav)\">\r\n      <ion-icon class=\"icon\" [ios]=\"nav.iconName+ '-outline'\" [md]=\"nav.iconName+'-sharp'\" color=\"asp\"></ion-icon>\r\n      <ion-label class=\"ml-5\" > {{nav.title}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 21330:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/report-info/report-info.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\" (click)=\"gotoListReport()\">\r\n      <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">{{strTitle}}</ion-title>\r\n\r\n    <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button (click)=\"openModalFilter()\">\r\n        <ion-icon slot=\"icon-only\" name=\"filter-sharp\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <ng-container *ngIf=\"list_Columns && list_Columns.length > 0\">\r\n      <table mat-table [dataSource]=\"dataSource\">\r\n\r\n        <ng-container *ngFor=\"let col of list_Columns\">\r\n          <ng-container [matColumnDef]=\"col.column_ID\" [sticky]=\"col.column_ID == 'MA_VT'\">\r\n            <th mat-header-cell *matHeaderCellDef>{{col.description}}</th>\r\n            <td mat-cell style=\"white-space: nowrap; text-align: left;\" *matCellDef=\"let element\">\r\n              <span [ngSwitch]=\"col.type\" [ngStyle]=\"{'font-weight': (element.BOLD ==1? 'bold':'')}\">\r\n                <span *ngSwitchDefault>{{element[col.column_ID]}}</span>\r\n                <div *ngSwitchCase=\"'N'\" class=\"displayNumber\">\r\n                  <span [ngClass]=\"{'negative': element[col.column_ID] < 0}\"> {{element[col.column_ID] | number}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'D'\"> {{element[col.column_ID] | formatDate}}</div>\r\n              </span>\r\n\r\n            </td>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"list_Columns | displayColumns; sticky: true \"\r\n          style=\"background-color: #ffffff;\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: list_Columns | displayColumns;\"></tr>\r\n\r\n      </table>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_report-info_report-info_module_ts.js.map