import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditArticleComponent} from "./edit-article/edit-article.component";
import {FormsModule} from "@angular/forms";
import { ShareComponent } from './share/share.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { ShareCounterComponent } from './share-counter/share-counter.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    EditArticleComponent,
    ShareComponent,
    ShareButtonComponent,
    ShareCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    EditArticleComponent,
    ShareButtonComponent,
    ShareComponent,
    ShareCounterComponent,
  ]
})
export class CreateArticleModule { }
