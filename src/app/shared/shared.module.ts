import { NgModule } from '@angular/core';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AboutPagesComponent,
    HomePagesComponent,
    SidebarComponent,
    ContacPageComponent,
    HomePagesComponent
  ],
  exports: [
    AboutPagesComponent,
    HomePagesComponent,
    SidebarComponent,
    HomePagesComponent

  ],

  providers: [],
})
export class NameModule { }
