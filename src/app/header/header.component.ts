import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'syg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => this.isLoggedIn = user ? true : false);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
