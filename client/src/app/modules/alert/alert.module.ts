import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import {BrowserModule} from "@angular/platform-browser";
import { AlertsDialogComponent } from './alerts-dialog/alerts-dialog.component';
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

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
