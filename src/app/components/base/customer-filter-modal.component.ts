import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommandType } from 'src/app/helpers';
import { ApiParameter } from 'src/app/shared/api-params';
import { SQLExecService } from 'src/app/shared/services';

import * as _ from 'lodash';

@Component({
  selector: 'app-customer-filter-modal',
  templateUrl: './customer-filter-modal.component.html',
  styleUrls: ['./customer-filter-modal.component.scss'],
})
export class CustomerFilterModalComponent implements OnInit {

  customers: any[];
  searchTerm: string;
  top: number = 100;

  radioModel: string;
  model: any;
  apiParams: ApiParameter = new ApiParameter();

  listModal: any;

  loading: boolean = false;

  constructor(
    private modalController: ModalController,
    private sqlService: SQLExecService
  ) { }

  ngOnInit() {
    this.filter();
  }

  async filter() {
    this.loading = true;

    this.apiParams.strSQLExec = "sp_API_GetListCustomers";
    this.apiParams.paraList = {
      KEYWORD: this.searchTerm,
      TOP: this.top
    };

    this.apiParams.cmdType = CommandType.StoredProcedure;
    const res = await this.sqlService.ExecuteReturnDt(this.apiParams).finally(() => this.loading = false);
    this.customers = res;
  }

  async onSelectedItem(item) {
    await this.modalController.dismiss(item)
  }

  // async onChangeRadio(item) {
  //   if (item) {
  //     item.stt0 = new Date().valueOf().toString();
  //   }
  //   if (item) {
  //     await this.modalController.dismiss(item)
  //   } else await this.modalController.dismiss(null);
  // }

  async closeModal(ok: boolean = false) {
    await this.modalController.dismiss(null);
  }

  loadMoreData(event) {
    setTimeout(async () => {
      this.top = this.top + 10;
      await this.filter();
      event.target.complete();
      const _total = (this.customers && this.customers.length > 0) ? this.customers[0].totalCount : 0;
      event.target.disabled = (this.top >= _total);
    }, 50);
  }

}
