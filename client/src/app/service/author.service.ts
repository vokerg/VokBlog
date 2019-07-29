import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import {ApiService} from "./api.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, mergeAll} from "rxjs/operators";
import {Article} from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends ApiService{

  constructor(
    private http: HttpClient,
    store: Store<fromRoot.State>
  ) {
    super(store);
  }

  getAuthor(authorId: string): Observable<Author> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Author>(`api/authors/${authorId}/aggregated`, requestOptions)),
      mergeAll()
    );
  }

  getTopAuthors(): Observable<Author[]> {
    return this.getRequestOptions().pipe(
      map(requestOptions => this.http.get<Author[]>('api/authors', requestOptions)),
      mergeAll()
    );
  }

  followAuthor(idAuthorFollowed: string, idAuthorFollower: string) {
    return this.getRequestOptions().pipe(
      map((requestOptions) =>
        this.http.put<any>(`api/authors/${idAuthorFollower}/follows/${idAuthorFollowed}`, {}, requestOptions)
      ),
      mergeAll()
    )
  }

  unfollowAuthor(idAuthorFollowed: string, idAuthorFollower: string) {
    return this.getRequestOptions().pipe(
      map((requestOptions) =>
        this.http.delete<any>(`api/authors/${idAuthorFollower}/follows/${idAuthorFollowed}`, requestOptions)
      ),
      mergeAll()
    )
  }
}
