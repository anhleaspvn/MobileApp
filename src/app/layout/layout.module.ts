import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MaterialModule } from '../material.module';
import { ListModalComponent } from './list-modal.component';
import { HeaderComponent } from './header.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
  SkeletonComponent,
  aspSearchComponent,
  aspGmapComponent,
  FileViewedModalComponent
} from './';

import { AgmCoreModule } from '@agm/core';
// import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppPipeModule } from '../shared/pipes/app-pipe.module';
import { aspAdvancedPieChartComponent } from './asp-advanced-pie-chart.component';
import { aspBarHorizontalChartComponent } from './asp-bar-horizontal-chart.component';
import { aspDateFilterComponent } from './asp-date-filter.component';
import { aspBoolFilterComponent } from './asp-bool-filter.component';
import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from './timeline.component';

const comps: any[] = [
  aspGmapComponent,
  SkeletonComponent,
  aspSearchComponent,
  ListModalComponent,
  FileViewedModalComponent,
  HeaderComponent,
  aspAdvancedPieChartComponent,
  aspBarHorizontalChartComponent,
  aspDateFilterComponent,
  aspBoolFilterComponent,
  TimelineComponent,
  TimelineItemComponent,
  TimelineTimeComponent,
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    AppPipeModule,
    PdfViewerModule,
    AgmCoreModule,
    NgxChartsModule
  ]
})
export class LayoutModule { }
