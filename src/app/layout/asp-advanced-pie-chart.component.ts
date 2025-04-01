import { Component, Input, OnInit } from '@angular/core';
import { SwimlaneAdvancedPieChartConfig, SwimlaneChartData } from '../shared';

@Component({
  selector: 'asp-advanced-pie-chart',
  templateUrl: './asp-advanced-pie-chart.component.html',
  styleUrls: ['./asp-advanced-pie-chart.component.scss'],
})
export class aspAdvancedPieChartComponent implements OnInit {

  @Input() config: SwimlaneAdvancedPieChartConfig = new SwimlaneAdvancedPieChartConfig();
  @Input() data: SwimlaneChartData[] = [];

  constructor() { }

  ngOnInit() { }

}
