import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import {storeLogger} from "ngrx-store-logger";
import * as fromActiveUser from "./activeUser";
import {localStorageSync} from "ngrx-store-localstorage";

export interface State {
  activeUser: fromActiveUser.State;
}

export const reducers: ActionReducerMap<State> = {
  activeUser: fromActiveUser.reducer
}

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<any> {
  console.log("in local storage sync reducer");
  return localStorageSync({keys: ['activeUser'], rehydrate:true})(reducer);
}

export const metaReducers = [localStorageSyncReducer, logger];

/*selectors*/
export const getActiveUserState = createFeatureSelector<fromActiveUser.State>('activeUser');

export const getActiveUsername = createSelector(
  getActiveUserState,
  fromActiveUser.getActiveUsername
)

export const getToken = createSelector(
  getActiveUserState,
  fromActiveUser.getToken
)

export const isAuthenticated = createSelector(
  getActiveUserState,
  fromActiveUser.isAuthenticated
)

export const getActiveUser = createSelector(
  getActiveUserState,
  fromActiveUser.getActiveUser
)
