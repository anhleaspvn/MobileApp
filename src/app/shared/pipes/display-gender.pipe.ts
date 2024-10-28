import { isDevMode, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'displayGender'
})
export class DisplayGenderPipe implements PipeTransform {

    transform(type?: string): string {
        switch (type?.toUpperCase()) {
            case 'NAM':
                return 'Nam';
            case 'NU':
                return 'Nữ';
            default:
                return 'Tùy chỉnh';
        }
    }

}
