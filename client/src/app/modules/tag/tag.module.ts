import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import {ArticleModule} from "../article/article.module";

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    ArticleModule
  ]
})
export class TagModule { }
