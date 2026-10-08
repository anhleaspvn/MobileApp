import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { AuthGuardService } from 'src/app/core';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
      },
      
      {
        path: 'user',
        loadChildren: () => import('src/app/features/user/user.module').then(m => m.UserModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
