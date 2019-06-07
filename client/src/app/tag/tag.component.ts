import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../model/article';
import {ArticlesService} from "../service/articles.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {LoadArticlesAction} from "../store/actions";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
  ) {
    store.select(fromRoot.getTagArticles).subscribe(articles => this.articles = articles);
  }

  tag: string;
  articles: Article[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tag = params["tag"];
      this.store.dispatch(new LoadArticlesAction(this.tag));
    });
  }

}
