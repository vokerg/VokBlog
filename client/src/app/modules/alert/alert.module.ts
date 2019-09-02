import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import {MatTableModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AlertsPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserModule,
  ],
  exports: [AlertsPageComponent]
})
export class AlertModule { }
