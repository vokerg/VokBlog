import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../service/articles.service';
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
    private articlesService: ArticlesService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadArticlesAction());
//    this.articlesService.getArticles().subscribe(response => this.articles = response);
  }

}
