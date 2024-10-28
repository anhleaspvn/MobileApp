import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListReportComponent } from './list-report.component';
import { ReportInfoComponent } from './report-info.component';
import { SharedModule } from 'src/app/components/shared.module';
import { DataToolService, SQLExecService } from 'src/app/shared/services';
import { BaseModule } from '../base/base.module';
import { FiltersModalComponent } from './filters/filters-modal.component';


const routing : ModuleWithProviders<ReportInfoModule> = RouterModule.forChild([
  {
    path: "list/:report_Id",
    component: ListReportComponent
  },
  {
    path: "info/:report_Id",
    component: ReportInfoComponent
  },
]);


@NgModule({
  declarations: [ReportInfoComponent, ListReportComponent,FiltersModalComponent],
  imports: [
    SharedModule,
    BaseModule,
    routing,
  ],
  providers: [DataToolService, SQLExecService],
  
})
export class ReportInfoModule { }
