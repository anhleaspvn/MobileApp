import { NgModule } from '@angular/core';
import { SharedFiltersModule } from 'src/app/shared/ui/filters/shared-filters.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataToolService, SQLExecService } from 'src/app/core';
import { ListComponent } from './pages/list.component';
import { CreateComponent } from './pages/create.component';
import { EditComponent } from './pages/edit.component';
import { ExinsComponent } from './pages/view/exins.component';
import { DimComponent } from './pages/view/dim.component';
import { DefectComponent } from './pages/view/defect.component';
import { CreateExinsComponent } from './pages/create/create-exins.component';
import { CreateDimComponent } from './pages/create/create-dim.component';
import { CreateDefectComponent } from './pages/create/create-defect.component';
import { EditDimComponent } from './pages/edit/edit-dim.component';
import { EditExinsComponent } from './pages/edit/edit-exins.component';
import { EditDefectComponent } from './pages/edit/edit-defect.component';
import { OqcscanComponent } from './pages/oqcscan.component';
import { DetailComponent } from './components/detail.component';
import { FilterWoModalComponent } from './components/filter/filter-wo-modal.component';
import { FilterProdstatusModalComponent } from './components/filter/filter-prodstatus-modal.component';
import { FilterCheckstateModalComponent } from './components/filter/filter-checkstate-modal.component';
import { FilterStageexsModalComponent } from './components/filter/filter-stageexs-modal.component';
import { FilterAspstageModalComponent } from './components/filter/filter-aspstage-modal.component';
import { FilterAspdeviceModalComponent } from './components/filter/filter-aspdevice-modal.component';
import { FilterChecklistModalComponent } from './components/filter/filter-checklist-modal.component';
import { FilterQcdefectModalComponent } from './components/filter/filter-qcdefect-modal.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ColResizeDirective } from './directives/col-resize.directive';
import { QcInspectionRoutingModule } from './qc-inspection-routing.module';

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
    FilterAspstageModalComponent,
    FilterAspdeviceModalComponent,
    FilterChecklistModalComponent,
    CreateDefectComponent,
    FilterQcdefectModalComponent,
    EditComponent,
    EditDimComponent,
    EditExinsComponent,
    EditDefectComponent,
    DefectComponent,
    OqcscanComponent,
    ColResizeDirective
  ],
  imports: [
    SharedFiltersModule,
    SharedModule,
    FormsModule,
    QcInspectionRoutingModule
  ],
  providers: [DataToolService, SQLExecService]
})
export class QcinspectionModule { }
