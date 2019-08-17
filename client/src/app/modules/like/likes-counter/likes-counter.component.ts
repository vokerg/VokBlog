import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/article";
import {Comment} from "../../model/comment";
import {MatDialog} from "@angular/material";
import {LikesListComponent} from "../likes-list/likes-list.component";

@Component({
  selector: 'app-likes-counter',
  templateUrl: './likes-counter.component.html',
  styleUrls: ['./likes-counter.component.css']
})
export class LikesCounterComponent implements OnInit {

  @Input() article:Article;
  @Input() comment:Comment;

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LikesListComponent, {
      width: '250px',
      height: '250px',
      data: {idArticle: this.article.id}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  ngOnInit() {
  }

}
