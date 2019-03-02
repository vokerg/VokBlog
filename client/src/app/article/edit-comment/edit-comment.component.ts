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
    this.articlesService.addComment(this.articleId, this.comment)
      .forEach(errorCode => console.log(errorCode));
    this.showEditForm()
  }

  showEditForm() {
    this.isEdit = !this.isEdit;
    this.comment = new Comment();
    this.comment.idArticle = this.articleId;
  }

  constructor(private articlesService: ArticlesService) {
    this.isEdit = false;
    this.comment = new Comment();
  }

  ngOnInit() {
  }

}
