import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import * as fromRoot from "../store/reducers";

import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";
import {Observable} from "rxjs";
import {map, mergeAll} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends ApiService {

  constructor(
    private http: HttpClient,
    store: Store<fromRoot.State>
  ) {
    super(store);
  }

  addComment(articleId: String, comment: Comment):Observable<Comment> {
    return this.getRequestOptions()
      .pipe(
        map((requestOptions) => this.http.put<Comment>(`api/articles/${articleId}/comments`, {...comment}, requestOptions)),
        mergeAll()
      )
  }

  getComments(articleId: string):Observable<Comment[]> {
    return this.http.get<Comment[]>(`api/articles/${articleId}/comments`);
  }

  getCommentsByAuthorId(authorId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`api/authors/${authorId}/comments`);
  }
}
