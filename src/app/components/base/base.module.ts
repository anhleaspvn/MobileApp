import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

import { ProductFilterModalComponent } from './product-filter-modal.component';
import { CustomerFilterModalComponent } from './customer-filter-modal.component';

@NgModule({
  declarations: [
    ProductFilterModalComponent,
    CustomerFilterModalComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductFilterModalComponent,
    CustomerFilterModalComponent
  ]
})
export class BaseModule { }
