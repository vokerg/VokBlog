import { Component, OnInit } from '@angular/core';
import {AlertsService} from "../../../services/alerts.service";
import {Alert} from "../../../model/alert";

@Component({
  selector: 'app-alerts-page',
  templateUrl: './alerts-page.component.html',
  styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent implements OnInit {

  alerts:Alert[];
  displayedColumns: string[] = ['text'];

  clickAlert(alert:Alert) {
    console.log('alert clicked', alert);
  }

  constructor(
    private alertService: AlertsService
  ) { }

  ngOnInit() {
    this.alertService.getUsersAlerts().subscribe(alerts => {
      this.alerts = alerts;
      console.log('alerts', alerts);
    })
  }

}
