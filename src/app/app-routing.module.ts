import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppConfig } from "src/app/core/config";
import { PermissionResolver } from "src/app/core/guards/permission.resolver";

import { AuthGuardService, NoAuthService, AuthResolveService } from 'src/app/core';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [NoAuthService],
    resolve: {  },
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  // Chứng từ kho
  {
    path: 'components/voucher',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./features/vouchers/voucher.module').then(m => m.VoucherModule),
  },
  // thông kê sản xuất
  {
    path: 'components/statistics',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./features/statistics/statistics.module').then(m => m.StatisticsModule),
  },
  // đặt hàng
  {
    path: 'components/order',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./features/orders/order.module').then(m => m.OrderModule),
  },
  {
    path: 'components/product',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./features/products/product.module').then(m => m.ProductModule),
  },
  // Danh mục kho
  {
    path: 'components/warehouse',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./features/warehouse/warehouse.module').then(m => m.WarehouseModule),
  },
  // Kiểm kê
  {
    path: 'components/inventory',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./features/inventory/inventory.module').then(m => m.InventoryModule),
  },
  
  {
    path: 'components/report-info',
    canActivate: [AuthGuardService],
    resolve: {  },
    loadChildren: () => import('./features/reports/report-info/report-info.module').then(m => m.ReportInfoModule),
  },
  {
    path: 'components/prodscanqrcode',
    canActivate: [AuthGuardService],
    resolve: {  },
    loadChildren: () => import('./features/product-scan/prodscanqrcode.module').then(m => m.ProdscanqrcodeModule),
  },
  {
    path: 'components/qcinspection',
    canActivate: [AuthGuardService],
    resolve: {  },
    loadChildren: () => import('./features/qc-inspection/qcinspection.module').then(m => m.QcinspectionModule),
  },
  // {
  //   path: 'components/oqcscan',
  //   canActivate: [AuthGuardService],
  //   resolve: {  },
  //   loadChildren: () => import('./features/qc-inspection/qcinspection.module').then(m => m.QcinspectionModule),
  // },
  {
    path: '',
    resolve: {  },
    loadChildren: () => import('./layout/tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
