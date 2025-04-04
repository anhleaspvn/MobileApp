import { Directive, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[matInputAutofocus]'
})
export class MatInputAutofocusDirective implements OnInit {

  constructor(private matInput: MatInput) {

  }

  ngOnInit() {
    setTimeout(() => { this.matInput.focus() }, 500);
  }

}
