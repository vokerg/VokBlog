import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromReducers from "../store/reducers";
import {Logout} from "../store/actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private store: Store<fromReducers.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new Logout());
  }

}
