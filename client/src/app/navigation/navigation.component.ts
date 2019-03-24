import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {Logout} from "../store/actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username$: Observable<string>;
  isAuthenticated$: Observable<boolean>
  constructor(
    private loginService: LoginService,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {
    this.username$ = store.select(fromRoot.getActiveUsername);
    this.isAuthenticated$ = store.select(fromRoot.isAuthenticated);
  }

  logout = () => this.store.dispatch(new Logout());
  login = () => this.router.navigate(['/login']);


  ngOnInit() { }

}
