import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import {storeLogger} from "ngrx-store-logger";
import * as fromActiveUser from "./activeUser";

export interface State {
  activeUser: fromActiveUser.State;
}

export const reducers: ActionReducerMap<State> = {
  activeUser: fromActiveUser.reducer
}

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers = [logger];



/*selectors*/
export const getActiveUserState = createFeatureSelector<fromActiveUser.State>('activeUser');

export const getActiveUsername = createSelector(
  getActiveUserState,
  fromActiveUser.getActiveUsername
)
