import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListReportComponent } from './pages/list-report.component';
import { ReportInfoComponent } from './pages/report-info.component';

const routes: Routes = [
  { path: 'list/:report_Id', component: ListReportComponent },
  { path: 'info/:report_Id', component: ReportInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportInfoRoutingModule {}
