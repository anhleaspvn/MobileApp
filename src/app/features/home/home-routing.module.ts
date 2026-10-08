import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppConfig } from 'src/app/core/config';
import { AppFunctionsResolveService } from './data-access/app-functions-resolve.service';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
  {
    path: 'changepass',
    loadChildren: () => import('../change-password/change-pass.module').then(m => m.ChangePassModule),
  },
  {
    path: '',
    component: HomeComponent,
    resolve: {
      [AppConfig.APP_FNS_RESOLVER_KEY]: AppFunctionsResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
