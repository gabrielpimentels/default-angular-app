import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthLayoutComponent, MainLayoutComponent } from './layouts';
import {
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
} from './components';

import { FirebaseModule } from './firebase.module';
import { AuthModule } from '../modules/auth/auth.module';

@NgModule({
    declarations: [
        MainLayoutComponent,
        AuthLayoutComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [CommonModule, RouterModule, FirebaseModule, AuthModule],
    providers: [],
})
export class CoreModule {}
