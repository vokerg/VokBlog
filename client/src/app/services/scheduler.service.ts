import { Injectable } from '@angular/core';
import {timer} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {LoadUsersAlerts} from "../store/actions";

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  source = null;

  startAlertsTimer() {
    if (this.source == null) {
      this.source = timer(1000, 5000);
      this.source.subscribe(val => {
        this.store.dispatch(new LoadUsersAlerts());
      })
    }
  }

  constructor(
    private store: Store<fromRoot.State>,
  ) { }
}
