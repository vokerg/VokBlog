import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {CreateArticleModule} from "../create-article/create-article.module";
import {LikeModule} from "../like/like.module";
import {CommentModule} from "../comment/comment.module";
import {ArticlePreviewComponent} from "./article-preview/article-preview.component";
import {ArticleFullPreviewComponent} from "./article-full-preview/article-full-preview.component";
import {SharedArticleComponent} from "./shared-article/shared-article.component";
import {ArticleActionsComponent} from "./article-actions/article-actions.component";
import {ArticleCountersComponent} from "./article-counters/article-counters.component";
import {ArticleExpandablePanelsComponent} from "./article-expandable-panels/article-expandable-panels.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    CreateArticleModule,
    LikeModule,
    CommentModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,

  ],
  declarations: [
    ArticleComponent,
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
    SharedArticleComponent,
    ArticleActionsComponent,
    ArticleCountersComponent,
    ArticleExpandablePanelsComponent,
  ],
  exports: [
    ArticlePreviewComponent,
    ArticleFullPreviewComponent,
    ArticleCountersComponent,
    ArticleActionsComponent,
    ArticleExpandablePanelsComponent,
  ]
})
export class ArticleModule { }
