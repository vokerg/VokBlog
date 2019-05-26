import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    ArticlePreviewComponent,
    LikeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommentsComponent,
    ArticlePreviewComponent,
    LikeComponent
  ]
})
export class SharedModule { }
