import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditArticleComponent} from "./edit-article/edit-article.component";
import {FormsModule} from "@angular/forms";
import { ShareComponent } from './share/share.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import { ShareCounterComponent } from './share-counter/share-counter.component';

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

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    EditArticleComponent,
    ShareButtonComponent,
    ShareComponent,
    ShareCounterComponent,
  ]
})
export class CreateArticleModule { }
