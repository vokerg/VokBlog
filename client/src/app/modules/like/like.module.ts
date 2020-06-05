import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikeButtonComponent} from "./like-button/like-button.component";
import { LikesCounterComponent } from './likes-counter/likes-counter.component';
import { LikesListComponent } from './likes-list/likes-list.component';
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";

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
