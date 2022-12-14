import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
} from './pages';

const routes: Routes = [
    {
        path: 'sign-up',
        component: SignUpComponent,
    },
    {
        path: 'sign-in',
        component: SignInComponent,
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },
    {
        path: '**',
        redirectTo: 'sign-in',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
