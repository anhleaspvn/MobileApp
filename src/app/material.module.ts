import { Inject, Injectable, NgModule, Optional } from '@angular/core';

import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTreeModule } from "@angular/material/tree";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatListModule } from "@angular/material/list";
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from "@angular/material/radio";
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatDatepickerModule } from '@angular/material/datepicker';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

import {
  MatOptionModule,
  MatRippleModule,
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";

import * as moment from 'moment';
import { Configurations } from './shared/cofigurations';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Injectable({ providedIn: 'root' })
export class DateTimeService {
  public getFormat(): string {
    return 'YYYY-MM-DD'; // add you own logic here
  }
  public getLocale(): string {
    return 'vi'; // add you own logic here
  }
}

@Injectable()
export class CustomDateAdapter extends MomentDateAdapter {

  constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string) {
    super(dateLocale);
  }

  // public format(date: moment.Moment, displayFormat: string): string {
  //   // const locale = this._dateTimeService.getLocale();
  //   // const format = this._dateTimeService.getFormat();

  //   return date.locale('vi').format('YYYY-MM-DD');
  // }

  parse(value, parseFormat) {
    if (value && typeof value == 'string') {
      //console.log(moment(value, parseFormat, this.locale, true));
      return moment(value, parseFormat, this.locale, true);
    }
    return value ? moment(value).locale(this.locale) : undefined;
  }
}

@NgModule({
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatSortModule,
    MatDividerModule,
    MatRippleModule,
    MatSnackBarModule,
    MatMenuModule,
    CdkTreeModule,
    MatTreeModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatListModule,
    MatChipsModule,
    MatToolbarModule,
    MatCardModule,

    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,

    MatDialogModule,
    MatTooltipModule,

    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },

    { provide: MAT_DATE_LOCALE, useValue: Configurations.LOCALE },
    //{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class MaterialModule { }

