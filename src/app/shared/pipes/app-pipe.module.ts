import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DisplayDataUriPipe } from "./display-data-uri.pipe";
import { FormatDatePipe } from "./format-date.pipe";
import { SafePipe } from "./safe.pipe";
import { HasValuePipe } from "./has-value.pipe";
import { DisplayColumnsPipe } from "./display-columns.pipe";
import { FormatColumnPipe } from './format-column.pipe';
import { TrackByPropertyPipe } from './trackby-property.pipe';
import { DisplayCardImagePipe } from './display-avatar.pipe';
import { DisplayGenderPipe } from './display-gender.pipe';
import { TotalCountPipe } from './total-count.pipe';
import {DisplayAppImagePipe} from './display-app.pipe'
const pipes: any[] = [
  DisplayAppImagePipe,
  DisplayDataUriPipe,
  FormatDatePipe,
  SafePipe,
  HasValuePipe,
  DisplayColumnsPipe,
  FormatColumnPipe,
  TrackByPropertyPipe,
  DisplayCardImagePipe,
  DisplayGenderPipe,
  TotalCountPipe
];

@NgModule({
  declarations: pipes,
  exports: pipes
})
export class AppPipeModule { }
