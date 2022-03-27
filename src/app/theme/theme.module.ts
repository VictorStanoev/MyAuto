import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeRoutingModule } from './theme-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AsideComponent } from './aside/aside.component';
import { FormsModule } from '@angular/forms';
import { NewAdComponent } from './new-ad/new-ad.component';
import { AdsComponent } from './ads/ads.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeComponent,
    ThemesComponent,
    AsideComponent,
    NewAdComponent,
    AdsComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ThemeModule { }
