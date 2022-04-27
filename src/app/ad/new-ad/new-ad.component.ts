import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent {

  @Input() cars: string[] = [] || undefined;
  models: any = [];
  selectedFile = undefined
  @Input() imageAsBinary: string[] = [];

  form: FormGroup;

  constructor(
    private contentService: ContentService,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
    this.http.get('assets/CarsInfo/BrandAndModels.json')
      .subscribe((res) => {
        this.models = res;
      });

      this.form = this.fb.group({
        brand: ['', [Validators.required]]});
  }

  onSearchChange(searchValue: any): void {
    this.cars = [...this.models].filter(x => x.Brand == searchValue).map(x => x.Model);

  }

  onFileSelected(event: any) {

    this.selectedFile = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      let result = reader.result?.toString();
      if (result) {
        let n = event.target.id
        this.imageAsBinary[+n] = result

        console.log(this.imageAsBinary);
      }

    };
    reader.onerror = error => (console.log(error));

    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    };
  }


  createAd(form: NgForm) {
    console.log(form)
    if (form.invalid) { return; }

    form.value.pictures = this.imageAsBinary

    console.log(form.value)


    this.contentService.saveAd(form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
