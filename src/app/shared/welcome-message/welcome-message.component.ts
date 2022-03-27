import { Component, Input } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent {
 
  @Input() isLogged!: boolean

  icons = {
    faSignInAlt,
    faUserPlus
  };


  constructor() { }


}
