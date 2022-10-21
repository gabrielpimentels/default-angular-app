import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { User } from '../models/userModel';
import { HttpService } from 'src/app/core/services/http.service';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    userData: any;

    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone,
        private toastr: ToastrService,
        private httpService: HttpService
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
            } else localStorage.setItem('user', 'null');
        });

        this.httpService.get('/');
    }

    SignIn(email: string, password: string) {
        return this.httpService.post('http://localhost:5000/auth/signin');
    }

    SignUp(email: string, password: string) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then(async result => {
                await this.SetUserData(result.user);

                this.SendVerificationMail();
            })
            .catch(error => {
                this.toastr.error(error.message);
            });
    }

    SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['verify-email-address']);
            });
    }

    ForgotPassword(passwordResetEmail: string) {
        return this.afAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                this.toastr.info(
                    'Password reset email sent, check your inbox.'
                );
            })
            .catch(error => {
                this.toastr.error(error);
            });
    }

    get getUser(): User {
        const user = JSON.parse(localStorage.getItem('user')!);

        return user;
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);

        return user !== null;
    }

    GitHubAuth() {
        return this.AuthLogin(new auth.GithubAuthProvider()).then(
            (res: any) => {
                if (res) this.router.navigate(['dashboard']);
            }
        );
    }

    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider()).then(
            (res: any) => {
                if (res) this.router.navigate(['dashboard']);
            }
        );
    }

    AuthLogin(provider: any) {
        return this.afAuth
            .signInWithPopup(provider)
            .then(async result => {
                this.toastr.success('Welcome back!');

                await this.SetUserData(result.user);
                this.router.navigate(['dashboard']);
            })
            .catch(error => {
                this.toastr.error(error);
            });
    }

    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`
        );
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
            merge: true,
        });
    }

    SignOut() {
        return this.afAuth.signOut().then(() => {
            this.toastr.info('See you soon.');

            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
        });
    }
}
