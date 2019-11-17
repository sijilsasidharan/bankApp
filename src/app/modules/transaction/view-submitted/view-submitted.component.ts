import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
//material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
//rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
//service
import { TransactionService } from '../services/transaction.service';
@Component({
  selector: 'syg-view-submitted',
  templateUrl: './view-submitted.component.html',
  styleUrls: ['./view-submitted.component.css']
})
export class ViewSubmittedComponent implements OnInit, OnDestroy {
  transacationList: any;
  displayedColumns: string[] = ['reference', 'name', 'transfer_amount', 'transfer_currency'];

  private unsubscribe: Subject<void> = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getAllTransaction()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(transactinDetails => {
        this.transacationList = new MatTableDataSource<any>(transactinDetails);
        this.transacationList.paginator = this.paginator;
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
