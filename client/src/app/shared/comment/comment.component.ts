import { Component, OnInit, Input } from '@angular/core';
//import { ArticleComponent } from '../article/article.component';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(
  //  private articleComponent: ArticleComponent
  ) { }

  @Input() comment: Comment;

  ngOnInit() { }

}
