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
