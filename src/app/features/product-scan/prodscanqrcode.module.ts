import { NgModule } from '@angular/core';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataToolService, SQLExecService } from 'src/app/core';
import { ProductScanRoutingModule } from './product-scan-routing.module';
import { ListComponent } from './pages/list.component';
import { ListMachineComponent } from './pages/list-machine.component';
import { ListInsMachineComponent } from './pages/list-ins-machine.component';
import { DetailInsMachineComponent } from './pages/detail-ins-machine.component';
import { OpscanComponent } from './pages/opscan.component';
import { FilterWoModalComponent } from './components/filter-wo-modal.component';
import { FilterStageModalComponent } from './components/filter-stage-modal.component';
import { FilterEmpModalComponent } from './components/filter-emp-modal.component';
import { FilterMulEmpModalComponent } from './components/filter-mulemp-modal.component';

@NgModule({
  declarations: [
    ListComponent,
    ListMachineComponent,
    ListInsMachineComponent,
    DetailInsMachineComponent,
    FilterWoModalComponent,
    FilterStageModalComponent,
    FilterEmpModalComponent,
    FilterMulEmpModalComponent,
    OpscanComponent
  ],
  imports: [
    SharedFiltersModule,
    SharedModule,
    ProductScanRoutingModule
  ],
  providers: [DataToolService, SQLExecService]
})
export class ProdscanqrcodeModule { }
