import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewSubmittedComponent } from './view-submitted/view-submitted.component'
// guard
import { AuthGuardService } from '../../guard/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class TransactionRoutingModule { }