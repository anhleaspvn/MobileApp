import { NgModule } from '@angular/core';
import { StepInfoFormComponent } from './step-info-form.component';
import {StepProductsFormComponent} from './step-products-form.component';
import {LayoutModule} from '../../../layout/layout.module';
import { SharedModule } from '../../shared.module';
import { BaseModule } from '../../base/base.module';
import { FilterComponent } from './filter.component';

const comps: any[] = [
  FilterComponent, StepInfoFormComponent, StepProductsFormComponent
];
@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    SharedModule,
    BaseModule,
    LayoutModule
  ]
})
export class ViewModule { }
