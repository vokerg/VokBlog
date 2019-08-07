import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/article";
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-likes-counter',
  templateUrl: './likes-counter.component.html',
  styleUrls: ['./likes-counter.component.css']
})
export class LikesCounterComponent implements OnInit {

  @Input() article:Article;
  @Input() comment:Comment;

  constructor() { }

  ngOnInit() {
  }

}
