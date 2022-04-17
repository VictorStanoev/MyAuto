import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../content.service';
import { IAd } from '../../shared/interfaces';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {

  images = [1, 2,3].map((n) => `../../assets/pic${n}.jpg`);
  ad: IAd | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchAd();
  }

  fetchAd(): void {
    this.ad = undefined;
    const id = this.activatedRoute.snapshot.params['adId'];
    this.contentService.loadAd(id).subscribe(x => this.ad = x);
  }

}


