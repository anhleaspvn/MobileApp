import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import { EmpScanService } from "./core/services/empscan.service"
import { UtilityService } from "src/app/shared";
import { IdentityService } from "src/app/shared/services";

import * as _ from "lodash";
import * as moment from "moment";

@Component({
  selector: 'app-list-ins-machine',
  templateUrl: './list-ins-machine.component.html',
  styleUrls: ['./list-ins-machine.component.scss'],
})
export class ListInsMachineComponent implements OnInit {
  searchTerm: string = "";
  filterModel: FilterModel = {
      fromDate: moment().format('YYYY-MM-DD'),
      toDate: moment().format('YYYY-MM-DD'),
      top: 10,
    };
  loading: boolean = true;
  routeLink: string = "";
  today: any = new Date();
  userName: any;
  data: any = [];
  model: any = [];
  isNativePlatform: boolean = true;
  platformStr: string = 'web';

  constructor(private empScanService: EmpScanService,
              private utilityService: UtilityService,
              private identityService: IdentityService) { }

  ngOnInit() {}
  ionViewWillEnter() {
    setTimeout(() => {
      this.getList();
    }, 1);
  }

  async getList(isLoading: boolean = true) {
    this.loading = isLoading;
    this.userName = this.getStrCurrentUser();
    const res = await this.empScanService.GetMachineInsByLine(this.userName, this.filterModel.fromDate, this.filterModel.toDate, 0);
    if (res && res.length > 0) {
      this.data = res;
      this.model = _.cloneDeep(this.data);
    } else {
      this.data = [];
      this.model = [];
    }
    this.loading = false;
  }

  private getStrCurrentUser() {
    let strCurrentUser='';
    this.identityService.currentUser.subscribe(res => {
      strCurrentUser = res.Member_ID;
    }); 
    return strCurrentUser;
  }

  onDateChange() {
    if (!this.utilityService.hasValue(this.filterModel.toDate)) {
      return;
    }
    //this.filterModel.fromDate = this.filterModel.fromDate.format('YYYY-MM-DD');
    this.filterModel.toDate = this.filterModel.toDate.format('YYYY-MM-DD');
    this.getList();
  }
}

interface FilterModel {
  fromDate: any;
  toDate: any;
  top?: number;
  keyword?: string;
}
