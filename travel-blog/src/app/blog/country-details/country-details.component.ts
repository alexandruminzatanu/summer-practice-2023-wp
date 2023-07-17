import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
})
export class CountryDetailsComponent {
  countryName = null;

  constructor(private readonly route: ActivatedRoute) {
    this.route.paramMap.subscribe((data) => {
      this.countryName = data.get('title') as any;
    });
  }
}
