import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDataURI'
})
export class DisplayDataUriPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? `data:image/jpeg;base64,${value}` : '';
  }

}
