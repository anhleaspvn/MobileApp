import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './pages/detail.component';
import { DetailStepComponent } from './pages/detail-step.component';
import { DialogEditComponent } from './pages/dialog-edit.component';
import { ListComponent } from './pages/list.component';

const routes: Routes = [
  { path: 'list/:maCt', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'detail-step', component: DetailStepComponent },
  { path: 'dialog-edit', component: DialogEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
