import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(environment.api + '/users/logout', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(environment.api + '/auth/profile', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(environment.api + '/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.api + '/admin', { responseType: 'text' });
  }
}
