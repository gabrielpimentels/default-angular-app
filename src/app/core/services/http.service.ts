import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    post(endpoint: string, body?: object): Observable<any> {
        return this.http.post(endpoint, body);
    }

    get(endpoint: string): Observable<any> {
        return this.http.get(endpoint);
    }

    put(endpoint: string, body?: object): Observable<any> {
        return this.http.put(endpoint, body);
    }

    delete(endpoint: string): Observable<any> {
        return this.http.delete(endpoint);
    }
}
