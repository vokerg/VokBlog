import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ArticlesService} from "../../service/articles.service";
import {LoginAction, LoginSuccessful, SetSomethingElse, SomeActionForEffects} from "../actions";
import {map, mergeMap} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs";
import {LoginService} from "../../service/login.service";

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
        return {username: action.username, password: action.password}
      }),
      mergeMap(({username, password}) => this.loginService.login(username, password)
        .map(() => new LoginSuccessful())
      )
    )
}
