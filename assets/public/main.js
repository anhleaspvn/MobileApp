(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_resolvers_asp_permisson_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/resolvers/asp-permisson.resolver */ 84762);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services */ 41614);






const routes = [
    {
        path: 'login',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.NoAuthService],
        resolve: {},
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/auth/auth.module */ 51233)).then(m => m.AuthModule)
    },
    // Chứng từ kho
    {
        path: 'components/voucher',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: { [src_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppConfig.PERM_RESOLVER_KEY]: src_app_shared_resolvers_asp_permisson_resolver__WEBPACK_IMPORTED_MODULE_1__.PermissionResolver },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_components_base_base_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_vouchers_voucher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/vouchers/voucher.module */ 16774)).then(m => m.VoucherModule),
    },
    // thông kê sản xuất
    {
        path: 'components/statistics',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: { [src_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppConfig.PERM_RESOLVER_KEY]: src_app_shared_resolvers_asp_permisson_resolver__WEBPACK_IMPORTED_MODULE_1__.PermissionResolver },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_components_base_base_module_ts"), __webpack_require__.e("src_app_components_statistics_statistics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/statistics/statistics.module */ 83504)).then(m => m.StatisticsModule),
    },
    // đặt hàng
    {
        path: 'components/order',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: { [src_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppConfig.PERM_RESOLVER_KEY]: src_app_shared_resolvers_asp_permisson_resolver__WEBPACK_IMPORTED_MODULE_1__.PermissionResolver },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_components_base_base_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_orders_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/orders/order.module */ 24459)).then(m => m.OrderModule),
    },
    {
        path: 'components/product',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: { [src_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppConfig.PERM_RESOLVER_KEY]: src_app_shared_resolvers_asp_permisson_resolver__WEBPACK_IMPORTED_MODULE_1__.PermissionResolver },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_components_base_base_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_products_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/products/product.module */ 40037)).then(m => m.ProductModule),
    },
    // Danh mục kho
    {
        path: 'components/warehouse',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: { [src_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppConfig.PERM_RESOLVER_KEY]: src_app_shared_resolvers_asp_permisson_resolver__WEBPACK_IMPORTED_MODULE_1__.PermissionResolver },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_warehouse_warehouse_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/warehouse/warehouse.module */ 72929)).then(m => m.WarehouseModule),
    },
    // Kiểm kê
    {
        path: 'components/inventory',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: { [src_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppConfig.PERM_RESOLVER_KEY]: src_app_shared_resolvers_asp_permisson_resolver__WEBPACK_IMPORTED_MODULE_1__.PermissionResolver },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_components_base_base_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/inventory/inventory.module */ 54417)).then(m => m.InventoryModule),
    },
    //tabs routing
    {
        path: 'reports',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: {},
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_tabpages_reports_report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/tabpages/reports/report.module */ 30042)).then(m => m.ReportModule),
    },
    {
        path: 'components/report-info',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: {},
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_components_base_base_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_report-info_report-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/report-info/report-info.module */ 99634)).then(m => m.ReportInfoModule),
    },
    {
        path: 'components/prodscanqrcode',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
        resolve: {},
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_components_base_base_module_ts"), __webpack_require__.e("src_app_components_prodscanqrcode_prodscanqrcode_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/prodscanqrcode/prodscanqrcode.module */ 13769)).then(m => m.ProdscanqrcodeModule),
    },
    {
        path: '',
        resolve: {},
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 18260);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/utility.service */ 76515);
/* harmony import */ var _shared_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/network.service */ 21410);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/status-bar */ 54515);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/splash-screen */ 27567);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/app */ 82225);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);



/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */












let AppComponent = class AppComponent {
    constructor(networkService, utilityService, alertController, platform, router, angularLocation) {
        this.networkService = networkService;
        this.utilityService = utilityService;
        this.alertController = alertController;
        this.platform = platform;
        this.router = router;
        this.angularLocation = angularLocation;
        this.hasStatusBar = true;
        this.initializeApp();
    }
    ionViewDidEnter() {
    }
    ionViewWillLeave() {
    }
    ngOnInit() {
    }
    initializeApp() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_6__.SplashScreen.hide();
            yield this.initStatusBar();
            this.listenConnection();
            (_a = this.platform.backButton) === null || _a === void 0 ? void 0 : _a.subscribeWithPriority(0, () => {
                var _a;
                if (!((_a = this.ionRouterOutlet) === null || _a === void 0 ? void 0 : _a.canGoBack())) {
                    this.presentAlertExitAppConfirm();
                }
                else {
                    if (this.router.url.indexOf('/tabs/home') > -1) {
                        this.presentAlertExitAppConfirm();
                    }
                    else {
                        this.angularLocation.back();
                    }
                }
            });
        });
    }
    initStatusBar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.isPluginAvailable('StatusBar')) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.getPlatform() === 'android') {
                    yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setBackgroundColor({
                        color: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseColor,
                    });
                }
                yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setStyle({
                    style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.Style.Dark
                });
            }
        });
    }
    listenConnection() {
        this.networkService
            .getNetworkStatus()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300))
            .subscribe((connected) => {
            this.isConnected = connected;
            console.log("[Home] isConnected", this.isConnected);
            if (!connected) {
                this.snackBar = this.utilityService.showSnackBar("Mất kết nối. Vui lòng kiểm tra lại kết nối mạng", {
                    duration: null,
                    verticalPosition: "top",
                });
                // this.utilityService.showAlert('Mất kết nối. Vui lòng kiểm tra lại kết nối mạng', {
                //   header: 'Thông báo'
                // });
            }
            else if (this.snackBar != null) {
                this.utilityService.hideSnackBar(this.snackBar);
                this.snackBar = null;
            }
        });
    }
    presentAlertExitAppConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Xác nhận',
                message: 'Bạn chắc chắn muốn đóng ứng dụng?',
                buttons: [
                    {
                        text: 'Không',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Đóng ứng dụng',
                        id: 'confirm-button',
                        handler: () => {
                            _capacitor_app__WEBPACK_IMPORTED_MODULE_7__.App.exitApp();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_network_service__WEBPACK_IMPORTED_MODULE_4__.NetworkService },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location }
];
AppComponent.propDecorators = {
    ionRouterOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRouterOutlet, { static: true },] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: "app-root",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aspGestureConfig": () => (/* binding */ aspGestureConfig),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 93950);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _shared_directives_app_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/directives/app-directive.module */ 18391);
/* harmony import */ var _shared_interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/interceptors */ 28956);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 67210);
/* harmony import */ var _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/speech-recognition/ngx */ 64811);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var _shared_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/network.service */ 21410);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services */ 41614);
/* harmony import */ var ionic_long_press__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ionic-long-press */ 41636);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 17202);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ 18260);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ 325);






















