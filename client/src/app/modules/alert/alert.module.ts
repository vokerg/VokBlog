import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import {MatTableModule} from "@angular/material";

@NgModule({
  declarations: [AlertsPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [AlertsPageComponent]
})
export class AlertModule { }
