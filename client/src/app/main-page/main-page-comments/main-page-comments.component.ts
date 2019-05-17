import { Component, OnInit } from '@angular/core';
import {Comment} from "../../model/comment";
import {CommentsService} from "../../service/comments.service";

@Component({
  selector: 'app-main-page-comments',
  templateUrl: './main-page-comments.component.html',
  styleUrls: ['./main-page-comments.component.css']
})
export class MainPageCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getTopComments().subscribe(response => this.comments = response);
  }

}
