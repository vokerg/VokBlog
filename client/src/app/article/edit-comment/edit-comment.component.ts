import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment';
import { ArticlesService } from '../../service/articles.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  @Input() articleId: String;

  isEdit: boolean;
  comment: Comment;
  cmnt: String;

  onSubmit() {
    console.log("submit fired", this.articleId);
    this.articlesService.addComment("1", this.comment).forEach(errorCode => console.log(errorCode));
    this.showEditForm()
  }

  showEditForm() {
    console.log("clicked");
    this.isEdit = !this.isEdit;
    this.comment = new Comment();
  }

  constructor(private articlesService: ArticlesService) {
    this.isEdit = false;
    this.comment = new Comment();
  }

  ngOnInit() {
  }

}
