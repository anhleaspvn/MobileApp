import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppConfig, enuEdit } from "src/app/helpers";
import { VoucherInfo } from "src/app/models/voucher";
import { VoucherService } from "src/app/shared/services";
import { aspPermission } from './../../shared/services/asp-permissions.service';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  routeLink: string = "";
  strMaCt: string;
  stt: string;

  info = new VoucherInfo();
  // info: VoucherInfo = {
  //   header: {},
  //   detail: []
  // };
  loading: boolean = false;

  constructor(
    private voucherService: VoucherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.strMaCt = this.route.snapshot.params.maCt;
    this.stt = this.route.snapshot.params.stt;

    route.data.subscribe((data) => {
      return this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    })
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getVoucher();
  }

  async getVoucher() {
    this.loading = true;
    const res = await this.voucherService.getVoucher(this.stt, this.strMaCt)
      .finally(() => (this.loading = false));
      
    this.info = new VoucherInfo(res?.table[0], res?.table1);
  }

  public edit(isConvert: string) {
    this.routeLink = "components/voucher/create/" + this.strMaCt;
    this.router.navigate([this.routeLink],{queryParams:{stt: this.stt, maCt_Convert: this.strMaCt, enuEdit:enuEdit.Edit} });
  }
}
