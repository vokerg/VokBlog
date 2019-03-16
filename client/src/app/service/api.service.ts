import { Injectable } from '@angular/core';
import {HttpHeaders} from "../../../node_modules/@angular/common/http";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  public getAuthorizationHeader() : any {
    const token: String = this.localStorageService.getAuthenticationToken();
    return (token) ? {'Authorization': `Bearer ${token}`} : null;
  }


  public getRequestOptions() {
    const authorizationHeader = this.getAuthorizationHeader();
    const headers = (authorizationHeader)
      ? new HttpHeaders({ 'Content-Type': 'application/json', ...authorizationHeader}) : null;
    return (headers) ? { headers: headers } : null;
  }
}
