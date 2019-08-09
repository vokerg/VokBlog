import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/article";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers";
import {CloseExpandCommentsAction, PushExpandCommentsAction} from "../../../store/actions";

@Component({
  selector: 'app-comments-counter',
  templateUrl: './comments-counter.component.html',
  styleUrls: ['./comments-counter.component.css']
})
export class CommentsCounterComponent implements OnInit {

  @Input() article: Article;
  @Input() id: string;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  expandComments() {
    this.store.select(fromRoot.isExpandCommentsPushed, {id: this.id})
      .take(1)
      .subscribe(isOpen => (isOpen)
        ? this.store.dispatch(new CloseExpandCommentsAction(this.id))
        : this.store.dispatch(new PushExpandCommentsAction(this.id))
      );
  }

  ngOnInit() {
  }

}
