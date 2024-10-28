import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {
  DateRange, DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY, MatCalendar,
} from '@angular/material/datepicker';
import * as _ from 'lodash';

import { Moment } from 'moment';
import * as moment from 'moment';
import { PageLifeCycle } from '../shared';

@Component({
  selector: 'asp-date-filter',
  templateUrl: './asp-date-filter.component.html',
  styleUrls: ['./asp-date-filter.component.scss'],
  providers: [{
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: DefaultMatCalendarRangeStrategy
  }]
})
export class aspDateFilterComponent implements OnInit, AfterViewInit {

  minDate: any = new Date(1990, 1, 1);
  maxDate: any = new Date();

  @Input() fromDate!: Moment;
  @Input() toDate!: Moment;
  @Input() format: string = 'DD/MM/YYYY';
  @Input() classList: string[] = [];

  @Output() fromDateChange: EventEmitter<any> = new EventEmitter();
  @Output() toDateChange: EventEmitter<any> = new EventEmitter();

  campaignFrom = moment().startOf('month');
  campaignTo = moment();

  flagForButtonToggle: string = 'from';

  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;

  selectedDateRange: DateRange<Moment>;
  //selectedRangeValueChange = new EventEmitter<DateRange<Date>>();

  constructor() {

  }

  ngAfterViewInit(): void {
    
  }
 
  ngOnInit(): void {
    if (this.fromDate && this.toDate) {
      this.campaignFrom = moment(this.fromDate);
      this.campaignTo = moment(this.toDate);
      this.selectedDateRange = new DateRange(this.campaignFrom, this.campaignTo);
    }

  }

  setFormat = (d: Moment) => moment(d, this.format).format(this.format);

  onButtonToggleChange(ev: MatButtonToggleChange) {
    this.flagForButtonToggle = ev.value;
    if (ev.value == 'from') {
      this.minDate = new Date(1990, 1, 1);
      this.maxDate = _.clone(this.campaignTo);
    } else {
      this.minDate = _.clone(this.campaignFrom);
      this.maxDate = new Date();
    }
  }

  onSelectedChange(ev: any): void {
    if (this.flagForButtonToggle == 'from') {
      this.fromDate = moment(ev);
      this.campaignFrom = ev;
    } else {
      this.campaignTo = ev;
      this.toDate = moment(ev);
    }
    this.fromDateChange.emit(this.fromDate);
    this.toDateChange.emit(this.toDate);
    this.selectedDateRange = new DateRange(this.campaignFrom, this.campaignTo);
    //this.selectedDateRange = new DateRange(moment(this.fromDate).toDate(), moment(this.toDate).toDate());
    // if (
    //   this.selectedDateRange &&
    //   this.selectedDateRange.start &&
    //   ev > this.selectedDateRange.start &&
    //   !this.selectedDateRange.end
    // ) {
    //   this.selectedDateRange = new DateRange(
    //     this.selectedDateRange.start, ev
    //   );
    // } else {
    //   this.selectedDateRange = new DateRange(test, test2);
    // }
  }

  selectedChange($event) {
    
    // const m = moment($event);

    // if (!this.selectedRangeValue.end) {
    //   const start = this.selectedRangeValue.start;
    //   // @ts-ignore the parser thinks that this is a date, but it is a moment.js object, so this will work
    //   start.set(m.toObject());
    //   this.selectedRangeValue = new DateRange<Date>(start, undefined);
    //   this.selectedRangeValueChange.emit(this.selectedRangeValue);
    // } else {
    //   const end = (!this.selectedRangeValue.end) ? this.selectedRangeValue.end : moment(m);
    //   // @ts-ignore the parser thinks that this is a date, but it is a moment.js object, so this will work
    //   end.set(m.toObject());
    //   // @ts-ignore the parser thinks that this is a date, but it is a moment.js object, so this will work
    //   this.selectedRangeValue = new DateRange<Date>(this.selectedRangeValue.start, end);
    //   if (this.selectedRangeValue.end < this.selectedRangeValue.start) {
    //     this.selectedRangeValue = new DateRange<Date>(this.selectedRangeValue.end, this.selectedRangeValue.start);
    //   }
    //   this.selectedRangeValueChange.emit(this.selectedRangeValue);
    // }
  }

}
