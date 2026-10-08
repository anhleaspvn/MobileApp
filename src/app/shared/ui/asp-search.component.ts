import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, AfterViewInit, OnChanges, ViewChild } from '@angular/core';

//import { SpeechRecognition, SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition/ngx';
import { SpeechRecognition, SpeechRecognitionListeningOptions } from '@awesome-cordova-plugins/speech-recognition/ngx';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-asp-search',
  templateUrl: './asp-search.component.html',
  //styleUrls: ['./asp-search.component.scss'],
  providers: [NgModel],
  //inputs: ['aspModel', 'aspChange'],
  styles: [`
  .asp-search {
    position: relative;
    display: block;
    width: 100%;
}
::ng-deep .asp-search ion-searchbar .searchbar-clear-button {
    right: 40px !important;
}

.asp-search .voice-button {
    position: absolute;
    top: 8px;
    right: 5px;
}
::ng-deep ion-toolbar.ios .asp-search .voice-button mat-icon {
    color: white !important;
}
::ng-deep ion-toolbar .asp-search .voice-button {
    top: 4px !important;
}
::ng-deep ion-toolbar.sc-ion-searchbar-ios-h,
::ng-deep ion-toolbar .sc-ion-searchbar-ios-h {
    padding-top: 12px !important;
}
::ng-deep ion-toolbar .sc-ion-searchbar-ios-h {
    padding-top: 12px !important;
}
::ng-deep .asp-search ion-searchbar .searchbar-search-icon.ios {
    margin-left: 0 !important;
}

::ng-deep .asp-search ion-searchbar .searchbar-input.sc-ion-searchbar-ios {
    padding-left: 30px !important;
}
  `]
})
export class aspSearchComponent implements OnInit, AfterViewInit, OnChanges {

  @Input('aspModel') aspModel: any;
  @Input('inputmode') inputmode: string;
  @Input('debounce') debounce: number = 250;
  @Input('animated') animated: boolean = false;
  @Input('showCancelButton') showCancelButton: string = 'never';
  @Input('type') type: string = 'search';
  @Input('placeholder') placeholder: string;
  @Input('autocomplete') autocomplete: boolean;
  @Input('autofocus') autofocus: boolean = false;
  @Input('disabled') disabled: boolean = false;
  @Input('ngModelOptions') ngModelOptions: any;

  @Output('aspModelChange') aspModelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output('aspFocus') aspFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output('aspClear') aspClear: EventEmitter<any> = new EventEmitter<any>();
  @Output('aspCancel') aspCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output('aspInput') aspInput: EventEmitter<any> = new EventEmitter<any>();
  @Output('aspBlur') aspBlur: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('searchBar') searchBar: any;

  constructor(
    public model: NgModel,
    private speechRecognition: SpeechRecognition,
    private cdr: ChangeDetectorRef
  ) { }


  ngAfterViewInit(): void {
    if (this.autofocus) {
      setTimeout(() => {
        this.searchBar.setFocus();
      }, 500);
    }
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  onIonChange($event) {

    //this.aspModel = $event.detail.value;
    this.aspModelChange.emit(this.aspModel);
  }

  onIonFocus($event) {
    this.aspFocus.emit($event);
  }

  onIonBlur($event) {
    this.aspBlur.emit($event);
  }

  onIonClear($event) {
    this.aspClear.emit($event);
  }

  onIonCancel($event) {
    this.aspCancel.emit($event);
  }

  async speechRequest() {
    const perm = await this.speechRecognition.hasPermission();
    if (perm) {
      this.speechSearch();
    } else {
      await this.speechRecognition.requestPermission();
      this.speechSearch();
    }
  }

  speechSearch() {
    const options: SpeechRecognitionListeningOptions = {
      showPopup: true
    };
    this.speechRecognition.startListening()
      .subscribe(
        (matches: string[]) => {
          if (matches && matches.length > 0) {
            this.aspModel = matches[0];
          } else this.aspModel = '';
          this.cdr.detectChanges();
          //alert(matches[0]);
        },
        (err) => {
          //alert(JSON.stringify(err));
          console.log(JSON.stringify(err));
        }
      )
  }

}
