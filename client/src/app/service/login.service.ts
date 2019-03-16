import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(login: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new HttpParams()
      .set('username', login)
      .set('password', password);

    console.log(login, password);

    this.httpClient.post("api/users/login", body.toString(), httpOptions).subscribe(res => console.log(res));

  }


  constructor(private httpClient: HttpClient) { }
}
