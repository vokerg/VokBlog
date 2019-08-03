import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/comment";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {LoadSubCommentsAction} from "../../../store/actions/index";

@Component({
  selector: 'app-expand-comments',
  templateUrl: './expand-comments.component.html',
  styleUrls: ['./expand-comments.component.css']
})
export class ExpandCommentsComponent implements OnInit {

  @Input() comment: Comment;

  subComments: Comment[];

  expanded: boolean = false;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  expandComments() {
    this.store.dispatch(new LoadSubCommentsAction(this.comment.id));
    this.expanded = true;
  }

  collapseComments() {
    this.expanded = false;
  }

  ngOnInit() {
    this.store.select(fromRoot.getSubCommentsByCommentId, {commentId: this.comment.id})
      .subscribe(comments => this.subComments = comments);
  }

}
