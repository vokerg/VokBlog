
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Article } from '../model/article';
import { Comment } from '../model/comment';
import {LocalStorageService} from "./local-storage.service";
import {ApiService} from "./api.service";

@Injectable()
export class ArticlesService extends ApiService{

  constructor(
    private http: HttpClient,
    localStorageService: LocalStorageService
  ) {
    super(localStorageService);
  }

  getArticles():Observable<Article[]> {
    return this.http.get<Article[]>('api/articles');
  }

  getArticle(articleId: number):Observable<Article> {
    return this.http.get<any>('api/articles/' + articleId);
  }

  getComments(articleId: number):Observable<Comment[]> {
    return this.http.get<Comment[]>(`api/articles/${articleId}/comments`);
  }

  updateArticle(article: Article): Observable<number> {
    return this.http.post<any>(`api/articles/${article.id}`, article, this.getRequestOptions())
      .pipe(map((res, err) => err));
  }

  createArticle(article: Article) : Observable<number> {
    const {id, ...processedArticle} = article;
    return this.http.put<any>('api/articles/', processedArticle, this.getRequestOptions())
      .pipe(map((res, err) => err));
  }

  addComment(articleId: String, comment: Comment):Observable<number> {
    return this.http.put<any>(`api/articles/${articleId}/comments`, {...comment}, this.getRequestOptions())
      .pipe(map((res, err) => err));
  }

}
