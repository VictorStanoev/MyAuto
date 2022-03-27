import { Component} from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IAd } from 'src/app/shared/interfaces/ad';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent{

  ads: IAd[] | undefined;

  constructor(
    private contentService: ContentService,
  ) { 
    this.fetchAds();
  }

  fetchAds(): void  {
    this.ads = undefined;
    this.contentService.loadAds().subscribe(x => this.ads = x);

    
  }
}
