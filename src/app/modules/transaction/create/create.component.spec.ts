import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common/';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http'
import { CreateComponent } from './create.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TransactionService } from '../services/transaction.service';
import { customer1 } from '../../../data/mock/customer1'

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatButtonModule,
        MatSnackBarModule,
        MatGridListModule
      ],
      providers: [TransactionService, HttpClient]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check mandatory fields', async () => {
    expect(component.name.valid).toBeFalsy();
    expect(component.customer_number.valid).toBeFalsy();
    expect(component.transfer_currency.valid).toBeFalsy();
    expect(component.address.valid).toBeFalsy();
    expect(component.phone.valid).toBeFalsy();
    expect(component.transfer_amount.valid).toBeFalsy();
    expect(component.transfer_currency.valid).toBeFalsy();
    expect(component.reference.valid).toBeFalsy();
  });
});
