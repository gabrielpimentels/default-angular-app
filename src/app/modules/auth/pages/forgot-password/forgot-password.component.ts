import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

interface ForgotPasswordForm {
    email: FormControl<string>;
}

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
    signInForm: FormGroup<ForgotPasswordForm> = this.formBuilder.group({
        email: new FormControl('gabriiellfr2@gmail.com', { nonNullable: true }),
    });

    constructor(
        private router: Router,
        public authService: AuthService,
        private formBuilder: FormBuilder
    ) {}

    forgotPassword() {
        console.log('forgotPassword');

        if (this.signInForm.value.email)
            this.authService.ForgotPassword(this.signInForm.value.email);
    }
}
