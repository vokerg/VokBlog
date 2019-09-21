import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import {MatBadgeModule, MatButtonModule, MatIconModule, MatTableModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import { AlertsDialogComponent } from './alerts-dialog/alerts-dialog.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AlertsPageComponent, AlertsDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    AlertsPageComponent,
    AlertsDialogComponent,
  ]
})
export class AlertModule { }
