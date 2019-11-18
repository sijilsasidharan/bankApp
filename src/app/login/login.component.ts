import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AuthenticationService } from '../service/authentication.service';
//rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { first } from 'rxjs/operators';
//material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'syg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private unsubscribe: Subject<void> = new Subject();
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authService.logout();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .pipe(
          first(),
          takeUntil(this.unsubscribe)
        )
        .subscribe(
          data => {
            this.router.navigate(['/transaction']);
          },
          error => {
            this.openSnackBar(error, 'close');
          })
    }
    else {
      this.username.markAsTouched();
      this.password.markAsTouched();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
