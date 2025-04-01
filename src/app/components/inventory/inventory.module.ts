import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { DetailComponent } from './detail.component';
import { BaseModule } from '../base/base.module';
import { ListComponent } from './list.component';
import { CreateComponent } from './create.component';
import { FilterInventoriesModalComponent } from './filter-inventories-modal.component';
import { DataToolService, SQLExecService } from '../../shared/services';
import { InfoComponent } from './templates/info.component';
import { InfoProductsComponent } from './templates/info-products.component';
import { ProductsInventoryComponent } from './templates/products-inventory.component';
const routing: ModuleWithProviders<InventoryModule> = RouterModule.forChild([
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'detail/:stt',
    component: DetailComponent
  }
]);

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent,
    InfoProductsComponent,
    InfoComponent,
    ProductsInventoryComponent,
    FilterInventoriesModalComponent,
  ],
  imports: [
    BaseModule,
    SharedModule,
    routing
  ],
  providers: [DataToolService, SQLExecService]
})
export class InventoryModule { }
