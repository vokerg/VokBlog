import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MainPageCommentsComponent } from './main-page-comments/main-page-comments.component';
import { MainPageAuthorsComponent } from './main-page-authors/main-page-authors.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MainPageArticlesComponent} from "./main-page-articles/main-page-articles.component";

@NgModule({
  declarations: [MainPageComponent, MainPageCommentsComponent, MainPageAuthorsComponent, MainPageArticlesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule,
  ]
})
export class MainPageModule { }
