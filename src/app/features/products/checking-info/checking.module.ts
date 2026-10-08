import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { CheckingComponent } from '../pages/checking/checking.component';
import { CheckingRoutingModule } from './checking-routing.module';

@NgModule({
  declarations: [
    CheckingComponent
  ],
  imports: [
    SharedModule,
    SharedFiltersModule,
    CheckingRoutingModule
  ]
})
export class CheckingModule { }
