
import { ChangePassComponent } from './change-pass.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';


const routing: ModuleWithProviders<ChangePassModule> = RouterModule.forChild([
  {
    path: 'changepass',
    component: ChangePassComponent,
  }
]);
@NgModule({
  declarations: [
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    routing
  ]
})
export class ChangePassModule { }
