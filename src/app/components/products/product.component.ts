import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/helpers/nav-items';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  navs: NavItem[] = [
    { id: 'list', title: 'Quản lý sản phẩm', routerLink: '../product/list', icon: { name: 'list', color: 'asp' } },
    { id: 'checking_info', title: 'Kiểm tra thông tin', routerLink: '../product/checking', icon: { name: 'qr-code', color: 'secondary' } },
  ];

}
