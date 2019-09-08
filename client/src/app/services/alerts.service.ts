import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {Observable} from "rxjs";
import {map, mergeAll} from "rxjs/operators";
import {Alert} from "../model/alert";
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlertsService extends ApiService{

  constructor(
    private http: HttpClient,
    store: Store<fromRoot.State>
  ) {
    super(store);
  }

  public getUsersAlerts(): Observable<Alert[]> {
    return this.getRequestOptions().pipe(
      map((requestOptions) =>
        this.http.get<any>('api/alerts', requestOptions)
      ),
      mergeAll()
    )
  }

  public readAlert(alert:Alert): Observable<any> {
    return this.getRequestOptions().pipe(
      map(requestOptions =>
        this.http.post(`api/alerts/${alert.id}/read`, requestOptions)
      ),
      mergeAll()
    )
  }
}
