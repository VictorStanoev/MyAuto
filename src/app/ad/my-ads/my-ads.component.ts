import { Component } from '@angular/core';
import { ContentService } from '../../content.service';
import { IAd } from '../../shared/interfaces/ad';


@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {

  myAds: IAd[] | undefined;
  userEmail: string | undefined;

  constructor(
    private contentService: ContentService
  ) {

    this.fetchMyAds()

  }

  fetchMyAds(): void {
    this.myAds = undefined;
    this.contentService.loadAdsByUser().subscribe(x => this.myAds = x)
  }
}
