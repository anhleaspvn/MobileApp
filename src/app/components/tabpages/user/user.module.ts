import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: UserComponent }])
  ]
})
export class UserModule { }
