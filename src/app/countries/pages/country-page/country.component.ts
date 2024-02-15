import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrry';
import { ActivatedRoute, Router } from '@angular/router'
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {

  public country?: Country;
  constructor(

    private activateRouter: ActivatedRoute,
    private coutriesService: CountriesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.pipe(

      switchMap(({ id }) => this.coutriesService.searchCountryByAlphaCode(id)),

    ).subscribe( country => {
      if (!country) return this.router.navigateByUrl('');
      //  return country = country;
      return this.country = country;

    });
  }
}
