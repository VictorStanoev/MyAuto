import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() cars: string[] = [] || undefined;
  @Input() currentYear: number = new Date().getFullYear();
  models: any = [];

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.http.get('assets/CarsInfo/BrandAndModels.json')
      .subscribe((res) => {
        this.models = res;
      });
  }

  onSearchChange(searchValue: any): void {
    this.cars = [...this.models].filter(x => x.Brand == searchValue).map(x => x.Model);

  }

  searchAd(form: NgForm) {

    let brand = form.value.brand;
    let model = form.value.model;
    let manifactureDate = form.value.manifactureDate;
    let engineType = form.value.engineType;
    let transmission = form.value.transmission;
    let price = form.value.maxPrice;
    let order = form.value.order;



    this.router.navigate(['/ads'], {
      queryParams: {
        brand: brand,
        model: model,
        manifactureDate:manifactureDate,
        engineType: engineType,
        transmission: transmission,
        maxPrice: price,
        order: order
      }
    });


  }


}
