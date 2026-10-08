
import { Inject, Injectable, Optional } from '@angular/core';
import { LAZY_MAPS_API_CONFIG, LazyMapsAPILoaderConfigLiteral, MapsAPILoader } from '@agm/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  readonly GEOCODE_API_URL: string = 'https://maps.google.com/maps/api/geocode/json';

  coordinates: any;

  private geoCoder!: any;

  constructor(
    private http: HttpClient,
    private mapsAPILoader: MapsAPILoader,
    @Optional() @Inject(LAZY_MAPS_API_CONFIG) private lazyMapAPIConfig: LazyMapsAPILoaderConfigLiteral
  ) {
    this.mapsAPILoader.load().then(() => {
       this.geoCoder = new google.maps.Geocoder();
    });
  }

  public getCurrentPosition(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos: any) => {
          resolve(pos);
        }),
          (err) => {
            console.log('Position is not available');
            console.error(JSON.stringify(err));
            reject(err);
          },
        {
          enableHighAccuracy: true, timeout: 5000, maximumAge: 0
        };
      } else {
        reject({ status: false, msg: 'No support for geolocation' });
      }
    });
    return promise;
  }

  public async getGeocode(lat: number, lng: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.geoCoder?.geocode({ 'location': { lat: lat, lng: lng } }, (results, status) => {
        if (status === 'OK') {
          resolve(results);
        } else {
          reject('Geocoder failed due to: ' + status);
        }
      });
    });
  }

  public async getGeocoderHttpClient(lat: number, lng: number) {

    const params = new HttpParams({
      fromObject: {
        latlng: `${lat},${lng}`,
        key: this.lazyMapAPIConfig.apiKey
      }
    });
    const res = await this.http.get(this.GEOCODE_API_URL, {
      params: params
    }).toPromise<any>();
    return res;
  }

}
