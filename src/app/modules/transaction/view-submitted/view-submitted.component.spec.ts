import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ViewSubmittedComponent } from './view-submitted.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TransactionService } from '../services/transaction.service'

describe('ViewSubmittedComponent', () => {
  let component: ViewSubmittedComponent;
  let fixture: ComponentFixture<ViewSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSubmittedComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatTableModule, MatPaginatorModule],
      providers: [TransactionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
