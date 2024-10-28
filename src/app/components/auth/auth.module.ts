import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

import { NoAuthService } from '../../shared/services';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../shared.module';
import {ForgotPassWordComponent} from './forgot-pass-word.component'


const routing: ModuleWithProviders<AuthModule> = RouterModule.forChild([
  {
    path: '',
    component: AuthComponent
  }

]);

@NgModule({
  declarations: [
    AuthComponent,
    ForgotPassWordComponent
  ],
  providers: [NoAuthService],
  imports: [
    SharedModule,
    routing
  ],
  exports: [
    ForgotPassWordComponent
  ]
})
export class AuthModule { }
