import { Component, Input, OnInit } from '@angular/core';

export interface TimelineItem {
  title: string;
  content?: string;
  icon?: string;
  time?: TimelineTime
}

export interface TimelineTime {
  title?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  @Input('endIcon') endIcon = "ionic";

  constructor() { }

  ngOnInit() { }

}

@Component({
  selector: 'timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent {
  constructor() {

  }
}


@Component({
  selector: 'timeline-time',
  template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
})
export class TimelineTimeComponent {
  @Input('time') time: TimelineTime = {};
  constructor() {

  }
}

