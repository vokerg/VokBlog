import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';

@NgModule({
  declarations: [AlertsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertsPageComponent]
})
export class AlertModule { }
