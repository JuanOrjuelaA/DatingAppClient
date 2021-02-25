import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getmembers() {
    return this.http.get<Member[]>(this.baseUrl + 'User');
  }

  getmember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'User/' + username);
  }
}
