import { NgModule } from '@angular/core';

import { UserComponent } from './pages/user.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
