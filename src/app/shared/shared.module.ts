import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-pages/home-pages.component';

import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';


@NgModule({
  declarations: [
    AboutPagesComponent,
    ContacPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinerComponent
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
    SearchBoxComponent,
    LoadingSpinerComponent

  ],
})
export class SharedModule { }
