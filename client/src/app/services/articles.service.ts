
import {map, mergeAll} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Article } from '../model/article';
import {ApiService} from "./api.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {Like} from "../model/like";

@Injectable()
export class ArticlesService extends ApiService{

  constructor(
    private http: HttpClient,
    store: Store<fromRoot.State>
  ) {
    super(store);
  }

  getArticles(tag:string):Observable<Article[]> {
    return (tag) ? this.getArticlesByTag(tag) : this.getAllArticles();
  }

  getAllArticles():Observable<Article[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Article[]>('api/articles', requestOptions)),
      mergeAll()
    );
  }

  getArticlesByTag(tag:string):Observable<Article[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Article[]>(`api/articles?tag=${tag}`, requestOptions)),
      mergeAll()
    );
  }

  getArticlesByAuthorId(authorId: string): Observable<Article[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Article[]>(`api/authors/${authorId}/articles`, requestOptions)),
      mergeAll()
    );
  }

  getFeedArticles(): Observable<Article[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Article[]>(`api/articles/?isFeed=true`, requestOptions)),
      mergeAll()
    );
  }

  getArticle(articleId: string):Observable<Article> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Article>(`api/articles/${articleId}`, requestOptions)),
      mergeAll()
    );
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
        map(requestOptions => this.http.put<Article>('api/articles', processedArticle, requestOptions)),
        mergeAll()
      )
  }

  likeArticle(articleId): Observable<any> {
    return this.getRequestOptions().pipe(
      map((requestOptions) =>
        this.http.put<any>(`api/articles/${articleId}/like`, {}, requestOptions)
      ),
      mergeAll()
    )
  }

  unLikeArticle(articleId): Observable<any> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.delete(`api/articles/${articleId}/like`, requestOptions)),
      mergeAll()
    )
  }

  getArticleLikes(articleId): Observable<Like[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Like[]>(`api/articles/${articleId}/likes`, requestOptions)),
      mergeAll()
    )
  }

  shareArticle(articleId: string): Observable<Article> {
    return this.getRequestOptions()
      .pipe(
        map((requestOptions) => this.http.put<Article>(`api/articles/${articleId}/shares`, null, requestOptions)),
        mergeAll()
      )
  }
}
