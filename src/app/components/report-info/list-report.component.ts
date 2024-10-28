import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { NavItem } from "src/app/helpers/nav-items";

import { ApiParameter } from "src/app/shared/api-params";
import { IdentityService, aspPermission} from "src/app/shared/services";

import { ReportService } from './core/services/report.service';

@Component({
  selector: "app-list-report",
  templateUrl: "./list-report.component.html",
  styleUrls: ["./list-report.component.scss"],
})
export class ListReportComponent implements OnInit {
  
  strTitle: string;
  report_Id: string;
  apiParams: ApiParameter = new ApiParameter();
  navs: NavItem[] = [];
  perm : aspPermission;
  constructor(
    private identityService: IdentityService,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router    
  ) {
    
    this.report_Id = this.route.snapshot.params.report_Id;
    this.strTitle = this.route.snapshot.queryParamMap.get('strTitle');
  }

  ngOnInit() {
    setTimeout(() => {
      this.getReport().finally();
    }, 10);
  }

  async getReport() {
    let sw;
    this.identityService.currentSoftware.subscribe(res=> sw= res)
    const res = await this.reportService.GetReport(this.report_Id, sw);
    this.navs = res || [];
  }

  gotoReport(nav : any)
  {
    const routeLink= nav.routerLink + (nav.report_Id ? `/${nav.report_Id.split(",").join("/")}` : "");
    this.router.navigate([routeLink], {queryParams:{strTitle: nav.title ,  report_Parent : this.report_Id} });  
  }
}
