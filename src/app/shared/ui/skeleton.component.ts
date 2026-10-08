import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asp-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {

  skeletons: any = [];

  constructor() { 
    this.skeletons = Array(20).fill(0, 0).map((x, i) => i);
  }

  ngOnInit() {}

}
