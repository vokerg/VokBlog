import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikeButtonComponent} from "./like-button/like-button.component";
import {MatButtonModule} from "@angular/material";
import { LikesCounterComponent } from './likes-counter/likes-counter.component';

@NgModule({
  declarations: [
    LikeButtonComponent,
    LikesCounterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    LikeButtonComponent,
    LikesCounterComponent,
  ]
})
export class LikeModule { }
