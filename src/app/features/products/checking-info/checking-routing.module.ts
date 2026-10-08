import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckingComponent } from '../pages/checking/checking.component';

const routes: Routes = [{ path: 'checking', component: CheckingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckingRoutingModule {}
