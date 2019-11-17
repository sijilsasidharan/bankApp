import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
// parent class
import { CreateTransactionForm } from './create.form';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
//rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
//service
import { TransactionService } from '../services/transaction.service';
//material
import { MatSnackBar } from '@angular/material/snack-bar';
//rxjs
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'syg-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [DatePipe]
})
export class CreateComponent extends CreateTransactionForm implements OnInit, OnDestroy {
  currencyList: string[];
  private unsubscribe: Subject<void> = new Subject();
  filteredOptions: Observable<string[]>;

  constructor(private fb: FormBuilder,
    private transactionService: TransactionService,
    private datePipe: DatePipe,
    private snackBar: MatSnackBar) {
    super(fb);
  }

  ngOnInit() {
    this.currencyList = ['AED', 'EUR', 'CHF', 'MUR', 'USD']
    this.customer_number.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe((customerNumber: number) => {
        this.transactionService.getCustomerDetails(customerNumber)
          .subscribe(custDetails => {
            if (custDetails) {
              this.createForm.patchValue({
                reference: this.generateReference(),
                name: custDetails.name,
                address: custDetails.address,
                phone: custDetails.phone,
              });
            }
            else {
              this.createForm.reset({
                customer_number: this.customer_number.value
              });
            }
          });
      });
    this.filteredOptions = this.transfer_currency.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  transferAmount() {
    if (this.createForm.valid) {
      this.transactionService.makeTransaction(this.createForm.value)
        .subscribe(success => this.openSnackBar(success, 'close'), error => this.openSnackBar(error, 'close'));
    }
    else {
      this.openSnackBar('Please fill mandatory fields', 'close')
    }
  }

  generateReference() {
    return `CUS${this.datePipe.transform(new Date(), 'yyyymmdd')}${Math.floor(1000 + Math.random() * 9000)}`;

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.currencyList.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}


// reference, customer number, customer name, customer address,
// customer phone number, transfer amount, transfer currency, beneficiary bank,
// beneficiary account number, payment details
