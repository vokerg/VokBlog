
import {map, mergeAll, mergeMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Article } from '../model/article';
import { Comment } from '../model/comment';
import {ApiService} from "./api.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";

@Injectable()
export class ArticlesService extends ApiService{

  constructor(
    private http: HttpClient,
    store: Store<fromRoot.State>
  ) {
    super(store);
  }

  getArticles():Observable<Article[]> {
    return this.http.get<Article[]>('api/articles');
  }

  getArticlesByTag(tag:string):Observable<Article[]> {
    return this.http.get<Article[]>(`api/articles?tag=${tag}`);
  }

  getArticle(articleId: string):Observable<Article> {
    return this.http.get<Article>(`api/articles/${articleId}`);
  }

  getComments(articleId: string):Observable<Comment[]> {
    return this.http.get<Comment[]>(`api/articles/${articleId}/comments`);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.post<Article>(`api/articles/${article.id}`, article, requestOptions)),
      mergeAll()
    );
  }

  createArticle(article: Article) : Observable<Article> {
    const {id, ...processedArticle} = article;
    return this.getRequestOptions()
      .pipe(
        map((requestOptions) => this.http.put<Article>('api/articles', processedArticle, requestOptions)),
        mergeAll()
      )
  }

  addComment(articleId: String, comment: Comment):Observable<Comment> {
    return this.getRequestOptions()
      .pipe(
        map((requestOptions) => this.http.put<Comment>(`api/articles/${articleId}/comments`, {...comment}, requestOptions)),
        mergeAll()
      )
  }

}
