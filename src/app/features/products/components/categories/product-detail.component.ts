import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  @Input() product: any={};
  showSkeleton: boolean = true;

  constructor(
    private modalController: ModalController,
  ) {
    
  }

  ngOnInit() {
  }

  async closeModal(ok: boolean = false) {
    await this.modalController.dismiss(ok);
  }

}
