import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DataToolService, SQLExecService } from "../../../shared/services";

import { SharedModule } from "../../shared.module";
import { LayoutModule } from "../../../layout/layout.module";
import { ReportComponent } from "./report.component";

const routing: ModuleWithProviders<ReportModule> = RouterModule.forChild([
  {
    path: "",
    component: ReportComponent,
  },
  
]);

@NgModule({
  declarations: [ReportComponent],
  imports: [
    SharedModule,
    LayoutModule,
    routing,
  ],
  providers: [DataToolService, SQLExecService],
})
export class ReportModule {}
