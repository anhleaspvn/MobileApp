import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { CheckingModule } from './checking-info/checking.module';
import { CategoryModule } from './categories/category.module';

import { ProductComponent  } from './product.component';

const routing: ModuleWithProviders<ProductModule> = RouterModule.forChild([
  { path: '', component: ProductComponent, pathMatch: 'full' }
]);

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    SharedModule,
    CheckingModule,
    CategoryModule,
    routing
  ]
})
export class ProductModule { }
