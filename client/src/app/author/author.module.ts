import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from '../service/author.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthorModule { }
