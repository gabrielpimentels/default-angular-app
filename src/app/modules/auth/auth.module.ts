import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import {
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
} from './pages';

import { AuthService } from './services';

@NgModule({
    declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        RouterModule,
    ],
    providers: [AuthService],
})
export class AuthModule {}
