import { Directive, Attribute, ElementRef, AfterViewInit, HostListener, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[aspCurrencyMask]',
  host: {
    '(aspModelChange)': 'onInputChange($event)'
  },
  providers: [NgModel],
  inputs: ['aspModel', 'aspModelChange']
})
export class aspCurrencyMaskDirective implements AfterViewInit, OnChanges {

  @Input('aspModel') aspModel: any;
  @Output('aspModelChange') aspModelChange: EventEmitter<any> = new EventEmitter<any>();

  optionsTemplate: any = {
    align: 'left',
    allowNegative: true,
    decimal: ',',
    precision: 0,
    default: null,
    prefix: '',
    suffix: '',
    thousands: '.'
  };

  modelValue: string;
  viewValue: string;

  constructor(
    public model: NgModel,
    private elementRef: ElementRef,
    @Attribute("aspCurrencyMask") maskOptions: any
  ) {
    this.optionsTemplate = Object.assign({}, this.optionsTemplate, maskOptions);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.getInputElement().then(input => {
       
      const currentValue = changes.aspModel.currentValue || changes.aspModel.previousValue;
      const val = (currentValue && !isNaN(currentValue)) ? this.format(currentValue.toString()) : this.optionsTemplate.default;
      input.value = val;
      // this.aspModelChange.emit(val);
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.textAlign = this.optionsTemplate.align;
    // this.elementRef.nativeElement.getInputElement().then(input => {
    //   const val = (this.aspModel && !isNaN(this.aspModel)) ? this.format(this.aspModel.toString()) : '0';
    //   input.value = val;
    // });
  }

  @HostListener('input', ["$event"])
  handleInput(event: any) {

    this.viewValue = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    this.writeValue(event.target, this.viewValue);
    this.aspModel = this.getaspModel(event.target.value);
    this.aspModelChange.emit(this.aspModel);
  }

  onInputChange($event) {
     
  }

  getaspModel(valStr) {
    const val = this.unFormat(valStr).replace(/ /, '').replace(this.optionsTemplate.suffix.trim(), '').replace(this.optionsTemplate.prefix.trim(), '');
    return !isNaN(val) ? +val : this.optionsTemplate.default;
  }

  writeValue(target, value) {
    const valueFormat = this.format(value);
    return target.value = valueFormat;
  }

  format(valString: string): string {
    if (!valString) {
      return '';
    }

    const val = valString.toString();
    const parts = this.unFormat(val).split(this.optionsTemplate.thousands);
    const thousand = val.indexOf('.') > -1;
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.optionsTemplate.decimal) + (thousand ? '.' : '') + (!parts[1] ? '' : parts[1]) + (this.optionsTemplate.suffix);
  }

  unFormat(val) {
    if (!val) return '';

    val = val.replace(/^0+/, '');

    if (this.optionsTemplate.decimal == ',') {
      return val.replace(/,/g, '');
    } else {
      return val.replace(/\./g, '');
    }
  };

  validate(value: string): boolean {
    return /^-?\d*[.,]?\d*$/.test(value);
  }

  isChromeAndroid(): boolean {
    return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
  }

}
