import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import * as moment from 'moment';
import { aspService } from 'src/app/data-services';
import { CommonConstants } from 'src/app/helpers';
import { DataModalReturned } from 'src/app/shared';
import { EntryModel } from 'src/app/shared/entry-list-model';
import { StatisticsService } from '../core';
import { statisticsparams } from '../core/models';

@Component({
  selector: 'app-contract-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  @Input() filterParams!: statisticsparams;
  listFactory: any[]=[];
  listWorkshops: any[]=[];

  constructor(
    private statisticsService: StatisticsService,
    private modalController: ModalController,
  ) {

  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.statisticsService.GetListNhaMay().then(d => this.listFactory = d);
    this.statisticsService.GetListPhanXuong().then(d => this.listWorkshops = d);
  }

  ionViewWillEnter() {
    
  }

  async closeModal(ok?: boolean) {
    if (ok) {
      const dataReturned: DataModalReturned = {
        accepted: true,
        data: _.clone(this.filterParams)
      };
      await this.modalController.dismiss(dataReturned);
    } else {
      await this.modalController.dismiss(null);
    }
  }

  async removeFilter() {
    const dataReturned: DataModalReturned = {
      accepted: true,
      data: new statisticsparams()
    };
    await this.modalController.dismiss(dataReturned);
  }
}


