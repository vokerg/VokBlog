import { Component, OnInit } from '@angular/core';
import { Article } from '../../../model/article';
import { LoadArticlesAction} from "../../../store/actions/index";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";

@Component({
  selector: 'main-page-articles',
  templateUrl: './main-page-articles.component.html',
  styleUrls: ['./main-page-articles.component.css']
})
export class MainPageArticlesComponent implements OnInit {

  articles: Article[];

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    store.select(fromRoot.getMainPageArticles).subscribe(articles => this.articles = articles);
  }

  ngOnInit() {
    this.store.dispatch(new LoadArticlesAction(""));
  }

}
