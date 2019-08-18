import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ArticlesService} from "../../../services/articles.service";
import {Like} from "../../model/like";

export interface DialogData {
  likes: Like[];
}

@Component({
  selector: 'app-likes-list',
  templateUrl: './likes-list.component.html',
  styleUrls: ['./likes-list.component.css']
})

export class LikesListComponent  implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LikesListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit() {
  }

}
