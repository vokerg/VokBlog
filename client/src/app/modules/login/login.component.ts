import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromReducers from "../../store/reducers/index";
import {LoginAction, LoginUnsuccessful} from "../../store/actions/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store<fromReducers.State>
  ) { }

  onLogin() {
    this.store.dispatch(
      new LoginAction(this.username, this.password, () =>
        this.router.navigate(['/'])
      )
    );
  }

  ngOnInit() {
  }

}