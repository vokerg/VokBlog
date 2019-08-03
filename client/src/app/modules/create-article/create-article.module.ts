import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditArticleComponent} from "./edit-article/edit-article.component";
import {FormsModule} from "@angular/forms";
import { ShareComponent } from './share/share.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    EditArticleComponent,
    ShareComponent,
    ShareButtonComponent
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
    ShareComponent
  ]
})
export class CreateArticleModule { }
