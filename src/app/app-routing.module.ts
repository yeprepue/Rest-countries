import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContacPageComponent } from './shared/pages/contac-page/contac-page.component';
import { SharedModule } from './shared/shared.module';
const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePagesComponent
  // },
  {
    path: 'about',
    component: AboutPagesComponent
  },
  {
    path: 'contac',
    component: ContacPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})

export class AppRoutingModule { }
