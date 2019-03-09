import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getAuthenticationToken(): string {
    return localStorage.getItem("token");
  }

  getUserId(): string {
    return localStorage.getItem("userId");
  }

  getUsername(): string {
    return localStorage.getItem("username");
  }

}
