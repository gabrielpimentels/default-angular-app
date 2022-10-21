import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FirebaseModule } from './firebase.module';
import { AuthModule } from '../modules/auth/auth.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthLayoutComponent, MainLayoutComponent } from './layouts';
import {
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
} from './components';

import {
    errorCatchingInterceptorProvider,
    httpRequestInterceptorProvider,
} from './helpers';

import { HttpService, LocalStorageService } from './services';

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
        HttpClientModule,
        FirebaseModule,
        AuthModule,
    ],
    providers: [HttpService, LocalStorageService],
})
export class CoreModule {}
