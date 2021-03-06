import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MainPageCommentsComponent } from './main-page-comments/main-page-comments.component';
import { MainPageAuthorsComponent } from './main-page-authors/main-page-authors.component';
import {RouterModule} from "@angular/router";
import {MainPageArticlesComponent} from "./main-page-articles/main-page-articles.component";
import {CommentModule} from "../comment/comment.module";
import {ArticleModule} from "../article/article.module";

@NgModule({
  declarations: [MainPageComponent, MainPageCommentsComponent, MainPageAuthorsComponent, MainPageArticlesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,

    ArticleModule,
    CommentModule,
  ]
})
export class MainPageModule { }
