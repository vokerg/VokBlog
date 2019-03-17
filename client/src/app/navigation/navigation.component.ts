import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  isAuthenticated:boolean;

  ngOnInit() {
    this.isAuthenticated = this.loginService.isAuthenticated();
  }

}
