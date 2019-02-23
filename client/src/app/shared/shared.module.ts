import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    ArticlePreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommentsComponent,
    ArticlePreviewComponent
  ]
})
export class SharedModule { }
