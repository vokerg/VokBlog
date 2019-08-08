import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentComponent} from "./comment/comment.component";
import {CommentsComponent} from "./comments/comments.component";
import {EditCommentComponent} from "./edit-comment/edit-comment.component";
import {ExpandCommentsComponent} from "./expand-comments/expand-comments.component";
import {ArticleExpandCommentsComponent} from "./article-expand-comments/article-expand-comments.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LikeModule} from "../like/like.module";
import { CommentsCounterComponent } from './comments-counter/comments-counter.component';
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    EditCommentComponent,
    ExpandCommentsComponent,
    ArticleExpandCommentsComponent,
    CommentsCounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,

    LikeModule,
  ],
  exports: [
    EditCommentComponent,
    ArticleExpandCommentsComponent,
    CommentsComponent,
    CommentsCounterComponent,
  ]
})
export class CommentModule { }
