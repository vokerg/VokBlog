import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(
  ) { }

  @Input() comment: Comment;

  @Input() forAuthor: boolean = false;

  @Input() forArticle: boolean = false;

  articleTitle: string;
  articleId: string;

  ngOnInit() {
      this.articleTitle = this.comment.article ? this.comment.article.title : null;
      this.articleId = this.comment.article ? this.comment.article.id : null;
  }

}
