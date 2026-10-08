import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SharedFiltersModule } from "src/app/shared/ui/filters/shared-filters.module";

import { StepProductsFormComponent } from "./step-products-form.component";
import { StepInfoFormComponent } from "./step-info-form.component";
import { ProductsFormDetailComponent } from "./products-form-detail.component";
import { ProductFilterModalComponent } from "./product-filter-modal.component";

@NgModule({
  declarations: [
    ProductFilterModalComponent,
    ProductsFormDetailComponent,
    StepProductsFormComponent,
    StepInfoFormComponent,
    //ProductComponent
  ],
  imports: [SharedModule, SharedFiltersModule],
  exports: [
    ProductFilterModalComponent,
    ProductsFormDetailComponent,
    StepProductsFormComponent,
    StepInfoFormComponent,
    // ProductComponent
  ],
})
export class ViewModule {}
