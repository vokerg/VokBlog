import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username$: Observable<string>;
  constructor(
    private loginService: LoginService,
    private store: Store<fromRoot.State>
  ) {
    this.username$ = store.select(fromRoot.getActiveUsername);
  }

  isAuthenticated:boolean;

  ngOnInit() {
    this.isAuthenticated = this.loginService.isAuthenticated();
  }

}
