import { Component } from '@angular/core';
import { Event, NavigationStart, NavigationCancel, NavigationEnd, NavigationError, Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { LoaderService } from './service/loader.service'
@Component({
  selector: 'syg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedin: boolean;
  isLoading: boolean;
  isNavigating: boolean;

  constructor(
    private autheService: AuthenticationService,
    private loaderService: LoaderService,
    private router: Router
  ) {

    autheService.currentUser.subscribe(user => this.isLoggedin = user ? true : false);
    this.loaderService.loaderVisibility.subscribe(loader => this.isLoading = loader);
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.isNavigating = true;
          break;
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
        case event instanceof NavigationEnd:
          this.isNavigating = false;
          break;
      }
    });
  }


}
