import {Action} from "@ngrx/store";
import {AuthenticatedUser} from "../../model/authenticatedUser";
import {AuthenticationUser} from "../../model/authenticationUser";
import {Article} from "../../model/article";
import {Comment} from "../../model/comment";

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

export class FetchArticleAction {
  type = "FETCH_ARTICLE";
  constructor(public article: Article, public comments: Comment[]) {}
}

export class AddComment {
  type = "ADD_COMMENT";
  constructor(public comment: Comment) {}
}

export class AddCommentToState {
  type = "ADD_COMMENT_TO_STATE";
  constructor(public comment: Comment) {}
}
