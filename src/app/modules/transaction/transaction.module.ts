import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewSubmittedComponent } from './view-submitted/view-submitted.component';
//routing
import { TransactionRoutingModule } from './transaction-routing.module'
//material
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [CreateComponent, ViewSubmittedComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    TransactionRoutingModule

  ]
})
export class TransactionModule { }
