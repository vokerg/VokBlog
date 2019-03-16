import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private loginService: LoginService) { }

  onLogin() {
    console.log("in login function ", this.login, this.password);
    this.loginService.login(this.login, this.password)
    return null;
  }

  ngOnInit() {
  }

}
