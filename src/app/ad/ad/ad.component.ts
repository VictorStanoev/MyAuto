import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../content.service';
import { IAd } from '../../shared/interfaces';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {

  images = [1, 2, 3].map((n) => `../../assets/pic${n}.jpg`);
  ad: IAd | undefined;
  userEmail: string | undefined;
  inUpdateMode = false;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.fetchAd();
    this.userEmail = this.userService.user?.email;
  }

  fetchAd(): void {
    this.ad = undefined;
    const id = this.activatedRoute.snapshot.params['adId'];
    this.contentService.loadAd(id).subscribe(x => this.ad = x);
  }


  deleteAd(id: string) {

    this.contentService.deleteAd(id)
      .subscribe({
        next: (_) => {
          console.log("success deleted")
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        }
      });

  }

  updateAd(form: NgForm): void {
    console.log(form)
    const adId = this.ad?._id

    if (form.invalid) { return; }

    this.contentService.updateAd(adId!,form.value).subscribe({
      next: () => {
        this.router.navigate([`/`]);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}


