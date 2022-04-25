import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdComponent } from './ad/ad/ad.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:':id',
    redirectTo:'ads'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
