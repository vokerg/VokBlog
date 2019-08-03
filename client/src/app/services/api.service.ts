import { Injectable } from '@angular/core';
import * as fromRoot from "../store/reducers";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  public getAuthorizationHeader() : Observable<any> {
    return this.store.select(fromRoot.getToken).pipe(
      map((token: string) => (token) ? {'Authorization': `Bearer ${token}`} : null)
    )
  }

  public getRequestOptions(): Observable<{
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    }> {
    return this.getAuthorizationHeader().pipe(
      map(authorizationHeader => {
        const headers = (authorizationHeader)
          ? new HttpHeaders({ 'Content-Type': 'application/json', ...authorizationHeader}) : null;
        return {headers};
      })
    );
  }
}
