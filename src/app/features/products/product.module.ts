import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckingModule } from './checking-info/checking.module';
import { CategoryModule } from './categories/category.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './pages/product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    SharedModule,
    CheckingModule,
    CategoryModule,
    ProductsRoutingModule
  ]
})
export class ProductModule { }
