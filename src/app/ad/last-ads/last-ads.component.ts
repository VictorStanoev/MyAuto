import { Component} from '@angular/core';
import { ContentService } from '../../content.service';
import { IAd } from '../../shared/interfaces/ad';

@Component({
  selector: 'app-last-ads',
  templateUrl: './last-ads.component.html',
  styleUrls: ['./last-ads.component.scss']
})
export class LastAdsComponent {

  recentAds: IAd[] | undefined;

  constructor(
    private contentService: ContentService,
  ) {
    this.fetchResentAds();
  }

  fetchResentAds(): void {
    this.recentAds = undefined;
    this.contentService.loadLatestAds(6).subscribe(x => this.recentAds = x)
  }

}
