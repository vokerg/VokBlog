import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {AlertsPageComponent} from "../alerts-page/alerts-page.component";

@Component({
  selector: 'app-alerts-dialog',
  templateUrl: './alerts-dialog.component.html',
  styleUrls: ['./alerts-dialog.component.css']
})
export class AlertsDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  openDialog(): void {

    this.dialog.open(AlertsPageComponent, {
      width: '250px',
      height: '550px',
      data: {}
    });
  }

  ngOnInit() {
  }

}
