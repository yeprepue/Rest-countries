import { Component } from '@angular/core';
import { Country } from '../../interfaces/countrry';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'by-region',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] =['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?:Region;

  constructor(private countriesService: CountriesService) { }



  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe( countries => {
      this.countries = countries;
    });
  }

}
