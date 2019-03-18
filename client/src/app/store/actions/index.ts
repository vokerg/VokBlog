import {Action} from "@ngrx/store";

export class setSomething implements Action {
  type = "SET_SOMETHING";

  constructor(public payload: string){}
}
