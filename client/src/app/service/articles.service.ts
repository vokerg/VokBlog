
import {map, mergeAll} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Article } from '../model/article';
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

  getArticlesByAuthorId(authorId: string): Observable<Article[]> {
    return this.http.get<Article[]>(`api/authors/${authorId}/articles`);
  }

  getArticle(articleId: string):Observable<Article> {
    return this.http.get<Article>(`api/articles/${articleId}`);
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

  likeArticle(articleId): Observable<any> {
    console.log('likearticle service');
    return this.getRequestOptions().pipe(
      map((requestOptions) => {
          console.log('likearticle service1');
        return this.http.put<any>(`api/articles/${articleId}/like`, {}, requestOptions)
      }
      ),
      mergeAll()
    )
  }

  unLikeArticle(articleId): Observable<any> {
    return this.getRequestOptions().pipe(
      map((requestOptions) => this.http.delete(`api/articles/${articleId}/like`, requestOptions)),
      mergeAll()
    )
  }
}
