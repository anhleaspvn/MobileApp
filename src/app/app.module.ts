import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy, IonRouterOutlet } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDirectiveModule } from './shared/directives/app-directive.module';
import { AuthInterceptor, HttpErrorInterceptor } from './shared/interceptors';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { NetworkService } from './shared/network.service';
import { IdentityService, StorageService } from './shared/services';

import { LongPressModule } from 'ionic-long-press';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

@Injectable()
export class aspGestureConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new (<any>window).Hammer(element,{
      touchAction: "pan-y"
    });
    for (const eventName in this.overrides) {
      if (eventName) {
        mc.get(eventName).set(this.overrides[eventName]);
      }
    }
    return mc;
  }
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
    }),
    IonicStorageModule.forRoot(),

    AppRoutingModule,
    BrowserAnimationsModule,
    LongPressModule,
    MaterialModule,
    AppDirectiveModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    Network,
    NetworkService,
    BarcodeScanner,
    SpeechRecognition,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    StorageService,
    IdentityService,
    {
      provide: APP_INITIALIZER,
      useFactory: (identityS: IdentityService) => () => { return identityS.populate() },
      deps: [IdentityService],
      multi: true
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: aspGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
