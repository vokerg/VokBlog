import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticatedUser} from "../model/authenticatedUser";
import {LocalStorageService} from "./local-storage.service";

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

  isAuthenticated() {
    return (false);
  }

  constructor(
    private httpClient: HttpClient,
  ) { }
}
