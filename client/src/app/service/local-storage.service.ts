import { Injectable } from '@angular/core';
import {AuthenticatedUser} from "../model/authenticatedUser";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveAuthenticatedUser(user: AuthenticatedUser) {
    localStorage.setItem("token", user.token);
    localStorage.setItem("userId", user.userId);
    localStorage.setItem("username", user.username);
  }

  clearAuthenticatedUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
  }

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
