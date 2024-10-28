import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ViewModule } from './views/view.module';
import { BaseModule } from '../base/base.module';
import { ListComponent } from './list.component';
import { CreateComponent } from './create.component';
import { DetailComponent } from './detail.component';

const routing: ModuleWithProviders<OrderModule> = RouterModule.forChild([
  {
    path: 'list/:maCt',
    component: ListComponent,
  },
  {
    path: 'create/:maCt',
    component: CreateComponent,
  },
  {
    path: 'detail/:stt/:maCt',
    component: DetailComponent,
  }
]);

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    BaseModule,
    SharedModule,
    ViewModule,
    routing
  ]
})
export class OrderModule { }
