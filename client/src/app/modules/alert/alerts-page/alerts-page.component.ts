import {Component, OnInit, Optional} from '@angular/core';
import {AlertsService} from "../../../services/alerts.service";
import {Alert} from "../../../model/alert";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-alerts-page',
  templateUrl: './alerts-page.component.html',
  styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent implements OnInit {

  alerts:Alert[];
  displayedColumns: string[] = ['text'];

  clickAlert(alert:Alert) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.alertService.readAlert(alert).subscribe();
    this.router.navigate([`/articles/${alert.idArticle}`]);
  }

  constructor(
    private router: Router,
    private alertService: AlertsService,
    @Optional() public dialogRef:MatDialogRef<AlertsPageComponent>
  ) { }

  ngOnInit() {
    this.alertService.getUsersAlerts().subscribe(alerts => this.alerts = alerts)
  }

}
