import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../model/comment";
import {select, Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {
  LoadArticleCommentsAction,
} from "../../../store/actions/index";
import {Article} from "../../../model/article";

@Component({
  selector: 'app-article-expand-comments',
  templateUrl: './article-expand-comments.component.html',
  styleUrls: ['./article-expand-comments.component.css']
})
export class ArticleExpandCommentsComponent implements OnInit {
  @Input() article: Article;
  @Input() id: string;

  isOpen:boolean = false;

  comments: Comment[];

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getCommentsByArticleId, { articleId: this.article.id })
      .subscribe(comments => this.comments = comments);
    this.store.select(fromRoot.isExpandCommentsPushed, {id: this.id})
      .subscribe(isOpen => {
        if (isOpen) {
          this.store.dispatch(new LoadArticleCommentsAction(this.article.id));
        }
        this.isOpen = isOpen;
      });
  }
}
