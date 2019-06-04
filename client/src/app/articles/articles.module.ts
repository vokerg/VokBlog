import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleFullPreviewComponent } from '../shared/article-full-preview/article-full-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ArticlesComponent,
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
