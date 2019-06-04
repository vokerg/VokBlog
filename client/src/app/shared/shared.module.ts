import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { LikeComponent } from './like/like.component';
import {ArticleFullPreviewComponent} from "./article-full-preview/article-full-preview.component";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
    LikeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommentsComponent,
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
    LikeComponent
  ]
})
export class SharedModule { }
