import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article/article.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {CreateArticleModule} from "../create-article/create-article.module";
import {LikeModule} from "../like/like.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,

    CreateArticleModule,
    LikeModule
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleModule { }
