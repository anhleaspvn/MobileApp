import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';

import { ListComponent } from '../pages/categories/list.component';
// import { DetailComponent } from './detail.component';
// import { ViewModule as VourcherViewModdule } from '../../vouchers/views/view.module'
// import { ViewModule } from '../../vouchers/views/view.module'
import { ProductDetailComponent } from '../components/categories/product-detail.component';
import { CategoryRoutingModule } from './category-routing.module';


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
    SharedFiltersModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
