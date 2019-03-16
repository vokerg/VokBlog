import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import {empty, Observable} from 'rxjs';
import {AuthenticatedUser} from "../model/authenticatedUser";
import {catchError, map} from "rxjs/operators";

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

    console.log("in login method");

    return this.httpClient.post("api/users/login", body.toString(), httpOptions)
      .pipe(
        map(result => {
          console.log("RESULT",result);
          return "OK";
        }));
  }


  constructor(private httpClient: HttpClient) { }
}
