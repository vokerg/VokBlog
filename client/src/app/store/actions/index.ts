import {Action} from "@ngrx/store";

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
  constructor(public username: string, public password: string){}
}

export class LoginSuccessful implements Action {
  type = "LOGIN_SUCCESSFUL";
}

export class LoginUnsuccessful implements Action {
  type = "LOGIN_UNSUCCESSFUL";
}
