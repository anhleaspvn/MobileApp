import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'displayApp'
})
export class DisplayAppImagePipe implements PipeTransform {

    transform(isApp?: boolean): any {
        return isApp? "phone-portrait-outline": "desktop-outline";
    }

}
