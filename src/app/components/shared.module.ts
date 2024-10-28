import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { NgxCurrencyModule } from "ngx-currency";

// import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
// import { OwlMomentDateTimeModule } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from '@danielmoncada/angular-datetime-picker';
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@suryapratap/angular-datetime-picker';
//import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';

import { AppPipeModule } from '../shared/pipes/app-pipe.module';
import { AppDirectiveModule } from '../shared/directives/app-directive.module';
import { LayoutModule } from '../layout/layout.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LongPressModule } from 'ionic-long-press';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { aspTimelineModule } from '../timelines/asp-timeline.module';
import { Configurations } from '../shared/cofigurations';

const OWL_MOMENT_FORMATS = {
  parseInput: 'l LT',
  fullPickerInput: 'l LT',
  datePickerInput: 'l',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
  declarations: [
    //FormatDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxCurrencyModule,
    LongPressModule,
    NgxChartsModule,
    RouterModule,
    LayoutModule,
    AppPipeModule,
    AppDirectiveModule,
    aspTimelineModule,
    PdfViewerModule,
    OwlDateTimeModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: Configurations.LOCALE},
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_FORMATS },
  ]
})
export class SharedModule { }


