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

  // it('load fields on entering customer number', fakeAsync(() => {
  //   fixture.detectChanges();
  //   component.customer_number.setValue(customer1.customer_number);
  //   spyOn(TransactionService, 'prototype').and.returnValue(Promise.resolve(true));
  //   component.ngOnInit();
  //   tick();
  //   fixture.detectChanges();
  //   expect(component.name.value).toEqual(customer1.name);
  //   const ref = component.reference.value;
  //   const date = new DatePipe('en');
  //   expect(ref.substring(0, 3)).toEqual('CUS');
  //   expect(ref.substring(4, 12)).toEqual(date.transform(new Date(), 'yyyymmdd'));
  //   expect(component.name.value).toEqual(customer1.name);
  // }));
});
