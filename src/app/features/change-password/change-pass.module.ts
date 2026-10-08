
import { ChangePassComponent } from './pages/change-pass.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
@NgModule({
  declarations: [
    ChangePassComponent
  ],
  imports: [
    SharedModule,
    ChangePasswordRoutingModule
  ]
})
export class ChangePassModule { }
