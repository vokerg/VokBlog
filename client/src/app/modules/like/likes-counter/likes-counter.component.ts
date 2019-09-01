import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../model/article";
import {Comment} from "../../../model/comment";
import {MatDialog} from "@angular/material";
import {LikesListComponent} from "../likes-list/likes-list.component";
import {ArticlesService} from "../../../services/articles.service";
import {Like} from "../../../model/like";
import {CommentsService} from "../../../services/comments.service";

@Component({
  selector: 'app-likes-counter',
  templateUrl: './likes-counter.component.html',
  styleUrls: ['./likes-counter.component.css']
})
export class LikesCounterComponent implements OnInit {

  @Input() article:Article;
  @Input() comment:Comment;

  count:number = 0;
  likes:Like[];

  constructor(
    public dialog: MatDialog,
    private articlesService:ArticlesService,
    private commentsService:CommentsService,
  ) {}

  openDialog(): void {
    this.dialog.open(LikesListComponent, {
      width: '250px',
      height: '250px',
      data: {likes: this.likes}
    });
  }

  ngOnInit() {
    if (this.article) {
      this.count = this.article.likeCount;
      this.articlesService.getArticleLikes(this.article.id).subscribe(likes => this.likes = likes);
    }

    if (this.comment) {
      this.count = this.comment.likeCount;
      this.commentsService.getCommentLikes(this.comment.id).subscribe(likes => this.likes = likes);
    }
  }

}
