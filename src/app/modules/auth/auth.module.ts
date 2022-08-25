import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SignUpComponent, SignInComponent } from './pages';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SignUpComponent, SignInComponent],
    imports: [CommonModule, AuthRoutingModule, RouterModule],
})
export class AuthModule {}
