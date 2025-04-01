import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { CommandType } from "src/app/helpers";
import { NavItem } from "src/app/helpers/nav-items";

import { ApiParameter } from "src/app/shared/api-params";
import { IdentityService, SQLExecService } from "src/app/shared/services";
import { environment } from "src/environments/environment";
import { ReportService } from "../../report-info/core";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {

  navs: NavItem[] = [];
  apiParams: ApiParameter = new ApiParameter();
  constructor(private reportService: ReportService,
    private identityService: IdentityService,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getReport().finally();
    }, 10);
  }

  async getReport() {
    let sw;
    this.identityService.currentSoftware.subscribe(res=> sw= res)
    // this.apiParams.strSQLExec = `SELECT * FROM dbo.L00MobileReport 
    //                             WHERE report_Parent ='' and Software_Id ='${sw}' ORDER BY DisplayOrder`;
    // this.apiParams.cmdType = CommandType.Text;
    const res = await this.reportService.GetMobileReport(sw).finally();
    this.navs = res;
  }

  gotoListReport(nav: any) {
    const routeLink = nav.routerLink + (nav.report_Id ? `/${nav.report_Id.split(",").join("/")}` : "");
    // this.router.navigateByUrl(routeLink);
    this.router.navigate([routeLink], { queryParams: { strTitle: nav.title } });
  }

  // navs: NavItem[] = [
  //   { id: 'inventory', title: 'Báo cáo tồn kho', routerLink: '../inventory', icon: { name: 'bar-chart-outline', color: 'asp'}},
  //   // { id: 'list', title: 'Báo cáo tổng hợp nhập xuất tồn', routerLink: '../list', icon: { name: 'bar-chart-outline', color: 'asp' } },
  //   // { id: 'lodate', title: 'Báo cáo tổng hợp nhập xuất tồn theo lô', routerLink: '../lodate', icon: { name: 'bar-chart-outline', color: 'asp' } },

  //   // { id: 'purchase-order', title: 'Báo cáo đơn đặt hàng', routerLink: '../purchase-order', icon: { name: 'bar-chart-outline', color: 'asp' } },
  //   // { id: 'delivery-schedule', title: 'Báo cáo tiến độ đơn hàng', routerLink: '../delivery-schedule', icon: { name: 'bar-chart-outline', color: 'asp' } },

  // ];
}
