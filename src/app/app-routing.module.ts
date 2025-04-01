import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppConfig } from "src/app/helpers";
import { PermissionResolver } from "src/app/shared/resolvers/asp-permisson.resolver";

import { AuthGuardService, NoAuthService, AuthResolveService } from './shared/services';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [NoAuthService],
    resolve: {  },
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  // Chứng từ kho
  {
    path: 'components/voucher',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./components/vouchers/voucher.module').then(m => m.VoucherModule),
  },
  // thông kê sản xuất
  {
    path: 'components/statistics',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./components/statistics/statistics.module').then(m => m.StatisticsModule),
  },
  // đặt hàng
  {
    path: 'components/order',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./components/orders/order.module').then(m => m.OrderModule),
  },
  {
    path: 'components/product',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./components/products/product.module').then(m => m.ProductModule),
  },
  // Danh mục kho
  {
    path: 'components/warehouse',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./components/warehouse/warehouse.module').then(m => m.WarehouseModule),
  },
  // Kiểm kê
  {
    path: 'components/inventory',
    canActivate: [AuthGuardService],
    resolve: { [AppConfig.PERM_RESOLVER_KEY]: PermissionResolver },
    loadChildren: () => import('./components/inventory/inventory.module').then(m => m.InventoryModule),
  },
  
  {
    path: 'components/report-info',
    canActivate: [AuthGuardService],
    resolve: {  },
    loadChildren: () => import('./components/report-info/report-info.module').then(m => m.ReportInfoModule),
  },
  {
    path: 'components/prodscanqrcode',
    canActivate: [AuthGuardService],
    resolve: {  },
    loadChildren: () => import('./components/prodscanqrcode/prodscanqrcode.module').then(m => m.ProdscanqrcodeModule),
  },
  {
    path: 'components/qcinspection',
    canActivate: [AuthGuardService],
    resolve: {  },
    loadChildren: () => import('./components/qcinspection/qcinspection.module').then(m => m.QcinspectionModule),
  },
  {
    path: '',
    resolve: {  },
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
