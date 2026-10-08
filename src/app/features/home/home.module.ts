
import { NgModule } from "@angular/core";
import { HomeComponent, FuncPipe } from "./pages/home.component";
import { AboutComponent } from "./components/about.component";
import { AppFunctionsResolveService } from "./data-access/app-functions-resolve.service";

import { SharedModule } from "src/app/shared/shared.module";
import { NotificationsComponent } from "./components/notifications.component";
import { HomeRoutingModule } from './home-routing.module';


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
    HomeRoutingModule,
  ],
})
export class HomeModule {}
