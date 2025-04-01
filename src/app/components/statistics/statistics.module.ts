import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list.component';
import {DetailComponent} from './detail.component';
import {DialogEditComponent} from './dialog-edit.component'
import {DetailStepComponent} from './detail-step.component'
import {SharedModule} from '../shared.module';
import { ViewModule } from './views/view.module';
import { RouterModule } from '@angular/router';
import { BaseModule } from '../base/base.module';

const routing : ModuleWithProviders<StatisticsModule> = RouterModule.forChild([
  {
    path: 'list/:maCt',
    component: ListComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'detail-step',
    component: DetailStepComponent,
  },
  {
    path: 'dialog-edit',
    component: DialogEditComponent,
  },
]);

@NgModule({
  declarations: [
    ListComponent,
    DetailStepComponent,
    DialogEditComponent,
    DetailComponent
  ],
  imports: [
    
    BaseModule,
    SharedModule,
    ViewModule,
    routing
  ] 
})
export class StatisticsModule { }
