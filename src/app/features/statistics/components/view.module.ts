import { NgModule } from '@angular/core';
import { StepInfoFormComponent } from './step-info-form.component';
import {StepProductsFormComponent} from './step-products-form.component';
import {SharedUiModule} from 'src/app/shared/ui/shared-ui.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { FilterComponent } from './filter.component';

const comps: any[] = [
  FilterComponent, StepInfoFormComponent, StepProductsFormComponent
];
@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    SharedModule,
    SharedFiltersModule,
    SharedUiModule
  ]
})
export class ViewModule { }
