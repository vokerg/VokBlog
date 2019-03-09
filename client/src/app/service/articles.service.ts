
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Article } from '../model/article';
import { Comment } from '../model/comment';
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class ArticlesService {

  constructor(
    private http: HttpClient,
    private authenticationService: LocalStorageService
  ) {}

  private getAuthorizationHeader() : any {
    const token: String = this.authenticationService.getAuthenticationToken();
    return{ 'Authorization': `Bearer ${token}` };
  }

  private getRequestOptions() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', ...this.getAuthorizationHeader()});
    return { headers: headers };
  }

  getArticles():Observable<Article[]> {
    return this.http.get<any>('api/articles').pipe(map(articles => <Article[]>articles));
  }

  getArticle(articleId: number):Observable<Article> {
    return this.http.get<any>('api/articles/' + articleId);
  }

  getComments(articleId: number):Observable<Comment[]> {
    return this.http.get<any>(`api/articles/${articleId}/comments`)
      .pipe(map(response => <Comment[]>response));
  }

  updateArticle(article: Article): Observable<number> {
    return this.http.post<any>(`api/articles/${article.id}`, article, this.getRequestOptions())
      .pipe(map((res, err) => err));
  }

  createArticle(article: Article) : Observable<number> {
    console.log("article in api", article)
    const {id, ...processedArticle} = article;
    return this.http.put<any>('api/articles/', processedArticle, this.getRequestOptions())
      .pipe(map((res, err) => err));
  }

  addComment(articleId: String, comment: Comment):Observable<number> {
    return this.http.put<any>(`api/articles/${articleId}/comments`, {...comment}, this.getRequestOptions())
      .pipe(map((res, err) => err));
  }

}
