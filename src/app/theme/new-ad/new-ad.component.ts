import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent{

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

 
    createAd(form:NgForm){
      if(form.invalid){ return;}

      this.contentService.saveAd(form.value).subscribe({
        next: () => {
          this.router.navigate(['/ads']);
  
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

}
