import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
//import {storeLogger} from "ngrx-store-logger";
import * as fromActiveUser from "./activeUser";
import * as fromCurrentArticle from "./currentArticle";
import * as fromFilteredArticles from "./filteredArticles";
import * as fromFilteredComments from "./filteredComments";
import * as fromFilteredAuthors from "./filteredAuthors";
import * as fromSubComments from "./subComments";
import * as fromArticleComments from "./articleComments";
import * as fromAuthorArticles from "./authorArticles";
import * as fromOpenPanels from "./openPanels";
import {localStorageSync} from "ngrx-store-localstorage";

export interface State {
  activeUser: fromActiveUser.State;
  currentArticle: fromCurrentArticle.State;
  filteredArticles: fromFilteredArticles.State,
  filteredComments: fromFilteredComments.State
  filteredAuthors: fromFilteredAuthors.State
  subComments: Object,
  articleComments: Object,
  authorArticles: fromAuthorArticles.State,
  openPanels: fromOpenPanels.State,
}

export const reducers: ActionReducerMap<State> = {
  activeUser: fromActiveUser.reducer,
  currentArticle: fromCurrentArticle.reducer,
  filteredArticles: fromFilteredArticles.reducer,
  filteredComments: fromFilteredComments.reducer,
  filteredAuthors: fromFilteredAuthors.reducer,
  subComments: fromSubComments.reducer,
  articleComments: fromArticleComments.reducer,
  authorArticles: fromAuthorArticles.reducer,
  openPanels: fromOpenPanels.reducer,
};

//export function logger(reducer: ActionReducer<State>): any {
//  return storeLogger()(reducer);
//}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<any> {
  return localStorageSync({keys: ['activeUser'], rehydrate:true})(reducer);
}

//export const metaReducers = [localStorageSyncReducer, logger];
//TODO enable logger back
export const metaReducers = [localStorageSyncReducer];


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

export const getActiveUserId = createSelector(
  activeUserStateFeatureSelector,
  fromActiveUser.getActiveUserId
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
export const getFeedArticles = createSelector(
  filteredArticlesFeatureSelector,
  fromFilteredArticles.getFeedArticles
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

const subCommentsFeatureSelector = createFeatureSelector<Object>('subComments');
export const getSubCommentsByCommentId = createSelector(
  subCommentsFeatureSelector,
  fromSubComments.getSubCommentsByCommentId
);

const articleCommentsFeatureSelected =
  createFeatureSelector<Object>('articleComments');
export const getCommentsByArticleId = createSelector(
  articleCommentsFeatureSelected,
  fromArticleComments.getCommentsByArticleId
);

const authorArticlesFeatureSelector =
  createFeatureSelector<fromAuthorArticles.State>('authorArticles');
export const getArticlesByIdAuthor = createSelector(
  authorArticlesFeatureSelector,
  fromAuthorArticles.getArticlesByIdAuthor
);

const openPanelsFeatureSelector =
  createFeatureSelector<fromOpenPanels.State>('openPanels');
export const isShareArticlePushed = createSelector(
  openPanelsFeatureSelector,
  fromOpenPanels.isShareArticlePushed
);
export const isExpandCommentsPushed = createSelector(
  openPanelsFeatureSelector,
  fromOpenPanels.isExpandCommentsPushed,
);
export const isAddCommentOpened = createSelector(
  openPanelsFeatureSelector,
  fromOpenPanels.isAddCommentOpened,
);
