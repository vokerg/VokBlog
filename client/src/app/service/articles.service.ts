
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Article } from '../model/article';
import { Comment } from '../model/comment';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) {}

  getArticles():Observable<Article[]> {
    return this.http.get<any>('api/articles').pipe(map(articles => <Article[]>articles));
  }

  getArticle(articleId: number):Observable<Article> {
    return this.http.get<any>('api/articles/' + articleId);
  }

  getComments(articleId: number):Observable<Comment[]> {
    return this.http.get<any>(`api/articles/${articleId}/comments` ).pipe(map(response => <Comment[]>response.comments));
  }

  updateArticle(article: Article): Observable<number> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.post<any>(`api/articles/${article.id}`, article, options).pipe(map((res, err) => err));
  }

  createArticle(article: Article) : Observable<number> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    const {id, ...processedArticle} = article;
    return this.http.put<any>('api/articles/', processedArticle, options).pipe(map((res, err) => err));
  }

  addComment(articleId: String, comment: Comment):Observable<number> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.put<any>(`api/articles/${articleId}/comments`, comment, options).pipe(map((res, err) => err));
  }

}
