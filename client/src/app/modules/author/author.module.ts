import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import {CommentModule} from "../comment/comment.module";
import {ArticleModule} from "../article/article.module";

@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,

    ArticleModule,
    CommentModule,
  ]
})
export class AuthorModule { }
