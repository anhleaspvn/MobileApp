import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { DataToolService, SQLExecService, VoucherService } from '../../shared/services';

import { ApiParameter } from 'src/app/shared/api-params';
import { IdentityService } from '../../shared/services'
import * as _ from 'lodash';
import { UtilityService } from '../../shared/utility.service';
import { CommandType } from '../../helpers';
import { InventoryService } from './core/services/inventory.service';
@Component({
  selector: 'app-filter-inventories-modal',
  templateUrl: './filter-inventories-modal.component.html',
  styleUrls: ['./filter-inventories-modal.component.scss'],
})
export class FilterInventoriesModalComponent implements OnInit {

  model: any;
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string ='';
  member_Id: string ='';
  inventories: any[] = [];
  apiParams: ApiParameter = new ApiParameter();
  constructor(
    private identityService: IdentityService,
    private sqlService: SQLExecService,
    private modalController: ModalController,
    public _utilityService: UtilityService,
    private navParams: NavParams,
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
    this.filterInventories();
  }
  ionViewDidEnter(){
    
  }
  async filterInventories() {
  
    this.loading = true;
    this.member_Id = await this.identityService.getStrMemberId();
    const res = await this.inventoryService.FilterInventories(this.member_Id,this.searchTerm).finally(() => this.loading = false);
    this.inventories = res;

  }

  async onChangeRadio(item) {
    await this.modalController.dismiss(item);
  }

  async closeModal(ok: boolean = false) {
    if (ok) {
      await this.modalController.dismiss(this.model);
    } else {
      await this.modalController.dismiss(null);
    }
  }

}
