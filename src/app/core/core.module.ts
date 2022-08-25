import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    imports: [CommonModule, RouterModule],
})
export class CoreModule {}
