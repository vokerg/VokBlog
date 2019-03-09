import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getAuthenticationToken():string {
    return localStorage.getItem("token");
  }

}
