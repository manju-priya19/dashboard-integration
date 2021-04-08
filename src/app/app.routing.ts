import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin/admin.component';
const appRoutes: Routes = [
  
  // {
  //   path: '**',
  //   redirectTo: 'pages/index'
  // }
  {
    path:'admin',
    component:AdminComponent

  },
  {
    path: '**',
    redirectTo: 'pages/index'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
];

export const routing = RouterModule.forRoot(appRoutes);
