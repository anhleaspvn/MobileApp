import { NgModule } from "@angular/core";
import { DataToolService, SQLExecService } from "src/app/core";

import { SharedModule } from "src/app/shared/shared.module";
import { SharedUiModule } from "src/app/shared/ui/shared-ui.module";
import { ReportComponent } from "./pages/report.component";
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    SharedModule,
    SharedUiModule,
    ReportRoutingModule,
  ],
  providers: [DataToolService, SQLExecService],
})
export class ReportModule {}
