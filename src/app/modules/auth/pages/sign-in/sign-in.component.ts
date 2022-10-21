import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../services';
import { HttpService } from 'src/app/core/services';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';

class EndPoints {
    static BASE = environment.REST_CORE;
    static PATH = '';
}

interface SignInForm {
    email: FormControl<string>;
    password: FormControl<string>;
}

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
    signInForm: FormGroup<SignInForm> = this.formBuilder.group({
        email: new FormControl('gabriiellfr2@gmail.com', { nonNullable: true }),
        password: new FormControl('gabriel123', { nonNullable: true }),
    });

    static ALL = '/advertise/';
    static ADD = '/advertise/create';
    static EDIT = '/advertise/';
    static UPDATE = '/advertise/update';

    constructor(
        private router: Router,
        public authService: AuthService,
        private formBuilder: FormBuilder,
        private httpService: HttpService
    ) {}

    googleAuth() {
        this.authService.GoogleAuth();
    }

    gitHubAuth() {
        this.authService.GitHubAuth();
    }

    get(advertise_id: number) {
        return this.httpService.get(
            EndPoints.BASE + SignInComponent.EDIT + advertise_id
        );
    }

    signIn() {
        this.authService.SignIn('1', '1').subscribe({
            next: v => console.log(v),
            error: e => console.error(e),
            complete: () => console.error('e'),
        });
    }
}
