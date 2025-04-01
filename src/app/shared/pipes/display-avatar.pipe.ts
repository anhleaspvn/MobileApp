import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Pipe({
    name: 'displayAvatar'
})
export class DisplayCardImagePipe implements PipeTransform {

    transform(url?: string, gender?: string): any {
        let defaultUrl = location.origin;
        switch (gender) {
            case 'NAM':
                defaultUrl += '/assets/images/noavatar-male.png';
                break;
            case 'NU':
                defaultUrl += '/assets/images/noavatar-famale.png';
                break;
            default:
                defaultUrl = environment.baseResources +'/images/default-image_450.png';
                break;
        }
        return (url && url != '') ? 'data:image/jpeg;base64,'+ url : defaultUrl;
    }

}
