import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './pages/warehouse.component';
import { ProductDetailComponent } from './pages/product-detail.component';

@NgModule({
  declarations: [WarehouseComponent,ProductDetailComponent],
  imports: [
    SharedModule,
    WarehouseRoutingModule
  ]
})

export class WarehouseModule { }


