import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exins',
  templateUrl: './exins.component.html',
  styleUrls: ['./exins.component.scss'],
})
export class ExinsComponent implements OnInit {
  @Input() vm: any;
  constructor() { }

  ngOnInit() {}

}
