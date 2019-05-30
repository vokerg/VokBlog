import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ArticlesService} from "../../service/articles.service";
import {
  AddArticle,
  AddArticleCompleted,
  AddComment,
  AddCommentCompleted,
  FailedCallingApi,
  LoadArticleCompletedAction, LoadArticlesCompletedAction,
  LikeArticle,
  LikeArticleCompleted,
  LikeComment,
  LikeCommentCompleted,
  LoadArticleAction, LoadArticlesAction,
  LoginAction,
  LoginSuccessful,
  LoginUnsuccessful,
  SignupAction,
  UnLikeArticle,
  UnLikeArticleCompleted,
  UnLikeComment,
  UnLikeCommentCompleted,
  UpdateArticle,
  UpdateArticleCompleted,
} from "../actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {LoginService} from "../../service/login.service";
import {AuthenticatedUser} from "../../model/authenticatedUser";
import {CommentsService} from "../../service/comments.service";

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private commentsService: CommentsService,
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
  loadArticle$: Observable<Action> =
    this.actions$.pipe(
      ofType<LoadArticleAction>("LOAD_ARTICLE"),
      mergeMap(({articleId}) =>
        this.articlesService.getArticle(articleId).pipe(
          mergeMap(article =>
            this.commentsService.getCommentsForArticle(articleId).pipe(
              map(comments => new LoadArticleCompletedAction(article, comments))
            )
          )
        )
      )
    );

   @Effect()
   loadArticles$: Observable<Action> =
     this.actions$.pipe(
       ofType<LoadArticlesAction>("LOAD_ARTICLES"),
       mergeMap(() =>
         this.articlesService.getArticles().pipe(
           map(articles => new LoadArticlesCompletedAction(articles)),
           catchError(err => Observable.of(new FailedCallingApi(err)))
         )
       )
     );

  @Effect()
  addComment$: Observable<Action> =
    this.actions$.pipe(
      ofType<AddComment>("ADD_COMMENT"),
      mergeMap(({comment}) =>
        this.commentsService.addComment(comment.idArticle, comment).pipe(
          map(serverComment => new AddCommentCompleted(serverComment))
        )
      )
    );

  @Effect()
  addArticle$: Observable<Action> =
    this.actions$.pipe(
      ofType<AddArticle>("ADD_ARTICLE"),
      mergeMap(({article, callback}) =>
        this.articlesService.createArticle(article).pipe(
          map(serverArticle => {
            callback(serverArticle.id)
            return new AddArticleCompleted(serverArticle);
          })
        )
      )
    );

  @Effect()
  updateArticles$: Observable<Action> =
    this.actions$.pipe(
      ofType<UpdateArticle>("UPDATE_ARTICLE"),
      mergeMap(({article, callback}) =>
        this.articlesService.updateArticle(article).pipe(
          map(
            (serverArticle) => {
                      callback();
                      return new UpdateArticleCompleted(serverArticle);
                    },
            catchError(err => Observable.of(new FailedCallingApi(err)))
          )
        )
      )
    );

  @Effect()
  likeArticle$: Observable<Action> =
    this.actions$.pipe(
      ofType<LikeArticle>("LIKE_ARTICLE"),
      mergeMap(({articleId}) =>
        this.articlesService.likeArticle(articleId).pipe(
          map(() => new LikeArticleCompleted(articleId)),
          catchError(err => Observable.of(new FailedCallingApi(err)))
        )
      )
    );

  @Effect()
  unLikeArticle$: Observable<Action> =
    this.actions$.pipe(
      ofType<UnLikeArticle>("UNLIKE_ARTICLE"),
      mergeMap(({articleId}) =>
        this.articlesService.unLikeArticle(articleId).pipe(
          map(() => new UnLikeArticleCompleted(articleId)),
          catchError(err => Observable.of(new FailedCallingApi(err)))
        )
      )
    );

  @Effect()
  likeComment$: Observable<Action> =
    this.actions$.pipe(
      ofType<LikeComment>("LIKE_COMMENT"),
      mergeMap(({commentId}) =>
        this.commentsService.likeComment(commentId).pipe(
          map(() => new LikeCommentCompleted(commentId)),
          catchError(err => Observable.of(new FailedCallingApi(err)))
        )
      )
    );

  @Effect()
  unLikeComments$: Observable<Action> =
    this.actions$.pipe(
      ofType<UnLikeComment>("UNLIKE_COMMENT"),
      mergeMap(({commentId}) =>
        this.commentsService.unLikeComment(commentId).pipe(
          map(() => new UnLikeCommentCompleted(commentId)),
          catchError(err => Observable.of(new FailedCallingApi(err)))
        )
      )
    );
}
