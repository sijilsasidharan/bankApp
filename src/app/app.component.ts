import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
@Component({
  selector: 'syg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedin: boolean;
  constructor(private autheService: AuthenticationService) {
    autheService.currentUser.subscribe(user => this.isLoggedin = user ? true : false)
  }


}
