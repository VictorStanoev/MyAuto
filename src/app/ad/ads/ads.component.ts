import { Component} from '@angular/core';
import { ContentService } from '../../content.service';
import { IAd } from '../../shared/interfaces/ad';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {

  ads: IAd[] | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchAds();
  }

  fetchAds(): void {

    console.log(this.activatedRoute.snapshot.queryParams)
    let brand = this.activatedRoute.snapshot.queryParams['brand'];
    let model = this.activatedRoute.snapshot.queryParams['model'];
    let engineType = this.activatedRoute.snapshot.queryParams['engineType'];
    let manifactureDate = this.activatedRoute.snapshot.queryParams['manifactureDate'];
    let maxPrice = this.activatedRoute.snapshot.queryParams['maxPrice'];
    let transmission = this.activatedRoute.snapshot.queryParams['transmission'];
    let order = this.activatedRoute.snapshot.queryParams['order'];

    this.ads = undefined;
    this.contentService.searchAds(brand,model,engineType,manifactureDate,maxPrice,transmission,order).subscribe(x => this.ads = x);
    
  }
}

// @Pipe({
//   name: 'shorten'
// })

// export class ShortenPipe implements PipeTransform {
//   transform(value: string) {
//     if (value.length > 10) {
//       return `${value.substring(0, 10)}...`
//     }
//     return value
//   }
// }
