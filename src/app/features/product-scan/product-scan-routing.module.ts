import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailInsMachineComponent } from './pages/detail-ins-machine.component';
import { ListInsMachineComponent } from './pages/list-ins-machine.component';
import { ListMachineComponent } from './pages/list-machine.component';
import { ListComponent } from './pages/list.component';
import { OpscanComponent } from './pages/opscan.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'list-machine', component: ListMachineComponent },
  { path: 'list-ins-machine', component: ListInsMachineComponent },
  { path: 'detail-ins-machine/:autoID', component: DetailInsMachineComponent },
  { path: 'opscan', component: OpscanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductScanRoutingModule {}
