import { NgModule } from '@angular/core';

import { AutofocusDirective } from './autofocus.directive';
import { MatInputAutofocusDirective } from './mat-input-autofocus.directive';
import { aspMaskDirective } from './asp-mask.directive';
import { aspCurrencyMaskDirective } from './asp-currency-mask.directive';
import { InputMaxDirective, InputMinDirective } from './input-max-min.directive';
import { LongPressDirective } from './long-press.directive';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

const dics: any[] = [
  AutofocusDirective,
  MatInputAutofocusDirective,
  aspMaskDirective,
  aspCurrencyMaskDirective,
  InputMinDirective,
  InputMaxDirective,
  LongPressDirective
];

@NgModule({
  declarations: dics,
  exports: dics
})
export class AppDirectiveModule { }
