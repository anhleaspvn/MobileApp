
import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

interface TrackByFunctionCache {
    [propertyName: string]: <T>(index: number, item: T) => any;
}

const cache: TrackByFunctionCache = Object.create(null);

@Pipe({
    name: 'trackByProperty',
    pure: true
})
export class TrackByPropertyPipe implements PipeTransform {
    transform(propertyName: string): any {
        if (!cache[propertyName]) {
            cache[propertyName] = function trackByProperty<T>(index: number, item: any): any {
                return (item[propertyName] ?? index);
            };
        }
        return (cache[propertyName]);
    }

}