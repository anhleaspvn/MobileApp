import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import * as _ from "lodash";
import { ApiParameter, UtilityService } from "src/app/shared";
import { aspPermission, IdentityService } from "src/app/core";
import { QcinsService } from "../data-access/qcins.service";
import * as moment from "moment";
import { Router } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  perm: aspPermission = Object.create(null);
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();
  filterModel: FilterModel = {
    fromDate: moment().startOf('month').format('YYYY-MM-DD'),
    toDate: moment().format('YYYY-MM-DD'),
    top: 10,
  };
  searchTerm: any;
  woDocNo: any;
  allData: any[] = [];
  data: any[] = [];
  totalCount: number = 0;
  infiniteScrollDisabled: boolean = false;

  reportsBL: any[] = [];
  loading: boolean = true;
  param: { username: any; woDocNo: any; };

  private searchSubject: Subject<string> = new Subject<string>();
  private searchSub: Subscription;

  constructor(
    private qcinsService : QcinsService,
    private alertController: AlertController,
    private modalController: ModalController,
    private identityService: IdentityService,
    private utilityService: UtilityService,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.searchSub = this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((term) => {
        this.searchTerm = term;
        this.getList();
      });

    this.getList();
  }

  ngOnDestroy() {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }

  onSearchChange(term: string) {
    this.searchSubject.next(term || '');
  }

  loadMoreData(event, refresh: boolean = false) {
    if (refresh) {
      setTimeout(async () => {
        await this.getList(true, true);
        event.target.complete();
      }, 20);
    } else {
      setTimeout(() => {
        this.filterModel.top = (this.filterModel.top ?? 10) + 10;
        this.data = this.allData.slice(0, this.filterModel.top);
        event.target.complete();
        if (this.filterModel.top >= this.totalCount) {
          this.infiniteScrollDisabled = true;
        }
      }, 100);
    }
  }

  async getList(isLoading: boolean = true, resetTop: boolean = true) {
    this.loading = isLoading;
    if (resetTop) {
      this.filterModel.top = 10;
      this.infiniteScrollDisabled = false;
    }
    var res = await this.qcinsService.GetListQCInspection(0, this.filterModel.fromDate, this.filterModel.toDate, this.searchTerm).finally(() => this.loading = false);
    this.allData = res || [];
    this.totalCount = this.allData.length;
    this.data = this.allData.slice(0, this.filterModel.top);
    if (this.filterModel.top >= this.totalCount) {
      this.infiniteScrollDisabled = true;
    }
  }
  
  onDateChange() {
    if (!this.utilityService.hasValue(this.filterModel.toDate)) {
      return;
    }
    //this.filterModel.fromDate = this.filterModel.fromDate.format('YYYY-MM-DD');
    this.filterModel.toDate = this.filterModel.toDate.format('YYYY-MM-DD');
    this.getList();
  }

  async view_createexins(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/create-exins/" + item.headerID
      );
  }

  async view_exinsdetail(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/exins/" + item.headerID
      );
  }

  async view_dim(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/create-dim/" + item.headerID
      );
  }

  async view_dimdetail(item: any) {
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/dim/" + item.headerID
      );
  }

  async view_edit(item: any){
    if (item)
      this.router.navigateByUrl(
        "components/qcinspection/edit/" + item.headerID
      );
  }

  async delete(item: any){
    const alert = await this.alertController.create({
      header: 'Thông báo!',
      message: 'Xoá thông tin',
      buttons: [
        {
          text: 'Huỷ bỏ',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Xác nhận',
          handler: async () => {
            const check = await this.qcinsService.DeleteIQCHeader(item);
            setTimeout(() => {
              this.getList();
            }, 1);
          }
        }
      ]
      }); await alert.present();
  }

  trackBy(index: number, item: any) {
    return item?.headerID ?? index;
  }
}

interface FilterModel {
  fromDate: any;
  toDate: any;
  top?: number;
  keyword?: string;
}
