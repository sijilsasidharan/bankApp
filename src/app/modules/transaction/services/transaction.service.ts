import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Customer } from '../../../model/customer.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  getCustomerDetails(customerNumber: number): Observable<any> {
    const customer = { customer_number: customerNumber }
    return this.http.post(`${this.url}/getCustomer`, customer);
  }

  getAllTransaction(): Observable<any> {
    return this.http.get(`${this.url}/getAllTransaction`);
  }

  makeTransaction(transactionDetails): Observable<any> {
    return this.http.post(`${this.url}/transferAmount`, transactionDetails);
  }
}
