import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/auth/models/userModel';

import { AuthService } from 'src/app/modules/auth/services';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    user = <User>{};

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user = this.authService.getUser;
    }

    signOut() {
        this.authService.SignOut();
    }
}
