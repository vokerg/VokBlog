import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Article } from '../../../model/article';
import { Comment } from '../../../model/comment';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import * as fromCurrentArticle from "../../../store/reducers/currentArticle";
import {LoadArticleAction} from "../../../store/actions/index";
import {Observable} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private currentArticle$: Observable<fromCurrentArticle.State>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.State>,
  ) {
    this.article = new Article();
    this.currentArticle$ = store.select(fromRoot.getCurrentArticle);
    this.currentArticle$.subscribe(({article, comments}) => {
      this.article = article;
      this.comments = comments;
    });
  }

  id: string;
  article: Article;
  comments: Comment[];

  componentId: string = Math.random().toString(25);

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.store.dispatch(new LoadArticleAction(this.id));
    });
  }
}
