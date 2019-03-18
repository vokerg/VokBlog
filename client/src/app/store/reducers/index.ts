import {ActionReducer, ActionReducerMap} from "@ngrx/store";
import {storeLogger} from "ngrx-store-logger";

export interface State {
  someElement: string
}

export function reducer(state:string="ahaha", action) {
  console.log("I'm in the reducer");
  switch (action.type) {
    case "SET_SOMETHING": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
  return state;
}

export const reducers: ActionReducerMap<State> = {
  someElement: reducer
}


export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

