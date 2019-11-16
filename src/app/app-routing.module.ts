import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { LoginComponent } from './login/login.component'
// guard
import { AuthGuardService } from './guard/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'transaction',
        loadChildren: './modules/transaction/transaction.module#TransactionModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }