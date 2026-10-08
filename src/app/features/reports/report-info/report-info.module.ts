import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataToolService, SQLExecService } from 'src/app/core';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { ReportInfoRoutingModule } from './report-info-routing.module';
import { ListReportComponent } from './pages/list-report.component';
import { ReportInfoComponent } from './pages/report-info.component';
import { FiltersModalComponent } from './components/filters/filters-modal.component';


@NgModule({
  declarations: [ReportInfoComponent, ListReportComponent,FiltersModalComponent],
  imports: [
    SharedModule,
    SharedFiltersModule,
    ReportInfoRoutingModule,
  ],
  providers: [DataToolService, SQLExecService],
  
})
export class ReportInfoModule { }
