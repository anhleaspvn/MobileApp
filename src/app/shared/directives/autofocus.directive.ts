import { Input, Directive, AfterViewInit, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {

  condition: boolean;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
     
    setTimeout(() => { this.el.nativeElement.focus() }, 500);
  }

}
