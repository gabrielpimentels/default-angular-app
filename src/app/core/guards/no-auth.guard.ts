import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/modules/auth/services';

@Injectable({
    providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn === true)
            this.router.navigate(['/dashboard']);

        return true;
    }
}
