import { isDevMode, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'totalCount'
})
export class TotalCountPipe implements PipeTransform {

    transform(arr: any[]): any {
        return arr ? arr[0]?.totalCount ?? arr.length : 0;
    }
}
