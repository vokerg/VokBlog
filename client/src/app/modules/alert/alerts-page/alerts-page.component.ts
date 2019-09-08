import { Component, OnInit } from '@angular/core';
import {AlertsService} from "../../../services/alerts.service";
import {Alert} from "../../../model/alert";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alerts-page',
  templateUrl: './alerts-page.component.html',
  styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent implements OnInit {

  alerts:Alert[];
  displayedColumns: string[] = ['text'];

  clickAlert(alert:Alert) {
    this.alertService.readAlert(alert);
    this.router.navigate([`/articles/${alert.idArticle}`]);
  }

  constructor(
    private router: Router,
    private alertService: AlertsService
  ) { }

  ngOnInit() {
    this.alertService.getUsersAlerts().subscribe(alerts => this.alerts = alerts)
  }

}
