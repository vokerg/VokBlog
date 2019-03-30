import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ArticlesService} from "../../service/articles.service";
import {
  LoginAction,
  LoginSuccessful,
  LoginUnsuccessful,
  SetSomethingElse,
  SignupAction,
  SomeActionForEffects
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
  loadArticles$: Observable<Action> =
    this.actions$.pipe(
      ofType<SomeActionForEffects>('ACTION_FOR_EFFECTS'),
      mergeMap(() => this.articlesService.getArticles()
          .map(articles => new SetSomethingElse())
        )
    )

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
    )

  @Effect()
  signup$: Observable<Action> =
    this.actions$.pipe(
      ofType<SignupAction>('SIGNUP'),
      map(action => {
        return {username: action.username, password: action.password, callback: action.callback}
      }),
      mergeMap(({username, password, callback}) =>
        this.loginService.signup(username, password)
          .pipe(
            map(() => {
              return new LoginAction(username, password, callback)
            })
          )
      )
    )
}
