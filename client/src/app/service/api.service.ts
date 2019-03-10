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
    return{ 'Authorization': `Bearer ${token}` };
  }

  public getRequestOptions() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', ...this.getAuthorizationHeader()});
    return { headers: headers };
  }
}
