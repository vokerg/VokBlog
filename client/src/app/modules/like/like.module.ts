import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikeButtonComponent} from "./like-button/like-button.component";
import {
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import { LikesCounterComponent } from './likes-counter/likes-counter.component';
import { LikesListComponent } from './likes-list/likes-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LikeButtonComponent,
    LikesCounterComponent,
    LikesListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
  ],
  exports: [
    LikeButtonComponent,
    LikesCounterComponent,
    LikesListComponent,
  ],
  entryComponents: [
    LikesListComponent,
  ]
})
export class LikeModule { }
