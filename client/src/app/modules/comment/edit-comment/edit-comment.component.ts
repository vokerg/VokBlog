import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment';
import {Observable} from "rxjs";
import * as fromActiveUser from "../../../store/reducers/activeUser";
import * as fromReducersRoot from "../../../store/reducers/index";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {AddComment, CloseAddCommentAction} from "../../../store/actions/index";

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  @Input() id: string;
  @Input() articleId: string;
  @Input() idParentComment: string = null;

  isEdit: boolean=false;
  comment: Comment;
  activeUser$: Observable<fromActiveUser.State>;

  onSubmit() {
    this.activeUser$.subscribe(activeUser => {
      if (activeUser) {
        this.comment.idAuthor = activeUser.userId;
        this.comment.authorName = activeUser.username;
      }
      this.store.dispatch(new AddComment(this.comment));
      this.closeEditForm()
    });
  }

  closeEditForm() {
   this.store.dispatch(new CloseAddCommentAction(this.id));
  }

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.isEdit = false;
    this.comment = new Comment();
    this.activeUser$ = store.select(fromReducersRoot.getActiveUser);
  }

  ngOnInit() {
    this.store.select(fromRoot.isAddCommentOpened, {id:this.id})
      .subscribe(isOpen => {
        if (isOpen) {
          this.isEdit = true;
          this.comment = new Comment();
          this.comment.idArticle = this.articleId;
          this.comment.idParentComment = this.idParentComment;
        } else {
          this.isEdit = false;
        }
      });
  }

}
