import { Injectable } from '@angular/core';
import {timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  source = null;

  startAlertsTimer() {
    if (this.source == null) {
      this.source = timer(1000, 5000);
      this.source.subscribe(val => {
        console.log("val=", val);
      })
    }
  }

  constructor() { }
}
