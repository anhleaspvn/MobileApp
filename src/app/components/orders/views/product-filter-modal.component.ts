import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommandType } from 'src/app/helpers';
import { ApiParameter } from 'src/app/shared/api-params';
import { SQLExecService } from 'src/app/shared/services';
import { OrderService } from '../core';

@Component({
  selector: 'app-product-filter-modal',
  templateUrl: './product-filter-modal.component.html',
  styleUrls: ['./product-filter-modal.component.scss'],
})
export class ProductFilterModalComponent implements OnInit {

  products: any[];
  searchTerm: string;
  top: number = 30;

  radioModel: string;
  model: any;
  apiParams: ApiParameter = new ApiParameter();

  loading: boolean = false;

  constructor(
    private modalController: ModalController,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.filterProducts();
   }

  async filterProducts() {
    this.loading = true;
    const filterParams = {
      KEYWORD: this.searchTerm,
      TOP: this.top
    };
    this.apiParams.cmdType = CommandType.StoredProcedure;
    const res = await this.orderService.GetListProductForSale(filterParams).finally(() => this.loading = false);
    this.products = res;
  }

  async onChangeRadio(item) {
    if (item) {
      item.stt0 = new Date().valueOf().toString();
    }
    if (item) {
      await this.modalController.dismiss(item)
    } else await this.modalController.dismiss(null);
  }

  async closeModal(ok: boolean = false) {

    await this.modalController.dismiss(null);
  }

  loadMoreData(event) {
    setTimeout(async () => {
      this.top = this.top + 10;
      await this.filterProducts();
      event.target.complete();
      const _total = (this.products && this.products.length > 0) ? this.products[0].totalCount : 0;
      event.target.disabled = (this.top >= _total);
    }, 50);
  }

}
