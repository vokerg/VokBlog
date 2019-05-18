import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import {ApiService} from "./api.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

  getAuthor(authorId: number): Observable<Author> {
    return this.http.get<Author>(`api/authors/${authorId}/aggregated`);
  }

  getTopAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('api/authors');
  }
}
