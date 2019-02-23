import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TagModule { }
