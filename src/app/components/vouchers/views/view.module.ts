import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { BaseModule } from '../../base/base.module';

import { StepProductsFormComponent } from './step-products-form.component';
import { StepInfoFormComponent } from './step-info-form.component';
import { ProductsFormDetailComponent } from './products-form-detail.component'
import { ProductComponent  } from '../../products/product.component';
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
    BaseModule,
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
