import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthenticatedUser} from "../model/authenticatedUser";
import {catchError, map} from "rxjs/operators";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  login(username: string, password: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.httpClient.post("api/users/login", body.toString(), httpOptions)
      .pipe(
        map(result => {
          this.localStorageService.saveAuthenticatedUser((<AuthenticatedUser> result));
          return "OK";
        }),
          catchError(err => {
            this.localStorageService.clearAuthenticatedUser();
            return throwError(err);
          })
      )
  }

  isAuthenticated() {
    return (this.localStorageService.getUserId() !== null);
  }

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }
}
