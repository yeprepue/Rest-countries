import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countrry';

@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-pages.component.html'
})
export class ByCapitalPagesComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCapital( term: string ):void  {
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      });
  }

}
