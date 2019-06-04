import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article';
import { LoadArticlesAction} from "../../store/actions";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

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
