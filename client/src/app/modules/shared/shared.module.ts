import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import {ArticleFullPreviewComponent} from "./article-full-preview/article-full-preview.component";
import { ExpandCommentsComponent } from './expand-comments/expand-comments.component';
import {EditCommentComponent} from "./edit-comment/edit-comment.component";
import {FormsModule} from "@angular/forms";
import { ArticleExpandCommentsComponent } from './article-expand-comments/article-expand-comments.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import { SharedArticleComponent } from './shared-article/shared-article.component';
import {CreateArticleModule} from "../create-article/create-article.module";
import {LikeModule} from "../like/like.module";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
    ExpandCommentsComponent,
    EditCommentComponent,
    ArticleExpandCommentsComponent,
    SharedArticleComponent,
  ],
  imports: [
    CreateArticleModule,
    LikeModule,

    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    CommentsComponent,
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
    EditCommentComponent
  ]
})
export class SharedModule { }
