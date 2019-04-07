import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment';
import { ArticlesService } from '../../service/articles.service';
import {Observable} from "rxjs";
import * as fromActiveUser from "../../store/reducers/activeUser";
import * as fromReducersRoot from "../../store/reducers";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  @Input() articleId: string;

  isEdit: boolean;
  comment: Comment;
  activeUser$: Observable<fromActiveUser.State>;

  onSubmit() {
    this.activeUser$.take(1).subscribe(activeUser => {
      if (activeUser) {
        this.comment.idAuthor = activeUser.userId;
        this.comment.author = activeUser.username;
      }
      this.articlesService.addComment(this.articleId, this.comment).subscribe();
      this.toggleEditForm()
    });
  }

  toggleEditForm() {
    this.isEdit = !this.isEdit;
    this.comment = new Comment();
    this.comment.idArticle = this.articleId;
  }

  constructor(
    private articlesService: ArticlesService,
    private store: Store<fromRoot.State>,
  ) {
    this.isEdit = false;
    this.comment = new Comment();
    this.activeUser$ = store.select(fromReducersRoot.getActiveUser);
  }

  ngOnInit() {
  }

}
