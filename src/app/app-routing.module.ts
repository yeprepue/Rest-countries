import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';

import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContacPageComponent } from './shared/pages/contac-page/contac-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePagesComponent
  },
  {
    path: 'about',
    component: AboutPagesComponent
  },
  {
    path: 'contac',
    component: ContacPageComponent
  },
  {
    path: '**',
    redirectTo: ''
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
