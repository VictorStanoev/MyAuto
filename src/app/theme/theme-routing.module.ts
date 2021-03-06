import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { AdComponent } from '../ad/ad/ad.component';
import { AdsComponent } from '../ad/ads/ads.component';
import { NewAdComponent } from '../ad/new-ad/new-ad.component';

const routes: Routes = [
    {
        path:'theme',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AdsComponent
            },
            {
                path: `:themeId`,
                component: AdComponent
            }
        ]
    },
    {
        path: 'theme-ad',
        component: NewAdComponent,
        canActivate:[AuthActivate],
        data: {
            authenticationRequred: true,
            authenticationFailureRedirectUrl: '/login'
        }
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