let aspGestureConfig = class aspGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.HammerGestureConfig {
    buildHammer(element) {
        const mc = new window.Hammer(element, {
            touchAction: "pan-y"
        });
        for (const eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    }
};
aspGestureConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)()
], aspGestureConfig);

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot({}),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__.IonicStorageModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            ionic_long_press__WEBPACK_IMPORTED_MODULE_18__.LongPressModule,
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _shared_directives_app_directive_module__WEBPACK_IMPORTED_MODULE_3__.AppDirectiveModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_19__.AgmCoreModule.forRoot({
                apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.mapApiKey
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ],
        providers: [
            _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_5__.Network,
            _shared_network_service__WEBPACK_IMPORTED_MODULE_8__.NetworkService,
            _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__.BarcodeScanner,
            _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_6__.SpeechRecognition,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS, useClass: _shared_interceptors__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS, useClass: _shared_interceptors__WEBPACK_IMPORTED_MODULE_4__.HttpErrorInterceptor, multi: true },
            _shared_services__WEBPACK_IMPORTED_MODULE_9__.StorageService,
            _shared_services__WEBPACK_IMPORTED_MODULE_9__.IdentityService,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.APP_INITIALIZER,
                useFactory: (identityS) => () => { return identityS.populate(); },
                deps: [_shared_services__WEBPACK_IMPORTED_MODULE_9__.IdentityService],
                multi: true
            },
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.HAMMER_GESTURE_CONFIG,
                useClass: aspGestureConfig
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 22058:
/*!***************************************!*\
  !*** ./src/app/helpers/app-config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig)
/* harmony export */ });
class AppConfig {
}
AppConfig.OBJ_ID_QUERY_KEY = "oid";
AppConfig.APP_FNS_RESOLVER_KEY = "afns";
AppConfig.PERM_RESOLVER_KEY = "perms";


/***/ }),

/***/ 29512:
/*!**********************************************!*\
  !*** ./src/app/helpers/command-type.enum.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandType": () => (/* binding */ CommandType)
/* harmony export */ });
var CommandType;
(function (CommandType) {
    CommandType["StoredProcedure"] = "StoredProcedure";
    CommandType["Text"] = "Text";
    CommandType["TableDirect"] = "TableDirect";
})(CommandType || (CommandType = {}));


/***/ }),

/***/ 69302:
/*!*********************************************!*\
  !*** ./src/app/helpers/common-constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonConstants": () => (/* binding */ CommonConstants)
/* harmony export */ });
const CommonConstants = {
    MA_CT: {
        NHAP_KHO: 'PN',
        XUAT_KHO: 'PX',
        DIEU_CHUYEN: 'DC'
    },
    STATUS_ENTRIES: [
        { value: '0,1', label: 'Tất cả' },
        { value: '1', label: 'Đã duyệt' },
        { value: '0', label: 'Chưa duyệt' },
    ],
    ROLES_ENTRIES: [
        { value: '1,2,3', label: 'Tất cả' },
        { value: '1', label: 'Quản lý' },
        { value: '2', label: 'Văn phòng' },
        { value: '3', label: 'Công nhân' }
    ]
};


/***/ }),

/***/ 52966:
/*!******************************************!*\
  !*** ./src/app/helpers/enu-edit.enum.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enuEdit": () => (/* binding */ enuEdit)
/* harmony export */ });
var enuEdit;
(function (enuEdit) {
    enuEdit[enuEdit["Copy"] = 67] = "Copy";
    enuEdit[enuEdit["Edit"] = 69] = "Edit";
    enuEdit[enuEdit["New"] = 78] = "New";
    enuEdit[enuEdit["Convert"] = 86] = "Convert";
})(enuEdit || (enuEdit = {}));


/***/ }),

/***/ 46885:
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandType": () => (/* reexport safe */ _command_type_enum__WEBPACK_IMPORTED_MODULE_0__.CommandType),
/* harmony export */   "enuEdit": () => (/* reexport safe */ _enu_edit_enum__WEBPACK_IMPORTED_MODULE_1__.enuEdit),
/* harmony export */   "CommonConstants": () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_2__.CommonConstants),
/* harmony export */   "AppConfig": () => (/* reexport safe */ _app_config__WEBPACK_IMPORTED_MODULE_4__.AppConfig)
/* harmony export */ });
/* harmony import */ var _command_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command-type.enum */ 29512);
/* harmony import */ var _enu_edit_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enu-edit.enum */ 52966);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-constants */ 69302);
/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-node */ 49048);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-config */ 22058);







/***/ }),

/***/ 49048:
/*!**************************************!*\
  !*** ./src/app/helpers/tree-node.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 93950:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS),
/* harmony export */   "DateTimeService": () => (/* binding */ DateTimeService),
/* harmony export */   "CustomDateAdapter": () => (/* binding */ CustomDateAdapter),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ 9379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 71232);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 85082);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ 21792);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tree */ 87909);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/tree */ 74634);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 71933);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 97435);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ 64579);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_cofigurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/cofigurations */ 23157);

































const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
let DateTimeService = class DateTimeService {
    getFormat() {
        return 'YYYY-MM-DD'; // add you own logic here
    }
    getLocale() {
        return 'vi'; // add you own logic here
    }
};
DateTimeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], DateTimeService);

let CustomDateAdapter = class CustomDateAdapter extends _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__.MomentDateAdapter {
    constructor(dateLocale) {
        super(dateLocale);
    }
    // public format(date: moment.Moment, displayFormat: string): string {
    //   // const locale = this._dateTimeService.getLocale();
    //   // const format = this._dateTimeService.getFormat();
    //   return date.locale('vi').format('YYYY-MM-DD');
    // }
    parse(value, parseFormat) {
        if (value && typeof value == 'string') {
            //console.log(moment(value, parseFormat, this.locale, true));
            return moment__WEBPACK_IMPORTED_MODULE_0__(value, parseFormat, this.locale, true);
        }
        return value ? moment__WEBPACK_IMPORTED_MODULE_0__(value).locale(this.locale) : undefined;
    }
};
CustomDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE,] }] }
];
CustomDateAdapter = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], CustomDateAdapter);

let MaterialModule = class MaterialModule {
};
MaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        exports: [
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOptionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_19__.CdkTreeModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__.MatTreeModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule
        ],
        providers: [
            { provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } },
            { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, useValue: _shared_cofigurations__WEBPACK_IMPORTED_MODULE_1__.Configurations.LOCALE },
            //{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
                useClass: CustomDateAdapter,
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, useValue: MY_FORMATS }
        ]
    })
], MaterialModule);



/***/ }),

/***/ 38798:
/*!**************************************!*\
  !*** ./src/app/shared/api-params.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiParameter": () => (/* binding */ ApiParameter)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ 46885);

class ApiParameter {
    constructor(params) {
        this.paraList = { Member_Id: '' };
        this.strSQLExec = params && params.strSQLExec;
        this.paraList = params && params.paraList;
        this.cmdType = params && params.cmdType || _helpers__WEBPACK_IMPORTED_MODULE_0__.CommandType.StoredProcedure;
        this.strQuery = params && params.strQuery;
    }
}


/***/ }),

/***/ 23157:
/*!*****************************************!*\
  !*** ./src/app/shared/cofigurations.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configurations": () => (/* binding */ Configurations)
