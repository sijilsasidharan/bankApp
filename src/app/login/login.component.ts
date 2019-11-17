import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'syg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
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
        .pipe(first())
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

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
