import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { WarehouseComponent } from './warehouse.component';
import { ProductDetailComponent } from './product-detail.component';


const routing: ModuleWithProviders<WarehouseModule> = RouterModule.forChild([
  {
    path: 'list',
    component: WarehouseComponent,
  },
  {
    path: 'product-detail/:ma_Kho',
    component: ProductDetailComponent,
    
  }
]);

@NgModule({
  declarations: [WarehouseComponent,ProductDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    routing
  ]
})

export class WarehouseModule { }


