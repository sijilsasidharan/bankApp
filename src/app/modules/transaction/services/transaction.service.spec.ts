import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http'
import { TransactionService } from './transaction.service';
import { customer1 } from '../../../data/mock/customer1'

describe('TransactionService', () => {
  let service: TransactionService = TestBed.get(TransactionService);
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TransactionService]
  }));

  beforeEach(() => {

    service = TestBed.get(TransactionService);
    httpTestingController = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call customer details', (() => {
    service.getCustomerDetails(123456);
    const req = httpTestingController.expectOne("https://localhost:4200/getCustomer");

    expect(req.request.method).toEqual("POST");
    // tick();
    expect(customer1.customer_number).toEqual(123456);
    expect(customer1.name).toEqual('Marko');
    expect(customer1.address).toEqual('Street 1');
    expect(customer1.phone).toEqual(90129321);
    expect(customer1.trasfer_details.length).toEqual(6);
  }))

  afterEach(() => {
    httpTestingController.verify();
  });
});
