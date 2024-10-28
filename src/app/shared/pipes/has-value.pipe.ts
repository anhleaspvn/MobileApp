import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasValue'
})
export class HasValuePipe implements PipeTransform {

  transform(value: any, type: string): boolean {
    switch (type) {
      case 'array': return (value != null && value != undefined && value != 'undefined' && value.length > 0)
      default: return (value != null && value != undefined && value != 'undefined');
    }
  }

}
