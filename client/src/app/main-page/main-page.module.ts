import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {ArticlesModule} from "../articles/articles.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    ArticlesModule,
    FlexLayoutModule
  ]
})
export class MainPageModule { }
