import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  onLogin() {
    console.log("in login function ", this.login, this.password);
    this.loginService.login(this.login, this.password).take(1).subscribe(
      () => this.router.navigate(['/']),
      error => console.log("error in the component", error)
      );
  }

  ngOnInit() {
  }

}
