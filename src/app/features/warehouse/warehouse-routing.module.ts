import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './pages/product-detail.component';
import { WarehouseComponent } from './pages/warehouse.component';

const routes: Routes = [
  {
    path: 'list',
    component: WarehouseComponent,
  },
  {
    path: 'product-detail/:ma_Kho',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseRoutingModule {}
