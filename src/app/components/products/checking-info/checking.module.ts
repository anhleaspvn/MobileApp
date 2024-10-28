import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { BaseModule } from '../../base/base.module';
import { CheckingComponent } from './checking.component';
import { RouterModule } from '@angular/router';

const routing: ModuleWithProviders<CheckingModule> = RouterModule.forChild([
  {
    path: 'checking',
    component: CheckingComponent,
  }
]);

@NgModule({
  declarations: [
    CheckingComponent
  ],
  imports: [
    SharedModule,
    BaseModule,
    routing
  ]
})
export class CheckingModule { }
