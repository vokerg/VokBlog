import {Action} from "@ngrx/store";
import {AuthenticatedUser} from "../../model/authenticatedUser";
import {AuthenticationUser} from "../../model/authenticationUser";
import {Article} from "../../model/article";
import {Comment} from "../../model/comment";
import {Author} from "../../model/author";

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
  constructor(public authenticationUser: AuthenticationUser, public callback: ()=>void) {}
}

export class LoadArticleAction {
  type = "LOAD_ARTICLE";
  constructor(public articleId: string) {}
}

export class LoadArticleCompletedAction {
  type = "LOAD_ARTICLE_COMPLETED";
  constructor(public article: Article, public comments: Comment[]) {}
}

export class LoadArticlesAction {
  type = "LOAD_ARTICLES";
  constructor(public tag: string) {}
}

export class LoadAuthorArticlesAction {
  type = "LOAD_AUTHOR_ARTICLES";
  constructor(public authorId:string, public tag:string) {}
}

export class LoadArticlesCompletedAction {
  type = "LOAD_ARTICLES_COMPLETED";
  constructor(public articles: Article[], public filter:string) {}
}

export class LoadLatestCommentsAction {
  type = "LOAD_LATEST_COMMENTS";
  constructor() {}
}

export class LoadLatestCommentsCompletedAction {
  type = "LOAD_LATEST_COMMENTS_COMPLETED";
  constructor(public comments: Comment[], public filter:string) {}
}

export class LoadTopAuthorsAction {
  type = "LOAD_TOP_AUTHORS";
  constructor() {}
}

export class LoadTopAuthorsCompletedAction {
  type = "LOAD_TOP_AUTHORS_COMPLETED";
  constructor(public authors: Author[], public filter:string) {}
}

export class AddArticle {
  type = "ADD_ARTICLE";
  constructor(public article: Article, public callback: (idArticle:string) => void) {}
}

export class AddArticleCompleted {
  type = "ADD_ARTICLE_COMPLETED";
  constructor(public article: Article) {}
}

export class UpdateArticle {
  type = "UPDATE_ARTICLE";
  constructor(public article: Article, public callback: () => void) {}
}

export class UpdateArticleCompleted {
  type = "UPDATE_ARTICLE_COMPLETED";
  constructor(public article: Article) {}
}

export class AddComment {
  type = "ADD_COMMENT";
  constructor(public comment: Comment) {}
}

export class AddCommentCompleted {
  type = "ADD_COMMENT_COMPLETED";
  constructor(public comment: Comment) {}
}

export class LikeArticle implements Action {
  type = "LIKE_ARTICLE";
  constructor(public articleId: string) {}
}

export class LikeArticleCompleted implements Action {
  type = "LIKE_ARTICLE_COMPLETED";
  constructor(public articleId: string) {}
}

export class UnLikeArticle implements Action {
  type = "UNLIKE_ARTICLE";
  constructor(public articleId: string) {}
}

export class UnLikeArticleCompleted implements Action {
  type = "UNLIKE_ARTICLE_COMPLETED";
  constructor(public articleId: string) {}
}

export class LikeComment implements Action {
  type = "LIKE_COMMENT";
  constructor(public commentId: string) {}
}

export class LikeCommentCompleted implements Action {
  type = "LIKE_COMMENT_COMPLETED";
  constructor(public commentId: string) {}
}

export class UnLikeComment implements Action {
  type = "UNLIKE_COMMENT";
  constructor(public commentId: string) {}
}

export class UnLikeCommentCompleted implements Action {
  type = "UNLIKE_COMMENT_COMPLETED";
  constructor(public commentId: string) {}
}

export class FailedCallingApi implements Action {
  type = "FAILED_CALLING_API";
  constructor(public error: any) {}
}

export class LoadSubCommentsAction implements Action {
  type = "LOAD_SUBCOMMENTS";
  constructor(public idParentComment: string) {}
}

export class LoadSubCommentsCompletedAction implements Action {
  type = "LOAD_SUBCOMMENTS_COMPLETED";
  constructor(public idParentComment: string, public comments: Comment[]) {}
}

export class LoadArticleCommentsAction implements Action {
  type = "LOAD_ARTICLE_COMMENTS";
  constructor(public idArticle: string) {}
}

export class LoadArticleCommentsCompletedAction implements Action {
  type = "LOAD_ARTICLE_COMMENTS_COMPLETED";
  constructor(public idArticle: string, public comments: Comment[]) {};
}
