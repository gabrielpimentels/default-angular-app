import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private localStorage: LocalStorageService) {}

    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const authToken = this.localStorage.getData('auth');

        console.log('authToken', authToken);

        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + 'authToken',
            },
        });

        return next.handle(req);
    }
}

export const httpRequestInterceptorProvider = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpRequestInterceptor,
        multi: true,
    },
];
