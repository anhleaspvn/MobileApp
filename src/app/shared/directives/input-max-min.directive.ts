import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

//Validate min
@Directive({
  selector: '[inputMin][formControlName],[inputMin][formControl],[inputMin][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: InputMinDirective, multi: true }]
})
export class InputMinDirective {

  @Input()
  inputMin: number;

  validate(c: FormControl): { [key: string]: any } {
    let val = c.value;
    // if (isNaN(val) || /\D/.test(val.toString())) {
    //   return { "inputMin": true };
    // }
    return (val < this.inputMin) ? { "inputMin": true } : null;
  }

}

//Validate max
@Directive({
  selector: '[inputMax][formControlName],[inputMax][formControl],[inputMax][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: InputMaxDirective, multi: true }]
})
export class InputMaxDirective {

  @Input()
  inputMax: number;

  validate(c: FormControl): { [key: string]: any } {
    let val = c.value;
    // if (isNaN(val) || /\D/.test(val.toString())) {
    //   return { "inputMax": true };
    // }
    return (val > this.inputMax) ? { "inputMax": true } : null;
  }

}