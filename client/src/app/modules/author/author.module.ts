import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { SharedModule } from '../shared/shared.module';
import {CommentModule} from "../comment/comment.module";

@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    CommentModule,
  ]
})
export class AuthorModule { }
