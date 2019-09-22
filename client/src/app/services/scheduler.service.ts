import { Injectable } from '@angular/core';
import {timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  observalbeTimer() {
    const source = timer(1000, 5000);
    const abc = source.subscribe(val => {
      console.log("val=", val);
    })
  }

  constructor() { }
}
