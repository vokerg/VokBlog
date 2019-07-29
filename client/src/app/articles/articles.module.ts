import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagComponent} from "./tag/tag.component";
import { SelfArticlesComponent } from './self-articles/self-articles.component';
import {SharedModule} from "../shared/shared.module";
import { FeedArticlesComponent } from './feed-articles/feed-articles.component';

@NgModule({
  declarations: [TagComponent, SelfArticlesComponent, FeedArticlesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TagComponent]
})
export class ArticlesModule { }
