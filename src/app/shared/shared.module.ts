import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';
import { TextShortenPipe } from './text-shorten.pipe';



@NgModule({
  declarations: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    TextShortenPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    WelcomeMessageComponent,
    CustomValidatorDirective,
    TextShortenPipe
  ]
})
export class SharedModule { }
