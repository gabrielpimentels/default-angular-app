import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../services';

interface SignUpForm {
    email: FormControl<string>;
    password: FormControl<string>;
}

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
    signUpForm: FormGroup<SignUpForm> = this.formBuilder.group({
        email: new FormControl('gabriiellfr@gmail.com', { nonNullable: true }),
        password: new FormControl('gabriel123', { nonNullable: true }),
    });

    constructor(
        private router: Router,
        public authService: AuthService,
        private formBuilder: FormBuilder
    ) {}

    googleAuth() {
        this.authService.GoogleAuth();
    }

    gitHubAuth() {
        this.authService.GitHubAuth();
    }

    signUp() {
        if (this.signUpForm.value.email && this.signUpForm.value.password)
            this.authService.SignUp(
                this.signUpForm.value.email,
                this.signUpForm.value.password
            );
    }
}
