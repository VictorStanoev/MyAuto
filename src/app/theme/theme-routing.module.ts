import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { AdComponent } from './ad/ad.component';
import { AdsComponent } from './ads/ads.component';
import { NewAdComponent } from './new-ad/new-ad.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
    {
        path:'ads',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AdsComponent
            },
            {
                path: `:adId`,
                component: AdComponent
            }
        ]
    },
    {
        path: 'add-ad',
        component: NewAdComponent,
        // canActivate:[AuthActivate],
        // data: {
        //     authenticationRequred: true,
        //     authenticationFailureRedirectUrl: '/login'
        // }
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
