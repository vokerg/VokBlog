import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import {storeLogger} from "ngrx-store-logger";
import * as fromActiveUser from "./activeUser";
import * as fromCurrentArticle from "./currentArticle";
import * as fromMainPage from "./mainPage";
import * as fromFilteredArticles from "./filteredArticles";
import * as fromFilteredComments from "./filteredComments";
import {localStorageSync} from "ngrx-store-localstorage";

export interface State {
  activeUser: fromActiveUser.State;
  currentArticle: fromCurrentArticle.State;
  mainPage: fromMainPage.State;
  filteredArticles: fromFilteredArticles.State,
  filteredComments: fromFilteredComments.State
}

export const reducers: ActionReducerMap<State> = {
  activeUser: fromActiveUser.reducer,
  currentArticle: fromCurrentArticle.reducer,
  mainPage: fromMainPage.reducer,
  filteredArticles: fromFilteredArticles.reducer,
  filteredComments: fromFilteredComments.reducer,
};

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<any> {
  return localStorageSync({keys: ['activeUser'], rehydrate:true})(reducer);
}

export const metaReducers = [localStorageSyncReducer, logger];


/*selectors*/
export const activeUserStateFeatureSelector = createFeatureSelector<fromActiveUser.State>('activeUser');

export const getActiveUsername = createSelector(
  activeUserStateFeatureSelector,
  fromActiveUser.getActiveUsername
);

export const getToken = createSelector(
  activeUserStateFeatureSelector,
  fromActiveUser.getToken
);

export const isAuthenticated = createSelector(
  activeUserStateFeatureSelector,
  fromActiveUser.isAuthenticated
);

export const getActiveUser = createSelector(
  activeUserStateFeatureSelector,
  fromActiveUser.getActiveUser
);


export const currentArticleFeatureSelector = createFeatureSelector<fromCurrentArticle.State>('currentArticle');
export const getCurrentArticle = createSelector(
  currentArticleFeatureSelector,
  fromCurrentArticle.getCurrentArticle
);

export const mainPageFeatureSelector = createFeatureSelector<fromMainPage.State>('mainPage');
// export const getMainPageComments = createSelector(
//   mainPageFeatureSelector,
//   fromMainPage.getComments
// );
export const getMainPageAuthors = createSelector(
  mainPageFeatureSelector,
  fromMainPage.getAuthors
);

export const filteredArticlesFeatureSelector =
  createFeatureSelector<fromFilteredArticles.State>('filteredArticles');
export const getMainPageArticles = createSelector(
  filteredArticlesFeatureSelector,
  fromFilteredArticles.getMainPageArticles
);
export const getTagArticles = createSelector(
  filteredArticlesFeatureSelector,
  fromFilteredArticles.getTagArticles
);
export const getAuthorArticles = createSelector(
  filteredArticlesFeatureSelector,
  fromFilteredArticles.getAuthorArticles
);

export const filteredCommentsFeatureSelector =
  createFeatureSelector<fromFilteredComments.State>('filteredComments');
export const getMainPageComments = createSelector(
  filteredCommentsFeatureSelector,
  fromFilteredComments.getMainPageComments
);
