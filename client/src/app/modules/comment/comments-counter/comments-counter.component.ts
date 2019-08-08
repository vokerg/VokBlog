import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../model/article";

@Component({
  selector: 'app-comments-counter',
  templateUrl: './comments-counter.component.html',
  styleUrls: ['./comments-counter.component.css']
})
export class CommentsCounterComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

}
