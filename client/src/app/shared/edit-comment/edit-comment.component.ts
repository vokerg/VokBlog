import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment';
import {Observable} from "rxjs";
import * as fromActiveUser from "../../store/reducers/activeUser";
import * as fromReducersRoot from "../../store/reducers/index";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers/index";
import {AddComment} from "../../store/actions/index";

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  @Input() articleId: string;
  @Input() parentCommentId: string = null;

  isEdit: boolean;
  comment: Comment;
  activeUser$: Observable<fromActiveUser.State>;
  buttonText: string;

  onSubmit() {
    this.activeUser$.subscribe(activeUser => {
      if (activeUser) {
        this.comment.idAuthor = activeUser.userId;
        this.comment.authorName = activeUser.username;
      }
      this.store.dispatch(new AddComment(this.comment));
      this.toggleEditForm()
    });
  }

  toggleEditForm() {
    this.isEdit = !this.isEdit;
    this.comment = new Comment();
    this.comment.idArticle = this.articleId;
    this.comment.idParentComment = this.parentCommentId;
  }

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.isEdit = false;
    this.comment = new Comment();
    this.activeUser$ = store.select(fromReducersRoot.getActiveUser);
  }

  ngOnInit() {
    this.buttonText = this.parentCommentId === null ? "Comment" : "Reply";
  }

}
