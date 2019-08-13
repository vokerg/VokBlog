import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikeButtonComponent} from "./like-button/like-button.component";
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import { LikesCounterComponent } from './likes-counter/likes-counter.component';
import { LikesListComponent } from './likes-list/likes-list.component';

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
  ],
  exports: [
    LikeButtonComponent,
    LikesCounterComponent,
    LikesListComponent,
  ]
})
export class LikeModule { }