/* harmony export */ });
class Configurations {
}
Configurations.LOCALE = 'vi';


/***/ }),

/***/ 18391:
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/app-directive.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDirectiveModule": () => (/* binding */ AppDirectiveModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autofocus.directive */ 76502);
/* harmony import */ var _mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat-input-autofocus.directive */ 35948);
/* harmony import */ var _asp_mask_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asp-mask.directive */ 64715);
/* harmony import */ var _asp_currency_mask_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asp-currency-mask.directive */ 35275);
/* harmony import */ var _input_max_min_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-max-min.directive */ 61914);
/* harmony import */ var _long_press_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./long-press.directive */ 38757);








const dics = [
    _autofocus_directive__WEBPACK_IMPORTED_MODULE_0__.AutofocusDirective,
    _mat_input_autofocus_directive__WEBPACK_IMPORTED_MODULE_1__.MatInputAutofocusDirective,
    _asp_mask_directive__WEBPACK_IMPORTED_MODULE_2__.aspMaskDirective,
    _asp_currency_mask_directive__WEBPACK_IMPORTED_MODULE_3__.aspCurrencyMaskDirective,
    _input_max_min_directive__WEBPACK_IMPORTED_MODULE_4__.InputMinDirective,
    _input_max_min_directive__WEBPACK_IMPORTED_MODULE_4__.InputMaxDirective,
    _long_press_directive__WEBPACK_IMPORTED_MODULE_5__.LongPressDirective
];
let AppDirectiveModule = class AppDirectiveModule {
};
AppDirectiveModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: dics,
        exports: dics
    })
], AppDirectiveModule);



/***/ }),

/***/ 35275:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/asp-currency-mask.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aspCurrencyMaskDirective": () => (/* binding */ aspCurrencyMaskDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 18346);



let aspCurrencyMaskDirective = class aspCurrencyMaskDirective {
    constructor(model, elementRef, maskOptions) {
        this.model = model;
        this.elementRef = elementRef;
        this.aspModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.optionsTemplate = {
            align: 'left',
            allowNegative: true,
            decimal: ',',
            precision: 0,
            default: null,
            prefix: '',
            suffix: '',
            thousands: '.'
        };
        this.optionsTemplate = Object.assign({}, this.optionsTemplate, maskOptions);
    }
    ngOnChanges(changes) {
        this.elementRef.nativeElement.getInputElement().then(input => {
            const currentValue = changes.aspModel.currentValue || changes.aspModel.previousValue;
            const val = (currentValue && !isNaN(currentValue)) ? this.format(currentValue.toString()) : this.optionsTemplate.default;
            input.value = val;
            // this.aspModelChange.emit(val);
        });
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.style.textAlign = this.optionsTemplate.align;
        // this.elementRef.nativeElement.getInputElement().then(input => {
        //   const val = (this.aspModel && !isNaN(this.aspModel)) ? this.format(this.aspModel.toString()) : '0';
        //   input.value = val;
        // });
    }
    handleInput(event) {
        this.viewValue = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        this.writeValue(event.target, this.viewValue);
        this.aspModel = this.getaspModel(event.target.value);
        this.aspModelChange.emit(this.aspModel);
    }
    onInputChange($event) {
    }
    getaspModel(valStr) {
        const val = this.unFormat(valStr).replace(/ /, '').replace(this.optionsTemplate.suffix.trim(), '').replace(this.optionsTemplate.prefix.trim(), '');
        return !isNaN(val) ? +val : this.optionsTemplate.default;
    }
    writeValue(target, value) {
        const valueFormat = this.format(value);
        return target.value = valueFormat;
    }
    format(valString) {
        if (!valString) {
            return '';
        }
        const val = valString.toString();
        const parts = this.unFormat(val).split(this.optionsTemplate.thousands);
        const thousand = val.indexOf('.') > -1;
        return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.optionsTemplate.decimal) + (thousand ? '.' : '') + (!parts[1] ? '' : parts[1]) + (this.optionsTemplate.suffix);
    }
    unFormat(val) {
        if (!val)
            return '';
        val = val.replace(/^0+/, '');
        if (this.optionsTemplate.decimal == ',') {
            return val.replace(/,/g, '');
        }
        else {
            return val.replace(/\./g, '');
        }
    }
    ;
    validate(value) {
        return /^-?\d*[.,]?\d*$/.test(value);
    }
    isChromeAndroid() {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    }
};
aspCurrencyMaskDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ["aspCurrencyMask",] }] }
];
aspCurrencyMaskDirective.propDecorators = {
    aspModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aspModel',] }],
    aspModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['aspModelChange',] }],
    handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ["$event"],] }]
};
aspCurrencyMaskDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[aspCurrencyMask]',
        host: {
            '(aspModelChange)': 'onInputChange($event)'
        },
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
        inputs: ['aspModel', 'aspModelChange']
    })
], aspCurrencyMaskDirective);



/***/ }),

/***/ 64715:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/asp-mask.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aspMaskDirective": () => (/* binding */ aspMaskDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 18346);



let aspMaskDirective = class aspMaskDirective {
    constructor(model, maskPattern) {
        this.model = model;
        this.dividers = maskPattern.replace(/\*/g, "").split("");
        this.dividers.push(" ");
        this.generatePattern(maskPattern);
    }
    onInputChange(event) {
        this.modelValue = this.getModelValue(event);
        let stringToFormat = this.modelValue;
        if (stringToFormat.length < 10) {
            stringToFormat = this.padString(stringToFormat);
        }
        this.viewValue = this.format(stringToFormat);
        this.writeValue(event.target, this.viewValue);
    }
    writeValue(target, value) {
        return target.value = value;
    }
    generatePattern(patternString) {
        this.placeHolderCounts = (patternString.match(/\*/g) || []).length;
        for (let i = 0; i < this.placeHolderCounts; i++) {
            patternString = patternString.replace('*', "{" + i + "}");
        }
        this.maskPattern = patternString;
    }
    format(s) {
        var formattedString = this.maskPattern;
        for (let i = 0; i < this.placeHolderCounts; i++) {
            formattedString = formattedString.replace("{" + i + "}", s.charAt(i));
        }
        return formattedString;
    }
    padString(s) {
        var pad = "          ";
        return (s + pad).substring(0, pad.length);
    }
    getModelValue(event) {
        var modelValue = event.target.value;
        for (var i = 0; i < this.dividers.length; i++) {
            while (modelValue.indexOf(this.dividers[i]) > -1) {
                modelValue = modelValue.replace(this.dividers[i], "");
            }
        }
        return modelValue;
    }
};
aspMaskDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute, args: ["aspMask",] }] }
];
aspMaskDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: '[aspMask]',
        host: {
            '(keyup)': 'onInputChange($event)'
        },
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel]
    })
], aspMaskDirective);



/***/ }),

/***/ 76502:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/autofocus.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofocusDirective": () => (/* binding */ AutofocusDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


