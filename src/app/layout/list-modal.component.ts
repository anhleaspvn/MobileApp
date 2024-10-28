import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { ModalController, NavParams, AlertController } from '@ionic/angular';

import { SQLExecService } from '../shared/services';
import { ApiParameter } from 'src/app/shared/api-params';
import { IdentityService } from '../shared/services/identity.service'

import * as _ from 'lodash';
import { CommandType } from 'src/app/helpers';
import { identity } from 'lodash';


@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss'],
})
export class ListModalComponent implements OnInit {

  @Input() columnId: string;
  @Input() keyFilter: string;
  listModal: any;
  searchTerm: string;
  top: number = 50;
  totalCount: number = 0;
  model: string;
  loading: boolean = false;
  skeletons: any = [];
  apiParams: ApiParameter = new ApiParameter();
  submitting: boolean = false;
  titleList: string = "Mã , tên ....";
  column: any;
  ma_Kho: any;
  currentMaDvCs: string;

  @ViewChild('searchBar') searchBar: any;

  curentMa_DvCs: {};

  constructor(
    private modalController: ModalController,
    private sqlService: SQLExecService,
    private navParams: NavParams,
    private identityService: IdentityService

  ) {
      this.columnId = navParams.get('columnId'),
      this.keyFilter = navParams.get('keyFilter'),
      this.skeletons = Array(this.top).fill(0, 0).map((x, i) => i);
  }

  ngOnInit() {
    setTimeout(() => {
      this.filterlistModal();
      
    }, 10);
  }
  async filterlistModal() {
    
    this.loading = true;
    this.apiParams.strSQLExec = "Sp_Api_GetDanhMuc";
    this.apiParams.paraList = {
      keyFilter: this.keyFilter,
      columnId: this.columnId,
      KEYWORD: this.searchTerm,
      TOP: this.top,
      MA_DVCS : this.identityService.getStrCurrentMaDvCs(),
      //MA_DVCS: 'A03'
    };
     
    this.apiParams.cmdType = CommandType.StoredProcedure;
    const res = await this.sqlService.ExecuteReturnDt(this.apiParams);
    this.listModal = res || [];
    this.top = (res && res.length > 0) ? res[0]['totalCount'] : 0;

    this.apiParams = new ApiParameter();
    this.apiParams.strSQLExec = `SELECT ISNULL(Vietnamese, '') AS titleList FROM dbo.L00LANGUAGES WHERE Language_Id = '${this.columnId}' `;
    this.apiParams.cmdType = CommandType.Text;
    const res2 = await this.sqlService.ExecuteReturnDt(this.apiParams);
    if (res2)
      this.titleList = res2[0].titleList;

    this.loading = false;

  }

  loadMoreData(event, refresh: boolean = false) {
    setTimeout(async () => {
       
      this.top = this.top + 5;
      await this.filterlistModal();
      event.target.complete();
 
    }, 50);
  }

  async closeModal(ok: boolean = false, cusModel: string = '') {
    if (ok) {
       
      setTimeout(async () => {
        await this.modalController.dismiss(cusModel)
      }, 50);
    } else await this.modalController.dismiss(null);
  }

}
