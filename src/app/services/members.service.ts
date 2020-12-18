import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getmembers() {
    return this.http.get<Member[]>(this.baseUrl + 'User', httpOptions);
  }

  getmember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'User/' + username, httpOptions);
  }
}
