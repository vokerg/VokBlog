import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentComponent} from "./comment/comment.component";
import {CommentsComponent} from "./comments/comments.component";
import {EditCommentComponent} from "./edit-comment/edit-comment.component";
import {ExpandCommentsComponent} from "./expand-comments/expand-comments.component";
import {ArticleExpandCommentsComponent} from "./article-expand-comments/article-expand-comments.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LikeModule} from "../like/like.module";
import { CommentsCounterComponent } from './comments-counter/comments-counter.component';
import { AddCommentButtonComponent } from './add-comment-button/add-comment-button.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    EditCommentComponent,
    ExpandCommentsComponent,
    ArticleExpandCommentsComponent,
    CommentsCounterComponent,
    AddCommentButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,

    LikeModule,
  ],
  exports: [
    EditCommentComponent,
    ArticleExpandCommentsComponent,
    CommentsComponent,
    CommentsCounterComponent,
    AddCommentButtonComponent,
  ]
})
export class CommentModule { }
