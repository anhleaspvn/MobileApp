import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiParameter } from 'src/app/shared/api-params';
import { AlertController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../shared/utility.service';
import { DataToolService, IdentityService, SQLExecService, VoucherService } from '../../shared/services';
import { CommandType } from 'src/app/helpers';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { aspFlatNode, TreeNode } from '../../helpers';

import * as _ from 'lodash';
import { WarehousesService } from './core';
import { Params } from './models';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})

export class WarehouseComponent implements OnInit {


  store: any = Object.create(null);
  searchTerm: string = '';
  showSkeleton: boolean = true;
  top: number = 30;
  totalCount: number = 0;
  totalQuantity: number = 0;
  param: Params =  new Params();
  reportsBL: any[] = [];
  loading: boolean = true;

  displayedColumns: string[] = ['name'];

  constructor(
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private warehouseService: WarehousesService
  ) {
  
  }


  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }

  ionViewDidEnter() {
    this.getListKho();
  }

  private transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      value: node.value,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<aspFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: aspFlatNode) => node.expandable;


  async getListKho(){
    // this.loading = true;
    // const filterParams = {
    //   keyword: this.searchTerm
    // }
    // const res= await this.warehouseService.getDmKho(filterParams).finally(() => this.loading = false);
    // this.dataSource.data = this.fillRecursive(res);
    // this.loading = false;

  }
  fillRecursive(flatObjects: any[]) {

    // if (!flatObjects || flatObjects.length == 0) return [];
    // return _.filter(flatObjects, { ma_Kho_Cha: '' }).map(obj => {
    //   const result: TreeNode = {
    //     name: obj.ten_Kho_Cha,
    //     value: '',
    //     children: this.transformerTreeData(flatObjects, { ma_Kho_Cha: obj.ma_Kho }, 'ten_Kho_Cha')
    //   };
    //   return result;
    // });
  }


  private transformerTreeData(flatObjects: any[], filter: any, groupBy: string = ''): any[] {
    if (!flatObjects || flatObjects.length == 0)
      return [];
    
    const groupByData = _.chain(_.filter(flatObjects, filter))
      .groupBy(groupBy)
      .map((value, key) => ({ group_By: key, items: value }))
      .value();

    const result = _.map(groupByData, (obj) => {

      const node: TreeNode = {
        name: obj.group_By,
        value: '',
        children: _.map(obj.items, (item) => {
          // const child: TreeNode = {
          //   name: item.ma_Kho + " - " + item.ten_Kho,
          //   value: '',
          // };
          return null;
        })

      };
      return node;
    });
    return result;
  }

  async loadMoreData(event, refresh: boolean = false) {
    await this.getListKho();
    event.target.complete();
  }

  goToDetail(item: any) {
    if (!item) return;
    this.router.navigateByUrl('components/warehouse/product-detail/' + item.value);
  }
}

