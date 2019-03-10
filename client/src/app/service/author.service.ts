import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Comment } from '../model/comment';
import { Article } from '../model/article';
import {ArticlesService} from "./articles.service";
import {ApiService} from "./api.service";
import {HttpClient} from "../../../node_modules/@angular/common/http";
import {LocalStorageService} from "./local-storage.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends ApiService{

  constructor(
    private http: HttpClient,
    localStorageService: LocalStorageService
  ) {
    super(localStorageService);
  }

  getAuthor(authorId: number):Author {
    return new Author();
  }

  getAuthorComments(authorId: number):Comment[] {
    let comment: Comment = new Comment();
    comment.author = "aaass";
    comment.text="blablabla";

    let comment1 = <Comment>({
      author:"aaadfsdfsdf",
      text:"aaaaa"
    });

    return [comment, comment1];
  }

  getAuthorArticles(authorId: string): Observable<Article[]> {
    return this.http.get<any>(`api/authors/${authorId}/articles`)
      .pipe(map(articles => <Article[]>articles));
  }
}
