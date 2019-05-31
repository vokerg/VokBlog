import { Component, OnInit } from '@angular/core';
import {Author} from "../../model/author";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";
import {LoadTopAuthorsAction} from "../../store/actions";

@Component({
  selector: 'app-main-page-authors',
  templateUrl: './main-page-authors.component.html',
  styleUrls: ['./main-page-authors.component.css']
})
export class MainPageAuthorsComponent implements OnInit {
  authors: Author[];

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    store.select(fromRoot.getMainPageAuthors).subscribe(authors => this.authors = authors);
  }

  ngOnInit() {
    this.store.dispatch(new LoadTopAuthorsAction());
  }

}