let AutofocusDirective = class AutofocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        setTimeout(() => { this.el.nativeElement.focus(); }, 500);
    }
};
AutofocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
AutofocusDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[autofocus]'
    })
], AutofocusDirective);



/***/ }),

/***/ 61914:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/input-max-min.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputMinDirective": () => (/* binding */ InputMinDirective),
/* harmony export */   "InputMaxDirective": () => (/* binding */ InputMaxDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
var InputMinDirective_1, InputMaxDirective_1;



//Validate min
let InputMinDirective = InputMinDirective_1 = class InputMinDirective {
    validate(c) {
        let val = c.value;
        // if (isNaN(val) || /\D/.test(val.toString())) {
        //   return { "inputMin": true };
        // }
        return (val < this.inputMin) ? { "inputMin": true } : null;
    }
};
InputMinDirective.propDecorators = {
    inputMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
InputMinDirective = InputMinDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[inputMin][formControlName],[inputMin][formControl],[inputMin][ngModel]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS, useExisting: InputMinDirective_1, multi: true }]
    })
], InputMinDirective);

//Validate max
let InputMaxDirective = InputMaxDirective_1 = class InputMaxDirective {
    validate(c) {
        let val = c.value;
        // if (isNaN(val) || /\D/.test(val.toString())) {
        //   return { "inputMax": true };
        // }
        return (val > this.inputMax) ? { "inputMax": true } : null;
    }
};
InputMaxDirective.propDecorators = {
    inputMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
InputMaxDirective = InputMaxDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[inputMax][formControlName],[inputMax][formControl],[inputMax][ngModel]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS, useExisting: InputMaxDirective_1, multi: true }]
    })
], InputMaxDirective);



/***/ }),

/***/ 38757:
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/long-press.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongPressDirective": () => (/* binding */ LongPressDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);



let LongPressDirective = class LongPressDirective {
    constructor(el, gestureCtrl, zone) {
        this.el = el;
        this.gestureCtrl = gestureCtrl;
        this.zone = zone;
        this.press = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.delay = 1500;
        this.longPressActive = false;
    }
    ngAfterViewInit() {
        this.loadLongPressOnElement();
    }
    loadLongPressOnElement() {
        const gesture = this.gestureCtrl.create({
            el: this.el.nativeElement,
            threshold: 0,
            gestureName: 'long-press',
            onStart: ev => {
                this.longPressActive = true;
                this.longPressAction();
            },
            onEnd: ev => {
                this.longPressActive = false;
            }
        });
        gesture.enable(true);
    }
    longPressAction() {
        if (this.action) {
            clearInterval(this.action);
        }
        this.action = setTimeout(() => {
            this.zone.run(() => {
                if (this.longPressActive === true) {
                    this.longPressActive = false;
                    this.press.emit();
                }
            });
        }, this.delay);
    }
};
LongPressDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.GestureController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
LongPressDirective.propDecorators = {
    press: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ["delay",] }]
};
LongPressDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: "[long-press]"
    })
], LongPressDirective);



/***/ }),

/***/ 35948:
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/mat-input-autofocus.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatInputAutofocusDirective": () => (/* binding */ MatInputAutofocusDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/input */ 58359);



let MatInputAutofocusDirective = class MatInputAutofocusDirective {
    constructor(matInput) {
        this.matInput = matInput;
    }
    ngOnInit() {
        setTimeout(() => { this.matInput.focus(); }, 500);
    }
};
MatInputAutofocusDirective.ctorParameters = () => [
    { type: _angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInput }
];
MatInputAutofocusDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
        selector: '[matInputAutofocus]'
    })
], MatInputAutofocusDirective);



/***/ }),

/***/ 48391:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4126);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 90758);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 41614);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 18260);






let AuthInterceptor = class AuthInterceptor {
    constructor(storageService, identityService) {
        this.storageService = storageService;
        this.identityService = identityService;
    }
    intercept(request, next) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.storageService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.token.key))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(token => {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                });
            }
            this.identityService.currentMaDvCs.subscribe(str => {
                if (str) {
                    request = request.clone({
                        setParams: {
                            ma_data: str
                        }
                    });
                }
            });
            return next.handle(request);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _services__WEBPACK_IMPORTED_MODULE_0__.IdentityService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 9952:
/*!***************************************************************!*\
  !*** ./src/app/shared/interceptors/http-error.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpErrorInterceptor": () => (/* binding */ HttpErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 41614);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);






let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor(identityService, router) {
        this.identityService = identityService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            switch (err.status) {
                case 401:
                    this.identityService.purgeAuth();
                    //location.reload(true);
                    this.router.navigateByUrl('/login');
                    break;
                case 403:
                    this.router.navigateByUrl('/forbidden');
                    break;
            }
            //const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }));
    }
};
HttpErrorInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_0__.IdentityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HttpErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], HttpErrorInterceptor);



/***/ }),

/***/ 28956:
/*!**********************************************!*\
  !*** ./src/app/shared/interceptors/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* reexport safe */ _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor),
/* harmony export */   "HttpErrorInterceptor": () => (/* reexport safe */ _http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.interceptor */ 48391);
/* harmony import */ var _http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-error.interceptor */ 9952);




/***/ }),

/***/ 21410:
/*!*******************************************!*\
  !*** ./src/app/shared/network.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 67210);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 51590);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44850);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 83301);


//import { Network } from '@ionic-native/network/ngx';




let NetworkService = class NetworkService {
    constructor(network, platform) {
        this.network = network;
        this.platform = platform;
        this.online$ = undefined;
        this.online$ = rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(observer => {
            observer.next(true);
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(true));
        if (this.platform.is('hybrid')) {
            // on Device
            this.online$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(this.network.onConnect().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(true)), this.network.onDisconnect().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(false)));
        }
        else {
            // on Browser
            this.online$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(navigator.onLine), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(false)));
        }
    }
    getNetworkType() {
        return this.network.type;
    }
    getNetworkStatus() {
        return this.online$;
    }
    getNetworkOnline() {
        const promise = new Promise((resolve, reject) => {
            this.online$.subscribe((res) => {
                resolve(res);
            }, (err) => { reject(err); });
        });
        return promise;
    }
};
NetworkService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_0__.Network },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], NetworkService);



/***/ }),

/***/ 84762:
/*!************************************************************!*\
  !*** ./src/app/shared/resolvers/asp-permisson.resolver.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionResolver": () => (/* binding */ PermissionResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var _services_asp_permissions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/asp-permissions.service */ 29263);

/* eslint-disable @typescript-eslint/quotes */




let PermissionResolver = class PermissionResolver {
    constructor(router, permissionsService) {
        this.router = router;
        this.permissionsService = permissionsService;
    }
    resolve(route, state) {
        const oid = route.queryParams[src_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppConfig.OBJ_ID_QUERY_KEY];
        return this.permissionsService.GetPermission(oid);
    }
};
PermissionResolver.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_asp_permissions_service__WEBPACK_IMPORTED_MODULE_1__.aspPermissionsService }
];
PermissionResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], PermissionResolver);



