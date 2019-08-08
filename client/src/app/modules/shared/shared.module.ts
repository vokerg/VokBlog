import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import {ArticleFullPreviewComponent} from "./article-full-preview/article-full-preview.component";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import { SharedArticleComponent } from './shared-article/shared-article.component';
import {CreateArticleModule} from "../create-article/create-article.module";
import {LikeModule} from "../like/like.module";
import {CommentModule} from "../comment/comment.module";

@NgModule({
  declarations: [
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
    SharedArticleComponent,
  ],
  imports: [
    CreateArticleModule,
    LikeModule,
    CommentModule,

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
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
  ]
})
export class SharedModule { }
