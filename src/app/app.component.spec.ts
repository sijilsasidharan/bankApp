import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//router module
import { AppRoutingModule } from './app-routing.module'
//component
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { InputErrorComponent } from './shared/input-error/input-error.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        InputErrorComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatCardModule,
        MatInputModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
