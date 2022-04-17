import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './ad/ad.component';
import { ThemeComponent } from './theme/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeRoutingModule } from './theme-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AsideComponent } from './aside/aside.component';
import { FormsModule } from '@angular/forms';
import { NewAdComponent } from './new-ad/new-ad.component';
import { AdsComponent } from './ads/ads.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from './image-upload/image-upload.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    AdComponent,
    AdsComponent,
    NewAdComponent,
    ThemeComponent,
    ThemesComponent,
    AsideComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ThemeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ThemeModule { }
