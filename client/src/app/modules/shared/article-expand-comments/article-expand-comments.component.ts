import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/comment";
import {select, Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {LoadArticleCommentsAction, LoadSubCommentsAction} from "../../../store/actions/index";
import {Article} from "../../model/article";

@Component({
  selector: 'app-article-expand-comments',
  templateUrl: './article-expand-comments.component.html',
  styleUrls: ['./article-expand-comments.component.css']
})
export class ArticleExpandCommentsComponent implements OnInit {
  @Input() article: Article;

  comments: Comment[];

  expanded: boolean = false;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  expandComments() {
    this.store.dispatch(new LoadArticleCommentsAction(this.article.id));
    this.expanded = true;
  }

  collapseComments() {
    this.expanded = false;
  }

  ngOnInit() {
    this.store.select(fromRoot.getCommentsByArticleId, { articleId: this.article.id })
      .subscribe(comments => this.comments = comments);
  }
}
