import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-expand-comments',
  templateUrl: './expand-comments.component.html',
  styleUrls: ['./expand-comments.component.css']
})
export class ExpandCommentsComponent implements OnInit {

  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
