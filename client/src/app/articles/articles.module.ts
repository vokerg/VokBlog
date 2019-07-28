import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagComponent} from "./tag/tag.component";
import { SelfArticlesComponent } from './self-articles/self-articles.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [TagComponent, SelfArticlesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TagComponent]
})
export class ArticlesModule { }
