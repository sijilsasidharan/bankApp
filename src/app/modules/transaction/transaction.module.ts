import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewSubmittedComponent } from './view-submitted/view-submitted.component';
//routing
import { TransactionRoutingModule } from './transaction-routing.module'

@NgModule({
  declarations: [CreateComponent, ViewSubmittedComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
