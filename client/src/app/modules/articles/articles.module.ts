import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagComponent} from "../tag/tag.component";
import { SelfArticlesComponent } from './self-articles/self-articles.component';
import { FeedArticlesComponent } from './feed-articles/feed-articles.component';
import {ArticleModule} from "../article/article.module";

@NgModule({
  declarations: [TagComponent, SelfArticlesComponent, FeedArticlesComponent],
  imports: [
    CommonModule,
    ArticleModule
  ],
  exports: [TagComponent]
})
export class ArticlesModule { }
