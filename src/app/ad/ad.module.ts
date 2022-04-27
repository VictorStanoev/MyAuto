import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdComponent } from './ad/ad.component';
import { AdsComponent } from './ads/ads.component';
import { NewAdComponent } from './new-ad/new-ad.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdRoutingModule } from './ad-routing.module';
import { LastAdsComponent } from './last-ads/last-ads.component';
import { MyAdsComponent } from './my-ads/my-ads.component';



@NgModule({
  declarations: [
    AdComponent,
    AdsComponent,
    NewAdComponent,
    LastAdsComponent,
    MyAdsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    AdRoutingModule,
    SharedModule
  ],
  exports:[
    LastAdsComponent
  ]
})
export class AdModule { }
