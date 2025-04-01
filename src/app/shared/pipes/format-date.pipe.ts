
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  pipe = new DatePipe('en-US');
  transform(value: any, format: string = 'dd/MM/yyyy', momentFormat: boolean = false): any {
    const str = !momentFormat ? this.pipe.transform(value, format) : moment(value).format(format);
    return (!str || str.indexOf('1900') > -1 || str.indexOf('1905') > -1) ? '' : str;
  }

}
