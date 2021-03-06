import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../model/comment";
import {Article} from "../../../model/article";
import {LikeArticle, LikeComment, UnLikeArticle, UnLikeComment} from "../../../store/actions/index";
import {Store} from "@ngrx/store";
import * as fromReducersRoot from "../../../store/reducers/index";
import {Observable} from "rxjs";
import * as fromActiveUser from "../../../store/reducers/activeUser";

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  constructor(
    private store: Store<fromReducersRoot.State>,
  ) {
    this.activeUser$ = store.select(fromReducersRoot.getActiveUser);
  }

  @Input() comment: Comment;

  @Input() article: Article;

  activeUser$: Observable<fromActiveUser.State>;

  ngOnInit() {}

  likeArticle() {
    this.store.dispatch(new LikeArticle(this.article.id));
  }

  unLikeArticle() {
    this.store.dispatch(new UnLikeArticle(this.article.id));
  }

  likeComment() {
    this.store.dispatch(new LikeComment(this.comment.id));
  }

  unLikeComment() {
    this.store.dispatch(new UnLikeComment(this.comment.id));
  }


}
