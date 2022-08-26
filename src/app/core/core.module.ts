import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FirebaseModule } from './firebase.module';
import { AuthModule } from '../modules/auth/auth.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthLayoutComponent, MainLayoutComponent } from './layouts';
import {
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
} from './components';

@NgModule({
    declarations: [
        MainLayoutComponent,
        AuthLayoutComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        FirebaseModule,
        AuthModule,
    ],
    providers: [],
})
export class CoreModule {}
