import {Action} from "@ngrx/store";
import {AuthenticatedUser} from "../../model/authenticatedUser";

export class setSomething implements Action {
  type = "SET_SOMETHING";

  constructor(public payload: string){}
}

export class SomeActionForEffects implements Action {
  type = "ACTION_FOR_EFFECTS";

  constructor(public payload: string){}
}

export class SetSomethingElse implements  Action {
  type = "SET_SOMETHING_ELSE";
  constructor() {}
}

export class LoginAction implements Action {
  type = "LOGIN";
  constructor(public username: string, public password: string, public callback: ()=>void){}
}

export class Logout implements Action {
  type = "LOGOUT";
  constructor(){}
}

export class LoginSuccessful implements Action {
  type = "LOGIN_SUCCESSFUL";
  constructor (public payload:AuthenticatedUser) {};
}

export class LoginUnsuccessful implements Action {
  type = "LOGIN_UNSUCCESSFUL";
}

export class SignupAction {
  type = "SIGNUP";
  constructor(public username: string, public password: string, public callback: ()=>void) {}
}
