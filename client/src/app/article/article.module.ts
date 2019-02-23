import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article/article.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    EditCommentComponent
  ]
})
export class ArticleModule { }
