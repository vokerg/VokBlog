import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import {storeLogger} from "ngrx-store-logger";
import * as fromActiveUser from "./activeUser";
import * as fromCurrentArticle from "./currentArticle";
import * as fromFilteredArticles from "./filteredArticles";
import * as fromFilteredComments from "./filteredComments";
import * as fromFilteredAuthors from "./filteredAuthors";
import {localStorageSync} from "ngrx-store-localstorage";

export interface State {
  activeUser: fromActiveUser.State;
  currentArticle: fromCurrentArticle.State;
  filteredArticles: fromFilteredArticles.State,
  filteredComments: fromFilteredComments.State
  filteredAuthors: fromFilteredAuthors.State
}

export const reducers: ActionReducerMap<State> = {
  activeUser: fromActiveUser.reducer,
  currentArticle: fromCurrentArticle.reducer,
  filteredArticles: fromFilteredArticles.reducer,
  filteredComments: fromFilteredComments.reducer,
  filteredAuthors: fromFilteredAuthors.reducer
};

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<any> {
  return localStorageSync({keys: ['activeUser'], rehydrate:true})(reducer);
}

export const metaReducers = [localStorageSyncReducer, logger];


/*selectors*/
const activeUserStateFeatureSelector = createFeatureSelector<fromActiveUser.State>('activeUser');

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


const currentArticleFeatureSelector = createFeatureSelector<fromCurrentArticle.State>('currentArticle');
export const getCurrentArticle = createSelector(
  currentArticleFeatureSelector,
  fromCurrentArticle.getCurrentArticle
);

const filteredArticlesFeatureSelector =
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

const filteredCommentsFeatureSelector =
  createFeatureSelector<fromFilteredComments.State>('filteredComments');
export const getMainPageComments = createSelector(
  filteredCommentsFeatureSelector,
  fromFilteredComments.getMainPageComments
);

const filteredAuthorsFeatureSelector =
  createFeatureSelector<fromFilteredAuthors.State>('filteredAuthors');
export const getMainPageAuthors = createSelector(
  filteredAuthorsFeatureSelector,
  fromFilteredAuthors.getMainPageAuthors
);
