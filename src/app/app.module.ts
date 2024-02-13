import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent
  ]
})
export class AppModule { }
