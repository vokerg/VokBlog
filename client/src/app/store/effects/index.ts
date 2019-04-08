import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ArticlesService} from "../../service/articles.service";
import {
  FetchArticleAction,
  LoadArticleAction,
  LoginAction,
  LoginSuccessful,
  LoginUnsuccessful,
  SignupAction,
} from "../actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {LoginService} from "../../service/login.service";
import {AuthenticatedUser} from "../../model/authenticatedUser";

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private loginService: LoginService,
  ) {}

  @Effect()
  login$: Observable<Action> =
    this.actions$.pipe(
      ofType<LoginAction>('LOGIN'),
      map(action => {
        return {username: action.username, password: action.password, callback: action.callback}
      }),
      mergeMap(({username, password, callback}) =>
        this.loginService.login(username, password)
          .pipe(
            map((authenticatedUser:AuthenticatedUser) => {
              callback();
              return new LoginSuccessful(authenticatedUser);
            }),
            catchError(() => of(new LoginUnsuccessful()))
          )
      )
    );

  @Effect()
  signup$: Observable<Action> =
    this.actions$.pipe(
      ofType<SignupAction>('SIGNUP'),
      map(action => ({authenticationUser: action.authenticationUser, callback: action.callback})),
      mergeMap(({authenticationUser, callback}) =>
        this.loginService.signup(authenticationUser)
          .pipe(
            map(() => new LoginAction(authenticationUser.username, authenticationUser.password, callback))
          )
      )
    );

  @Effect()
  loadArticles$: Observable<Action> =
    this.actions$.pipe(
      ofType<LoadArticleAction>("LOAD_ARTICLE"),
      mergeMap(({articleId}) =>
        this.articlesService.getArticle(articleId).pipe(
          mergeMap(article =>
            this.articlesService.getComments(articleId).pipe(
              map(comments => new FetchArticleAction(article, comments))
            )
          )
        )
      )
    );

}
