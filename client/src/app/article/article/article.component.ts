import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ArticlesService } from '../../service/articles.service';
import { Article } from '../../model/article';
import { Comment } from '../../model/comment';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";
import * as fromCurrentArticle from "../../store/reducers/currentArticle";
import {LoadArticleAction} from "../../store/actions";
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
    private articlesService: ArticlesService,
    private store: Store<fromRoot.State>,
  ) {
    this.article = new Article();
    this.currentArticle$ = store.select(fromRoot.getCurrentArticle);
    this.currentArticle$.subscribe(currentArticle => {

      //this.article = article;
      //this.comments = comments;
      console.log("subscribe hit", currentArticle);
    });
  }

  id: string;
  article: Article;
  comments: Comment[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];

      this.store.dispatch(new LoadArticleAction(this.id));
      /*
      this.articlesService.getArticle(this.id).forEach(article => {
        this.article = article;
        this.articlesService.getComments(this.id).forEach(response => {
          this.comments = response;
        });
      });
      */
    });


  }

  back() {
    this.router.navigate(['/']);
  }

}
