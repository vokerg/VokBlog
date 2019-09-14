import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import {MatTableModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import { AlertsDialogComponent } from './alerts-dialog/alerts-dialog.component';

@NgModule({
  declarations: [AlertsPageComponent, AlertsDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserModule,
  ],
  exports: [
    AlertsPageComponent,
    AlertsDialogComponent,
  ]
})
export class AlertModule { }
