import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ArticlesService} from "../../service/articles.service";
import {setSomething, SetSomethingElse, SomeActionForEffects} from "../actions";
import {map, switchAll, switchMap, mergeMap} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs";

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}


  @Effect()
  loadArticles$: Observable<Action> =
    this.actions$.pipe(
      ofType<SomeActionForEffects>('ACTION_FOR_EFFECTS'),
      mergeMap(() => this.articlesService.getArticles()
          .map(articles => new SetSomethingElse())
        )
    )
}
