import { Component, Input, OnInit } from '@angular/core';
import { SwimlaneBarHorizontalChartConfig, SwimlaneChartData } from '../shared';

@Component({
  selector: 'asp-bar-horizontal-chart',
  templateUrl: './asp-bar-horizontal-chart.component.html',
  styleUrls: ['./asp-bar-horizontal-chart.component.scss'],
})
export class aspBarHorizontalChartComponent implements OnInit {

  @Input() config: SwimlaneBarHorizontalChartConfig = new SwimlaneBarHorizontalChartConfig();
  @Input() data: SwimlaneChartData[] = [];

  constructor() { }

  ngOnInit() { }

}
