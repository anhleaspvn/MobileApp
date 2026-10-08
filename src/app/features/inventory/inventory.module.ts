import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { DataToolService, SQLExecService } from 'src/app/core';
import { InventoryRoutingModule } from './inventory-routing.module';
import { CreateComponent } from './pages/create.component';
import { DetailComponent } from './pages/detail.component';
import { ListComponent } from './pages/list.component';
import { FilterInventoriesModalComponent } from './components/filter-inventories-modal.component';
import { InfoComponent } from './components/templates/info.component';
import { InfoProductsComponent } from './components/templates/info-products.component';
import { ProductsInventoryComponent } from './components/templates/products-inventory.component';

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
    SharedFiltersModule,
    SharedModule,
    InventoryRoutingModule
  ],
  providers: [DataToolService, SQLExecService]
})
export class InventoryModule { }
