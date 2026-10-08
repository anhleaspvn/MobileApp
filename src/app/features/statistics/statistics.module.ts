import { NgModule } from '@angular/core';
import { ListComponent } from './pages/list.component';
import { DetailComponent } from './pages/detail.component';
import { DialogEditComponent } from './pages/dialog-edit.component';
import { DetailStepComponent } from './pages/detail-step.component';
import {SharedModule} from 'src/app/shared/shared.module';
import { ViewModule } from './components/view.module';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailStepComponent,
    DialogEditComponent,
    DetailComponent
  ],
  imports: [
    
    SharedFiltersModule,
    SharedModule,
    ViewModule,
    StatisticsRoutingModule
  ] 
})
export class StatisticsModule { }
