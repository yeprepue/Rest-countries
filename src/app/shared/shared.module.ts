import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-pages/home-pages.component';

import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    AboutPagesComponent,
    ContacPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    AboutPagesComponent,
    ContacPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent

  ],
})
export class SharedModule { }
