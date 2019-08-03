import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromReducers from "../../store/reducers/index";
import {Logout, SignupAction} from "../../store/actions/index";
import {AuthenticationUser} from "../model/authenticationUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authenticationUser: AuthenticationUser;
  confirmPassword: string;

  constructor(
    private store: Store<fromReducers.State>,
    private router: Router,
  ) { }

  onSubmit() {
    this.store.dispatch(
      new SignupAction(this.authenticationUser, () => this.router.navigate(['/']))
    );
  }

  ngOnInit() {
    this.store.dispatch(new Logout());
    this.authenticationUser = new AuthenticationUser();
  }

}
