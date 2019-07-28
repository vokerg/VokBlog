import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";
import {Article} from "../../model/article";
import {LoadArticlesByIdAuthorAction} from "../../store/actions";

@Component({
  selector: 'app-self-articles',
  templateUrl: './self-articles.component.html',
  styleUrls: ['./self-articles.component.css']
})
export class SelfArticlesComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  articles: Article[];

  ngOnInit() {
    this.store
      .select(fromRoot.getActiveUserId)
      .subscribe(activeUserId => {
        this.store
          .select(fromRoot.getArticlesByIdAuthor, {idAuthor: activeUserId})
          .subscribe(articles => this.articles = articles);
        this.store
          .dispatch(new LoadArticlesByIdAuthorAction(activeUserId));
      });
  }


}
