import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../model/article';
import {LikeArticle, UnLikeArticle} from "../../store/actions";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article: Article;

  like() {
    this.store.dispatch(new LikeArticle(this.article.id));
    this.article.liked = true;
    //TODO: add ngrx here
  }

  unLike() {
    this.store.dispatch(new UnLikeArticle(this.article.id));
    this.article.liked = false;
  }

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
  }

}
