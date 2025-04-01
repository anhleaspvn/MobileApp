import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Pipe({
  name: 'formatColumn'
})
export class FormatColumnPipe implements PipeTransform {

  transform(value: any, type?: string) {
    switch (type) {
      case 'array': return value ;
      default: return (value != null && value != undefined && value != 'undefined');
    }
  }
}