/***/ }),

/***/ 41455:
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility.service */ 76515);
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ 21410);







let ApiService = class ApiService {
    constructor(http, _utilityService, _networkService, router) {
        this.http = http;
        this._utilityService = _utilityService;
        this._networkService = _networkService;
        this.router = router;
    }
    //#region Methods
    post(path, model = Object.create(null), options = Object.create(null), params = Object.create({})) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // const isOnline = await this._networkService.getNetworkStatusPromise();
                // if (!isOnline) {
                //   this._utilityService.showAlert('Mất kết nối. Vui lòng kiểm tra lại kết nối mạng.');
                //   return Promise.reject(null);
                // }
                const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${path}`, body = !options.formData ? JSON.stringify(model) : model;
                const opts = this.setOptions(params, options);
                const res = yield this.http.post(url, body, opts).toPromise();
                return res;
            }
            catch (err) {
                this.formatErrors(err);
                return Promise.reject(err);
            }
        });
    }
    get(path, params = Object.create(null), options = Object.create(null)) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${path}`;
                const opts = this.setOptions(params, options);
                const res = yield this.http.get(url, opts).toPromise();
                return res;
            }
            catch (err) {
                this.formatErrors(err);
                return Promise.reject(err);
            }
        });
    }
    request(path, options = {
        method: "GET",
        body: null,
        params: Object.create(null),
    }) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}${path}`;
        const opts = Object.assign({}, {
            reportProgress: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
            },
        }, options);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({ fromObject: opts.params });
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders(opts.headers);
        return this.http.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpRequest(opts.method, url, opts.body, Object.assign({}, opts, {
            headers: headers,
            params: params,
            //withCredentials: true
        })));
    }
    //#endregion Methods
    //#region Private Functions
    setOptions(params = Object.create(null), options = Object.create(null)) {
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        };
        const _opts = Object.assign({}, {
            headers: options.formData ? {} : headers,
            withCredentials: true,
        }, options);
        return Object.assign({}, _opts, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders(_opts.headers),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({ fromObject: params }),
        });
    }
    formatErrors(err) {
        console.error(err);
        // if(err.error instanceof ErrorEvent){
        // }
        const msg = err.error && err.hasOwnProperty("error_description")
            ? err.error.error_description
            : JSON.stringify(err.error);
        switch (err.status) {
            // case 401:
            //   this.router.navigateByUrl('/login');
            //   break;
            case 0:
                this._utilityService.showToast("Kết nối hệ thống thất bại", this._utilityService.toastType.error);
                break;
            case 406:
                this._utilityService.showToast(msg);
                break;
            default:
                //this._utilityService.showToast(msg, this._utilityService.toastType.error);
                break;
        }
        //return Promise.reject(err);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService },
    { type: _network_service__WEBPACK_IMPORTED_MODULE_2__.NetworkService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root",
    })
], ApiService);



/***/ }),

/***/ 29263:
/*!************************************************************!*\
  !*** ./src/app/shared/services/asp-permissions.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aspPermissionsService": () => (/* binding */ aspPermissionsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);

/* eslint-disable curly */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */



let aspPermissionsService = class aspPermissionsService {
    constructor(apiService) {
        this.apiService = apiService;
        this.urlSegement = {
            GetPermissionByObject: "/aspCore/GetPermissionByObject",
        };
        this.permissonSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    GetPermission(oid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!oid)
                return Promise.reject("Object ID is requierd");
            const body = {
                oid: oid,
            };
            const res = yield this.apiService.get(this.urlSegement.GetPermissionByObject, body);
            this.permissonSubject.next(res[0]);
            return res[0];
        });
    }
};
aspPermissionsService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
aspPermissionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], aspPermissionsService);



/***/ }),

/***/ 43680:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.service */ 62143);






let AuthGuardService = class AuthGuardService {
    constructor(router, identityService) {
        this.router = router;
        this.identityService = identityService;
    }
    canActivate(route, state) {
        return this.identityService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            if (!res) {
                this.router.navigateByUrl('/login');
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
            console.error('CanActivate error', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
        }));
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService }
];
AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ 98766:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/auth-resolve.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthResolveService": () => (/* binding */ AuthResolveService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.service */ 62143);





let AuthResolveService = class AuthResolveService {
    constructor(router, identityService) {
        this.router = router;
        this.identityService = identityService;
    }
    resolve(route, state) {
        return this.identityService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
};
AuthResolveService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService }
];
AuthResolveService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthResolveService);



/***/ }),

/***/ 5581:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);



let AuthService = class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    attemptAuth(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.apiService.post('auth/login', {
                username: credentials.username,
                password: credentials.password,
            });
            return res;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 66923:
/*!******************************************************!*\
  !*** ./src/app/shared/services/data-tool.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataToolService": () => (/* binding */ DataToolService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);
/* harmony import */ var _api_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-params */ 38798);




let DataToolService = class DataToolService {
    constructor(apiService) {
        this.apiService = apiService;
        this.urlSegement = {
            SQLGetDataTable: '/DataTool/SQLGetDataTable',
            SQLGetNameByCode: '/DataTool/SQLGetNameByCode',
            SQLGetDataRowByID: '/DataTool/SQLGetDataRowByID',
            SQLDelete: '/DataTool/SQLDelete',
            SQLUpdate: '/DataTool/SQLUpdate',
            SQLCheckExist: '/DataTool/SQLCheckExist'
        };
    }
    SQLGetDataTable(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLGetDataTable, body);
            return res;
        });
    }
    SQLGetNameByCode(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLGetNameByCode, body);
            return res;
        });
    }
    SQLGetDataRowByID(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLGetDataRowByID, body);
            return res;
        });
    }
    SQLGetDataRowByID_1(strTableName, strColumnID, strValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const apiParameter = new _api_params__WEBPACK_IMPORTED_MODULE_1__.ApiParameter();
            apiParameter.strTableName = strTableName;
            apiParameter.strColumnID = strColumnID;
            apiParameter.strValue = strValue;
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLGetDataRowByID, body);
            return res;
        });
    }
    SQLDelete(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLDelete, body);
            return res;
        });
    }
    SQLUpdate(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLUpdate, body);
            return res;
        });
    }
    SQLCheckExist(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLCheckExist, body);
            return res;
        });
    }
};
DataToolService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
DataToolService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataToolService);



/***/ }),

/***/ 94158:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/geo-location.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoLocationService": () => (/* binding */ GeoLocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ 325);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);




let GeoLocationService = class GeoLocationService {
    constructor(http, mapsAPILoader, lazyMapAPIConfig) {
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.lazyMapAPIConfig = lazyMapAPIConfig;
        this.GEOCODE_API_URL = 'https://maps.google.com/maps/api/geocode/json';
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder();
        });
    }
    getCurrentPosition() {
        const promise = new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    resolve(pos);
                }),
                    (err) => {
                        console.log('Position is not available');
                        console.error(JSON.stringify(err));
                        reject(err);
                    },
                    {
                        enableHighAccuracy: true, timeout: 5000, maximumAge: 0
                    };
            }
            else {
                reject({ status: false, msg: 'No support for geolocation' });
            }
        });
        return promise;
    }
    getGeocode(lat, lng) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.geoCoder) === null || _a === void 0 ? void 0 : _a.geocode({ 'location': { lat: lat, lng: lng } }, (results, status) => {
                    if (status === 'OK') {
                        resolve(results);
                    }
                    else {
                        reject('Geocoder failed due to: ' + status);
                    }
                });
            });
        });
    }
    getGeocoderHttpClient(lat, lng) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
                fromObject: {
                    latlng: `${lat},${lng}`,
                    key: this.lazyMapAPIConfig.apiKey
                }
            });
            const res = yield this.http.get(this.GEOCODE_API_URL, {
                params: params
            }).toPromise();
            return res;
        });
    }
};
GeoLocationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__.MapsAPILoader },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_agm_core__WEBPACK_IMPORTED_MODULE_2__.LAZY_MAPS_API_CONFIG,] }] }
];
GeoLocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GeoLocationService);



/***/ }),

/***/ 62143:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/identity.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityService": () => (/* binding */ IdentityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40563);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 54460);
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility.service */ 76515);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 18260);









let IdentityService = class IdentityService {
    constructor(apiService, storageService, utilityService, http) {
        this.apiService = apiService;
        this.storageService = storageService;
        this.utilityService = utilityService;
        this.http = http;
        this.urlSegement = {
            generateToken: "/token",
            getIdentity: "/identity/authenticated",
            sendMailPass: "/Helper/SendMailPass",
        };
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
        this.currentUser = this.currentUserSubject
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
        this.dvcsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.listDVCS = this.dvcsSubject
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
        this.currentMaDvCsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject("");
        this.currentMaDvCs = this.currentMaDvCsSubject
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.ReplaySubject(0);
        this.isAuthenticated = this.isAuthenticatedSubject
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
        this.softwareSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.currentSoftwareSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject("");
        this.currentSoftware = this.currentSoftwareSubject
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // If JWT detected, attempt to get & store user's info
            const token = yield this.storageService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.token.key);
            if (token) {
                try {
                    const res = yield this.apiService.get(this.urlSegement.getIdentity);
                    if (!res.member_info || !res.ma_data)
                        this.purgeAuth();
                    else {
                        const members = JSON.parse(res.member_info);
                        const dvcs = JSON.parse(res.dvcs_allow);
                        this.setDvCs(res.ma_data);
                        this.setAuth(members[0], dvcs);
                        this.setSoftware(members[0].Software_ID_Default);
                    }
                }
                catch (err) {
                    this.purgeAuth();
                }
            }
            else {
                // Remove any potential remnants of previous auth states
                this.purgeAuth();
            }
        });
    }
    setAuth(user, dvcs) {
        // Save JWT sent from server in localstorage
        // this.storageService.setToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        this.dvcsSubject.next(dvcs);
        //this.currentUser = user;
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }
    setDvCs(strMaDvCs) {
        this.storageService.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage.dataCode, strMaDvCs);
        this.currentMaDvCsSubject.next(strMaDvCs);
    }
    setSoftware(software_Id) {
        this.storageService.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage.softwareId, software_Id);
        this.currentSoftwareSubject.next(software_Id);
    }
    purgeAuth() {
        // Remove JWT from localstorage
        this.storageService.remove(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.token.key);
        this.storageService.remove(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage.dataCode);
        this.storageService.remove(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage.softwareId);
        // Set current user to an empty object
        this.currentUserSubject.next(null);
        this.dvcsSubject.next([]);
        this.softwareSubject.next([]);
        this.currentMaDvCsSubject.next("");
        this.currentSoftwareSubject.next("");
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }
    attemptAuth(username, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const res = yield this.getToken(username, password);
                this.storageService.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.token.key, res.access_token);
                const members = JSON.parse(res.member_info);
                const dvcs = JSON.parse(res.dvcs_allow);
                this.setDvCs(res.ma_data);
                this.setSoftware(res.ma_software_default);
                this.setAuth(members[0], dvcs);
                return res;
            }
            catch (err) {
                this.purgeAuth();
                return Promise.reject(err);
            }
        });
    }
    getToken(username, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                debugger;
                const data = `grant_type=password&username=${username}&password=${password}`;
                const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl}${this.urlSegement.generateToken}`;
                return yield this.http.post(url, data).toPromise();
            }
            catch (error) {
                console.error(error);
                const err = error;
                switch (err.status) {
                    case 0:
                        this.utilityService.showToast("Kết nối hệ thống thất bại.", this.utilityService.toastType.error);
                        break;
                    case 400:
                        if (err.error && err.error.error_description) {
                            this.utilityService.showToast(err.error.error_description, this.utilityService.toastType.error);
                        }
                        else
                            this.utilityService.showToast(err.message, this.utilityService.toastType.error);
                        break;
                    default:
                        this.utilityService.showToast(err.message, this.utilityService.toastType.error);
                        break;
                }
                return Promise.reject(err);
            }
        });
    }
    sendMailPass(userName, email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                userName: userName,
                email: email
            };
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl}${this.urlSegement.sendMailPass}`;
            const res = yield this.http.post(url, params).toPromise();
            return res;
        });
    }
    getCurrentUser() {
        const promise = new Promise((resolve, reject) => {
            this.currentUser.subscribe((user) => {
                return resolve(user);
            }, (err) => {
                console.error(JSON.stringify(err));
                return reject(err);
            });
        });
        return promise;
    }
    getCurrentMaDvCsAsync() {
        const promise = new Promise((resolve, reject) => {
            this.currentMaDvCs.subscribe((str) => {
                return resolve(str);
            }, (err) => {
                console.error(JSON.stringify(err));
                return reject(err);
            });
        });
        return promise;
    }
    getStrCurrentMaDvCs() {
        let ma_DvCs = "A03";
        this.currentMaDvCs.subscribe((res) => {
            ma_DvCs = res;
        });
        return ma_DvCs;
    }
    getStrMemberId() {
        const promise = new Promise((resolve, reject) => {
            this.currentUser.subscribe((res) => {
                return resolve(res.member_ID);
            }, (err) => {
                console.error(JSON.stringify(err));
                return reject(err);
            });
        });
        return promise;
    }
};
IdentityService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient }
];
IdentityService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: "root",
    })
], IdentityService);



/***/ }),

/***/ 41614:
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* reexport safe */ _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService),
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService),
/* harmony export */   "AuthGuardService": () => (/* reexport safe */ _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService),
/* harmony export */   "StorageService": () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService),
/* harmony export */   "IdentityService": () => (/* reexport safe */ _identity_service__WEBPACK_IMPORTED_MODULE_4__.IdentityService),
/* harmony export */   "AuthResolveService": () => (/* reexport safe */ _auth_resolve_service__WEBPACK_IMPORTED_MODULE_5__.AuthResolveService),
/* harmony export */   "NoAuthService": () => (/* reexport safe */ _no_auth_service__WEBPACK_IMPORTED_MODULE_6__.NoAuthService),
/* harmony export */   "DataToolService": () => (/* reexport safe */ _data_tool_service__WEBPACK_IMPORTED_MODULE_7__.DataToolService),
/* harmony export */   "NavigationService": () => (/* reexport safe */ _navigation_service__WEBPACK_IMPORTED_MODULE_8__.NavigationService),
/* harmony export */   "SQLExecService": () => (/* reexport safe */ _sqlexec_service__WEBPACK_IMPORTED_MODULE_9__.SQLExecService),
/* harmony export */   "VoucherService": () => (/* reexport safe */ _voucher_service__WEBPACK_IMPORTED_MODULE_10__.VoucherService),
/* harmony export */   "NotificationsService": () => (/* reexport safe */ _notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService),
/* harmony export */   "UserService": () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_12__.UserService),
/* harmony export */   "aspPermissionsService": () => (/* reexport safe */ _asp_permissions_service__WEBPACK_IMPORTED_MODULE_13__.aspPermissionsService),
/* harmony export */   "GeoLocationService": () => (/* reexport safe */ _geo_location_service__WEBPACK_IMPORTED_MODULE_14__.GeoLocationService)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 5581);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ 43680);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ 54460);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.service */ 62143);
/* harmony import */ var _auth_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-resolve.service */ 98766);
/* harmony import */ var _no_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-auth.service */ 92465);
/* harmony import */ var _data_tool_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-tool.service */ 66923);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.service */ 31039);
/* harmony import */ var _sqlexec_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sqlexec.service */ 31677);
/* harmony import */ var _voucher_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voucher.service */ 25379);
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications.service */ 54121);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.service */ 54568);
/* harmony import */ var _asp_permissions_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./asp-permissions.service */ 29263);
/* harmony import */ var _geo_location_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./geo-location.service */ 94158);


















/***/ }),

/***/ 31039:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 13252);




let NavigationService = class NavigationService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.history = [];
        // this.router.events.subscribe((event) => {
        //   if (event instanceof NavigationEnd) {
        //     this.history.push(event.urlAfterRedirects)
        //   }
        // })
    }
    back() {
        this.history.pop();
        if (this.history.length > 0) {
            this.location.back();
        }
        else {
            this.router.navigateByUrl('/');
        }
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__.Location }
];
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], NavigationService);



/***/ }),

/***/ 92465:
/*!****************************************************!*\
  !*** ./src/app/shared/services/no-auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAuthService": () => (/* binding */ NoAuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.service */ 62143);




let NoAuthService = class NoAuthService {
    constructor(router, identityService) {
        this.router = router;
        this.identityService = identityService;
    }
    canActivate(route, state) {
        return true;
    }
};
NoAuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService }
];
NoAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NoAuthService);



/***/ }),

/***/ 54121:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/notifications.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);



let NotificationsService = class NotificationsService {
    constructor(apiService) {
        this.apiService = apiService;
        this.urlSegement = {
            GetNotificationsUser: "/Notifications/GetNotificationsUser",
            ReadNotificationsUser: "/Notifications/ReadNotificationsUser",
        };
    }
    GetNotificationsUser(softWareId = 'ACC') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.apiService.get(this.urlSegement.GetNotificationsUser, { s: softWareId });
            return res;
        });
    }
    ReadNotificationsUser(softWareId = 'Acc') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.apiService.post(this.urlSegement.ReadNotificationsUser, { s: softWareId });
            return res;
        });
    }
};
NotificationsService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ 31677:
/*!****************************************************!*\
  !*** ./src/app/shared/services/sqlexec.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLExecService": () => (/* binding */ SQLExecService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);



let SQLExecService = class SQLExecService {
    constructor(apiService) {
        this.apiService = apiService;
        this.urlSegement = {
            Execute: '/SQLExec/Execute',
            ExecuteReturnDt: '/SQLExec/ExecuteReturnDt',
            ExecuteReturnDs: '/SQLExec/ExecuteReturnDs',
            ExecuteReturnValue: '/SQLExec/ExecuteReturnValue',
        };
    }
    Execute(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.Execute, body);
            return res;
        });
    }
    ExecuteReturnDs(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.ExecuteReturnDs, body);
            return res;
        });
    }
    ExecuteReturnDt(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.ExecuteReturnDt, body);
            return res;
        });
    }
    ExecuteReturnValue(apiParameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                apiParams: apiParameter,
            };
            const res = yield this.apiService.post(this.urlSegement.ExecuteReturnValue, body);
            return res;
        });
    }
    strExecuteReturnValue(strSQLExec) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                strSQLExec: strSQLExec,
            };
            const res = yield this.apiService.post(this.urlSegement.ExecuteReturnValue, body);
            return res;
        });
    }
};
SQLExecService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
SQLExecService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SQLExecService);



/***/ }),

/***/ 54460:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);


//import { Storage } from '@ionic/storage';

let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this._storage = null;
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            // If using, define drivers here: await this.storage.defineDriver(/*...*/);
            const storage = yield this.storage.create();
            this._storage = storage;
        });
    }
    set(key, data) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.set(key, data);
    }
    get(key) {
        var _a;
        //const res = 
        return (_a = this.storage) === null || _a === void 0 ? void 0 : _a.get(key);
    }
    remove(key) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.remove(key);
    }
    clear() {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.clear();
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 54568:
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 41614);



let UserService = class UserService {
    constructor(apiService) {
        this.apiService = apiService;
        this.urlSegement = {
            GetInfoUser: "/User/GetInfoUser",
        };
    }
    GetInfoUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.apiService.post(this.urlSegement.GetInfoUser);
            return res;
        });
    }
};
UserService.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 25379:
/*!****************************************************!*\
  !*** ./src/app/shared/services/voucher.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherService": () => (/* binding */ VoucherService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 41455);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);




let VoucherService = class VoucherService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.urlSegement = {
            GetVoucher: "/Voucher/GetVoucher",
            SQLDeleteCt: "/Voucher/SQLDeleteCt",
            SaveVoucher: "/Voucher/SaveVoucher",
            DuyetVoucher: "/Voucher/DuyetVoucher",
            GetListVoucher: "/Voucher/GetListVoucher",
            GetListMa_Lo: "/Voucher/GetListMa_Lo",
            DowloadPDF: "/Voucher/DowloadPDF",
            DowloadPDF_Blod: "/Voucher/DowloadPDF_Blod",
            UpdateChuKy: "/Voucher/UpdateChuKy",
            UpdateChuKy_NV: "/Voucher/UpdateChuKy_NV"
        };
    }
    getVoucher(strStt, strMa_Ct) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                strStt: strStt,
                strMaCt: strMa_Ct,
            };
            const res = yield this.apiService.get(this.urlSegement.GetVoucher, params);
            return res;
        });
    }
    UpdateChuKy(filterParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                filterParams
            };
            debugger;
            const res = yield this.apiService.post(this.urlSegement.UpdateChuKy, body);
            return res;
        });
    }
    UpdateChuKy_NV(filterParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                filterParams
            };
            debugger;
            const res = yield this.apiService.post(this.urlSegement.UpdateChuKy_NV, body);
            return res;
        });
    }
    SQLDeleteCt(strStt, strMa_Ct) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                strStt: strStt,
                strMa_Ct: strMa_Ct,
            };
            const res = yield this.apiService.post(this.urlSegement.SQLDeleteCt, body);
            return res;
        });
    }
    saveVoucher(voucher, enuEdit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                voucher: voucher,
                enuEdit: enuEdit,
            };
            const res = yield this.apiService.post(this.urlSegement.SaveVoucher, body);
            return res;
        });
    }
    GetListVoucher(filterParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                filterParams
            };
            const res = yield this.apiService.post(this.urlSegement.GetListVoucher, body);
            return res;
        });
    }
    GetListMa_Lo(filterParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                filterParams
            };
            const res = yield this.apiService.post(this.urlSegement.GetListMa_Lo, body);
            return res;
        });
    }
    DuyetVoucher(filterParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                filterParams
            };
            const res = yield this.apiService.post(this.urlSegement.DuyetVoucher, body);
            return res;
        });
    }
    DowloadPDF(itemModel = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                itemCt: itemModel,
            };
            const res = yield this.apiService.post(this.urlSegement.DowloadPDF, body);
            return res;
        });
    }
    DowloadPDF_Blod(itemModel = {}) {
        const body = {
            itemCt: itemModel,
        };
        return this.apiService.request(this.urlSegement.DowloadPDF_Blod, {
            method: "POST",
            body: JSON.stringify(body),
            reportProgress: true,
            responseType: "blob",
        });
    }
};
VoucherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
VoucherService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], VoucherService);



/***/ }),

/***/ 76515:
/*!*******************************************!*\
  !*** ./src/app/shared/utility.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityService": () => (/* binding */ UtilityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);




let UtilityService = class UtilityService {
    constructor(_alertCtrl, _toastCtrl, _loadingController, _snackBar) {
        this._alertCtrl = _alertCtrl;
        this._toastCtrl = _toastCtrl;
        this._loadingController = _loadingController;
        this._snackBar = _snackBar;
        this.loader = null;
        // toast: any = null;
        this.toastType = {
            success: 'medium',
            error: 'danger',
            warning: 'warning'
        };
        this.alert = null;
        this.pickerButtons = [{
                text: 'Hủy',
                handler: (date) => {
                }
            }, {
                text: 'Đồng ý',
                handler: (date) => {
                }
            }];
    }
    showLoader(options = { message: '' }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoadingHandler(Object.assign({
                message: null,
                backdropDismiss: false,
                translucent: true,
                spinner: 'lines'
            }, options));
        });
    }
    hideLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.hideLoadingHandler();
        });
    }
    showToast(message = 'Thành công', type = this.toastType.success, options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.showToastHandler(Object.assign({ message: message, color: type, duration: 3500 }, options));
        });
    }
    hideToast(toast) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.hideToastHandler(toast);
        });
    }
    showAlert(message = '', options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showAlertHandler(Object.assign({ message: message, buttons: ['OK'] }, options));
        });
    }
    showSnackBar(message = '', options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return this._snackBar.open(message, options.action, Object.assign({}, options));
        });
    }
    hideSnackBar(snackBarPromise, destroy = true) {
        snackBarPromise.then((sb) => {
            if (sb) {
                sb.dismiss();
                // if (destroy) sb.ngOnDestroy();
                snackBarPromise = null;
            }
        });
    }
    blobToBase64(blob) {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }
    dataURItoBlob(dataURI, type = 'image/jpeg') {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: type });
        return blob;
    }
    fecthDataURItoBlob(dataURI) {
        return fetch(dataURI).then(res => { return res.blob(); });
    }
    hasValue(obj) {
        return (obj != null && obj != undefined && obj != 'undefined');
    }
    isNullOrEmptyString(str) {
        return (str == null && str == undefined && str == '');
    }
    formatCurrency(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
            const negativeSign = amount < 0 ? "-" : "";
            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;
            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - Number(i)).toFixed(decimalCount).slice(2) : "");
        }
        catch (e) {
            console.log(e);
        }
    }
    ;
    caclCurrencyVietnamess(amount, min = 500) {
        if (amount < min)
            return min;
        const _floor = Math.floor(amount / min);
        const val = _floor * min;
        const balance = amount - val;
        return amount + (min - balance);
    }
    isImage(contentType) {
        return contentType.includes('image/');
    }
    //#region  Private Fnc
    showLoadingHandler(options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loader == null) {
                this.loader = yield this._loadingController.create(options);
                yield this.loader.present();
            }
            else {
                this.loader.message = options.message;
            }
        });
    }
    hideLoadingHandler() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loader != null) {
                yield this.loader.dismiss();
                this.loader = null;
            }
        });
    }
    showAlertHandler(options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this._alertCtrl.create(options);
            return yield this.alert.present();
            // if (this.alert == null) {
            //   this.alert = await this._alertCtrl.create(options);
            //   await this.alert.present();
            // } else {
            //   this.alert.message = options.message;
            // }
        });
    }
    showToastHandler(options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this._toastCtrl.create(options);
            yield toast.present();
            return toast;
            // if (this.toast == null) {
            // } else {
            //   this.toast.color = options.type;
            //   this.toast.message = options.message;
            // }
        });
    }
    hideToastHandler(toast) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (toast) {
                toast.then((result) => {
                    result.dismiss();
                    toast = null;
                });
            }
        });
    }
};
UtilityService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar }
];
UtilityService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UtilityService);



/***/ }),

/***/ 10875:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    IONIC_HTTP_PROXY: 'https://api.asp.vn:90/api',
    baseUrl: 'https://api.asp.vn:90/api',
    baseResources: 'https://api.asp.vn:90/resources',
    token: {
        key: "l_at"
    },
    storage: {
        dataCode: 'd_code',
        softwareId: 'l_sw'
    },
    baseColor: ' #2196f2',
    mapApiKey: 'AIzaSyCwhBrALKTDSdaKSwo9fbp4htPzkvjWuxA'
};


/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:59624/api',
    resourceUrl: 'http://localhost:59624/resources/file',
    //baseUrl: 'http://192.168.10.2/api',
    //resourceUrl: 'http://192.168.10.2/resources/file', 
    token: {
        key: 'l_at'
    },
    storage: {
        dataCode: 'd_code',
        softwareId: 'l_sw'
    },
    baseColor: '#2196f2',
    mapApiKey: 'AIzaSyCwhBrALKTDSdaKSwo9fbp4htPzkvjWuxA'
};
//  * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
//  */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment.prod */ 10875);




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		87550,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		70171,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-ps": 99061,
	"./ar-ps.js": 99061,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku-kmr": 11609,
	"./ku-kmr.js": 11609,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 42557,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 42557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 52530,
	"./sw.js": 52530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 21074,
	"./zh-hk.js": 21074,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map