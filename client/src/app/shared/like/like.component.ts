import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/comment";
import {Article} from "../../model/article";
import {LikeArticle, UnLikeArticle} from "../../store/actions";
import {Store} from "@ngrx/store";
import * as fromReducersRoot from "../../store/reducers";
import {Observable} from "rxjs";
import * as fromActiveUser from "../../store/reducers/activeUser";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor(
    private store: Store<fromReducersRoot.State>,
  ) {
    this.activeUser$ = store.select(fromReducersRoot.getActiveUser);
  }

  @Input() comment: Comment;

  @Input() article: Article;

  activeUser$: Observable<fromActiveUser.State>;

  ngOnInit() {}

  like() {
    this.store.dispatch(new LikeArticle(this.article.id));
  }

  unLike() {
    this.store.dispatch(new UnLikeArticle(this.article.id));
  }


}
