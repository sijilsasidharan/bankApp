import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MatCardModule, MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('username invalid when empty', () => {
    const username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
  });

  it('password invalid when empty', () => {
    const username = component.loginForm.controls['password'];
    expect(username.valid).toBeFalsy();
  });

  it('password invalid when empty', () => {
    const username = component.loginForm.controls['password'];
    expect(username.valid).toBeFalsy();
  });

  it('username required validity', () => {
    let errors = {};
    const username = component.loginForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password required validity', () => {
    let errors = {};
    const password = component.loginForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submit login form', () => {
    let username = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];
    expect(component.loginForm.valid).toBeFalsy();
    expect(username.errors['required']).toBeTruthy();
    expect(password.errors['required']).toBeTruthy();
    username.setValue('abc');
    password.setValue('def');
    expect(component.loginForm.valid).toBeTruthy();


  })


});
