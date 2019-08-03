import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticatedUser} from "../modules/model/authenticatedUser";
import {AuthenticationUser} from "../modules/model/authenticationUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  login(username: string, password: string): Observable<AuthenticatedUser> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.httpClient.post<AuthenticatedUser>("api/users/login", body.toString(), httpOptions);
  }

  signup(authenticationUser: AuthenticationUser): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.httpClient.put<any>("api/users/signup", JSON.stringify(authenticationUser), httpOptions);
  }

  constructor(
    private httpClient: HttpClient,
  ) { }
}
