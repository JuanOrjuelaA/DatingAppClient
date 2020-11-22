import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUrl = '/api/';

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(this.baseUrl + 'User');
    }
}
