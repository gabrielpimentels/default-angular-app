import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../services';

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

    constructor(
        private router: Router,
        public authService: AuthService,
        private formBuilder: FormBuilder
    ) {}

    signIn() {
        if (this.signInForm.value.email && this.signInForm.value.password)
            this.authService.SignIn(
                this.signInForm.value.email,
                this.signInForm.value.password
            );
    }
}
