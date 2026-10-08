import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './pages/create.component';
import { CreateDefectComponent } from './pages/create/create-defect.component';
import { CreateDimComponent } from './pages/create/create-dim.component';
import { CreateExinsComponent } from './pages/create/create-exins.component';
import { EditComponent } from './pages/edit.component';
import { EditDefectComponent } from './pages/edit/edit-defect.component';
import { EditDimComponent } from './pages/edit/edit-dim.component';
import { EditExinsComponent } from './pages/edit/edit-exins.component';
import { ListComponent } from './pages/list.component';
import { OqcscanComponent } from './pages/oqcscan.component';
import { DefectComponent } from './pages/view/defect.component';
import { DimComponent } from './pages/view/dim.component';
import { ExinsComponent } from './pages/view/exins.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'exins/:headerID', component: ExinsComponent },
  { path: 'dim/:headerID', component: DimComponent },
  { path: 'defect/:headerID/:iqcCheckID', component: DefectComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:headerID', component: EditComponent },
  { path: 'create-exins/:headerID', component: CreateExinsComponent },
  { path: 'create-dim/:headerID', component: CreateDimComponent },
  { path: 'create-defect/:headerID/:iqcCheckID/:parentAutoID', component: CreateDefectComponent },
  { path: 'edit-dim/:autoID/:headerID', component: EditDimComponent },
  { path: 'edit-exins/:autoID/:headerID', component: EditExinsComponent },
  { path: 'edit-defect/:headerID/:iqcCheckID/:defectID', component: EditDefectComponent },
  { path: 'oqcscan', component: OqcscanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QcInspectionRoutingModule {}
