import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './pages/create.component';
import { DetailComponent } from './pages/detail.component';
import { ListComponent } from './pages/list.component';

const routes: Routes = [
  { path: 'list/:maCt', component: ListComponent },
  { path: 'create/:maCt', component: CreateComponent },
  { path: 'detail/:stt/:maCt', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
