import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { CreateComponent } from './create/create.component';
import { ViewSubmittedComponent } from './view-submitted/view-submitted.component'
// guard
import { AuthGuardService } from '../../guard/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CreateComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'view',
        component: ViewSubmittedComponent,
        canActivate: [AuthGuardService]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class TransactionRoutingModule { }