
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent, FuncPipe } from "./home.component";
import { AboutComponent } from "./about.component";
import { AppFunctionsResolveService } from "./app-functions-resolve.service";

import { SharedModule } from "../../shared.module";
import { ChangePassModule } from "../../changepass/change-pass.module";
import { NotificationsComponent } from "./notifications.component";

import { AppConfig } from "src/app/helpers";

// import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    NotificationsComponent,
    HomeComponent,
    AboutComponent,
    FuncPipe,
  ],
  imports: [
    SharedModule,
    ChangePassModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
        resolve: {
          [AppConfig.APP_FNS_RESOLVER_KEY]: AppFunctionsResolveService,
        },
      },
    ]),
  ],
})
export class HomeModule {}
