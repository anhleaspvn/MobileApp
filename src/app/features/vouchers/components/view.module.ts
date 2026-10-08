import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';

import { StepProductsFormComponent } from './step-products-form.component';
import { StepInfoFormComponent } from './step-info-form.component';
import { ProductsFormDetailComponent } from './products-form-detail.component'
import { SignaturePadModule } from 'angular2-signaturepad';
import { ApprovingSignatureComponent } from './approving-signature.component';

@NgModule({
  declarations: [
    ProductsFormDetailComponent,
    StepProductsFormComponent,
    StepInfoFormComponent,
    ApprovingSignatureComponent
    //ProductComponent
  ],
  imports: [
    SharedModule,
    SharedFiltersModule,
    SignaturePadModule
  ],
  exports: [
    ProductsFormDetailComponent,
    StepProductsFormComponent,
    StepInfoFormComponent,
    ApprovingSignatureComponent
   // ProductComponent
  ]
})
export class ViewModule { }
