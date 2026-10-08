import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { AuthComponent } from './pages/auth.component';

import { NoAuthService } from 'src/app/core';
import { MaterialModule } from '../../shared/ui/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPassWordComponent } from './components/forgot-pass-word.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    ForgotPassWordComponent
  ],
  providers: [NoAuthService],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    ForgotPassWordComponent
  ]
})
export class AuthModule { }
