import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { BaseModule } from "../../base/base.module";

import { StepProductsFormComponent } from "./step-products-form.component";
import { StepInfoFormComponent } from "./step-info-form.component";
import { ProductsFormDetailComponent } from "./products-form-detail.component";
import { ProductComponent } from "../../products/product.component";
import { ProductFilterModalComponent } from "./product-filter-modal.component";

@NgModule({
  declarations: [
    ProductFilterModalComponent,
    ProductsFormDetailComponent,
    StepProductsFormComponent,
    StepInfoFormComponent,
    //ProductComponent
  ],
  imports: [SharedModule, BaseModule],
  exports: [
    ProductFilterModalComponent,
    ProductsFormDetailComponent,
    StepProductsFormComponent,
    StepInfoFormComponent,
    // ProductComponent
  ],
})
export class ViewModule {}
