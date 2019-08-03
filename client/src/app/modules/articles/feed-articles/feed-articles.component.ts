import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {Article} from "../../model/article";
import {LoadFeedArticlesAction} from "../../../store/actions/index";

@Component({
  selector: 'app-feed-articles',
  templateUrl: './feed-articles.component.html',
  styleUrls: ['./feed-articles.component.css']
})
export class FeedArticlesComponent implements OnInit {
  constructor(
    private store: Store<fromRoot.State>,
  ) {
    store.select(fromRoot.getFeedArticles).subscribe(articles => this.articles = articles);
  }

  articles: Article[];

  ngOnInit() {
    this.store.dispatch(new LoadFeedArticlesAction());
  }
}
