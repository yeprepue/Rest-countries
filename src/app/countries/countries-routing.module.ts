import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryComponent } from './pages/country-page/country.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPagesComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },

  {
    path: 'by/:id',
    component: CountryComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  },

];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class CountriesRoutingModule { }
