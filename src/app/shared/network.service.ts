import { Injectable } from '@angular/core';
//import { Network } from '@ionic-native/network/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { Platform } from '@ionic/angular';
import { fromEvent, merge, of, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private online$: Observable<boolean> = undefined;

  constructor(public network: Network, public platform: Platform) {
    this.online$ = Observable.create(observer => {
      observer.next(true);
    }).pipe(mapTo(true));

    if (this.platform.is('hybrid')) {
      // on Device
      this.online$ = merge(
        this.network.onConnect().pipe(mapTo(true)),
        this.network.onDisconnect().pipe(mapTo(false))
      );
    } else {
      // on Browser
      this.online$ = merge(
        of(navigator.onLine),
        fromEvent(window, 'online').pipe(mapTo(true)),
        fromEvent(window, 'offline').pipe(mapTo(false))
      );
    }
  }

  public getNetworkType(): string {
    return this.network.type;
  }

  public getNetworkStatus(): Observable<boolean> {
    return this.online$;
  }

  public getNetworkOnline() {
    const promise = new Promise((resolve, reject) => {
      this.online$.subscribe((res) => {
        resolve(res);
      }, (err) => { reject(err) });
    });
    return promise;
  }

}
