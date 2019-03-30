import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromReducers from "../store/reducers";
import {Logout, SignupAction} from "../store/actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;
  confirmPassword: string;

  constructor(
    private store: Store<fromReducers.State>
  ) { }

  onSubmit() {
    this.store.dispatch(new SignupAction(this.username, this.password, () => console.log("done")));
  }

  ngOnInit() {
    this.store.dispatch(new Logout());
  }

}
