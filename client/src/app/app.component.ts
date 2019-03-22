import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromReducers from './store/reducers';
import {Observable} from "rxjs";
import {setSomething, SomeActionForEffects} from "./store/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app12';

  constructor(
    private store: Store<fromReducers.State>
  ) {
    this.someString = store.select("someElement");
    console.log("some string obs", this.someString);
    console.log("store", store);
  }

  someString: Observable<string>;

  doSomething() {
    this.store.dispatch(new setSomething("another string"));
  }

  doSomethingElse() {
    this.store.dispatch(new SomeActionForEffects("another payload"));
  }

  ngOnInit() {}
}
