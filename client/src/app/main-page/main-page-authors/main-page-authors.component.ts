import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../service/comments.service";
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-main-page-authors',
  templateUrl: './main-page-authors.component.html',
  styleUrls: ['./main-page-authors.component.css']
})
export class MainPageAuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
