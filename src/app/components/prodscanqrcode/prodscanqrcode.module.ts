import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { BaseModule } from '../base/base.module';
import { SharedModule } from '../shared.module';
import { DataToolService, SQLExecService } from 'src/app/shared/services';
import { FilterWoModalComponent } from './filter-wo-modal.component';
import { FilterStageModalComponent } from './filter-stage-modal.component';
import { ListMachineComponent } from './list-machine.component';
import { FilterEmpModalComponent } from './filter-emp-modal.component';
import {FilterMulEmpModalComponent} from './filter-mulemp-modal.component';

const routing: ModuleWithProviders<ProdscanqrcodeModule> = RouterModule.forChild([
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list-machine',
    component: ListMachineComponent,
  },
]);

@NgModule({
  declarations: [
    ListComponent,
    ListMachineComponent,
    FilterWoModalComponent,
    FilterStageModalComponent,
    FilterEmpModalComponent,
    FilterMulEmpModalComponent
  ],
  imports: [
    BaseModule,
    SharedModule,
    routing
  ],
  providers: [DataToolService, SQLExecService]
})
export class ProdscanqrcodeModule { }
