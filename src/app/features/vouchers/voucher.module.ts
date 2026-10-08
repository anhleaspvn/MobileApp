import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewModule } from './components/view.module';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { ListComponent } from './pages/list.component';
import { CreateComponent } from './pages/create.component';
import { DetailComponent } from './pages/detail.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { VouchersRoutingModule } from './vouchers-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    SharedFiltersModule, 
    SharedModule,
    ViewModule,
    SignaturePadModule,
    VouchersRoutingModule
  ]
})
export class VoucherModule { }
