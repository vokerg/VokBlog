import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import * as fromRoot from "../store/reducers";

import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";
import {Observable} from "rxjs";
import {map, mergeAll} from "rxjs/operators";
import {Like} from "../model/like";

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

  getCommentsForArticle(articleId: string):Observable<Comment[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Comment[]>(`api/articles/${articleId}/comments`, requestOptions)),
      mergeAll()
    );
  }

  getCommentsForParentComment(idParentComment: string):Observable<Comment[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Comment[]>(`api/comments?idParentComment=${idParentComment}`, requestOptions)),
      mergeAll()
    );
  }

  getTopComments():Observable<Comment[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Comment[]>('api/comments', requestOptions)),
      mergeAll()
    );
  }

  getCommentsByAuthorId(authorId: string): Observable<Comment[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Comment[]>(`api/authors/${authorId}/comments`, requestOptions)),
      mergeAll()
    );
  }

  getCommentLikes(commentId): Observable<Like[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Like[]>(`api/comments/${commentId}/likes`, requestOptions)),
      mergeAll()
    )
  }

  likeComment(commentId: string): Observable<any> {
    return this.getRequestOptions().pipe(
      map((requestOptions) =>
        this.http.put<any>(`api/comments/${commentId}/like`, {}, requestOptions)
      ),
      mergeAll()
    )
  }

  unLikeComment(commentId: string): Observable<any> {
    return this.getRequestOptions().pipe(
      map((requestOptions) => this.http.delete(`api/comments/${commentId}/like`, requestOptions)),
      mergeAll()
    )
  }

}
