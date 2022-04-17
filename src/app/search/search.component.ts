import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  @Input() cars: string[] = [] || undefined;
  @Input() currentYear : number = new Date().getFullYear();
  models:any = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/CarsInfo/BrandAndModels.json')
    .subscribe((res) => {
      this.models = res;
    });
  }

  onSearchChange(searchValue: any): void {
    this.cars=[...this.models].filter(x=>x.Brand==searchValue).map(x=>x.Model);

  }

  searchAd(form: NgForm) {
    if (form.invalid) { return; }


  }


}
