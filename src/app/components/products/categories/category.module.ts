import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { BaseModule } from '../../base/base.module';

import { ListComponent } from './list.component';
// import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
// import { ViewModule as VourcherViewModdule } from '../../vouchers/views/view.module'
// import { ViewModule } from '../../vouchers/views/view.module'
import { ProductComponent } from '../product.component';
import { ProductDetailComponent } from './product-detail.component';

const routing: ModuleWithProviders<CategoryModule> = RouterModule.forChild([
  {
    path: 'list',
    component: ListComponent,
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


@NgModule({
  declarations: [
    // VourcherViewModdule,
    ListComponent,
    // DetailComponent,
    ProductDetailComponent
  ],
  imports: [
    // VourcherViewModdule,
    // ViewModule,
    SharedModule,
    BaseModule,
    routing
  ]
})
export class CategoryModule { }
