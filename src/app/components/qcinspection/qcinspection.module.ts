import { NgModule, ModuleWithProviders } from '@angular/core';
import { BaseModule } from '../base/base.module';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { DataToolService, SQLExecService } from 'src/app/shared/services';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { ExinsComponent } from './view/exins.component';
import { DimComponent } from './view/dim.component';
import { CreateComponent } from './create.component';
import { FilterWoModalComponent } from './filter/filter-wo-modal.component';
import { FilterProdstatusModalComponent } from './filter/filter-prodstatus-modal.component';
import { FilterCheckstateModalComponent } from './filter/filter-checkstate-modal.component';
import { CreateExinsComponent } from './create/create-exins.component';
import { CreateDimComponent } from './create/create-dim.component';
import { FilterStageexsModalComponent } from './filter/filter-stageexs-modal.component';
import { FilterChecklistModalComponent } from './filter/filter-checklist-modal.component';
import { CreateDefectComponent } from './create/create-defect.component';
import { FilterQcdefectModalComponent } from './filter/filter-qcdefect-modal.component';
import { EditComponent } from './edit.component';
import { EditDimComponent } from './edit/edit-dim.component';
import { EditExinsComponent } from './edit/edit-exins.component';


const routing: ModuleWithProviders<QcinspectionModule> = RouterModule.forChild([
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'exins/:headerID',
    component: ExinsComponent
  },
  {
    path: 'dim/:headerID',
    component: DimComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:headerID',
    component: EditComponent
  },
  {
    path: 'create-exins/:headerID',
    component: CreateExinsComponent
  },
  {
    path: 'create-dim/:headerID',
    component: CreateDimComponent
  },
  {
    path: 'create-defect/:headerID/:iqcCheckID',
    component: CreateDefectComponent
  },
  {
    path: 'edit-dim/:autoID/:headerID',
    component: EditDimComponent
  },
  {
    path: 'edit-exins/:autoID/:headerID',
    component: EditExinsComponent
  }
]);

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ExinsComponent,
    DimComponent,
    CreateComponent,
    FilterWoModalComponent,
    FilterProdstatusModalComponent,
    FilterCheckstateModalComponent,
    CreateExinsComponent,
    CreateDimComponent,
    FilterStageexsModalComponent,
    FilterChecklistModalComponent,
    CreateDefectComponent,
    FilterQcdefectModalComponent,
    EditComponent,
    EditDimComponent,
    EditExinsComponent
  ],
  imports: [
    BaseModule,
    SharedModule,
    routing
  ],
  providers: [DataToolService, SQLExecService]
})
export class QcinspectionModule { }
