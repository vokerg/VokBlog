import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {ArticlesModule} from "../articles/articles.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { MainPageCommentsComponent } from './main-page-comments/main-page-comments.component';
import { MainPageAuthorsComponent } from './main-page-authors/main-page-authors.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [MainPageComponent, MainPageCommentsComponent, MainPageAuthorsComponent],
  imports: [
    CommonModule,
    ArticlesModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule,
  ]
})
export class MainPageModule { }
