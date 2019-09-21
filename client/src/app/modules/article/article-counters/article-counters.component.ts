import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../model/article";

@Component({
  selector: 'app-article-counters',
  templateUrl: './article-counters.component.html',
  styleUrls: ['./article-counters.component.css']
})
export class ArticleCountersComponent implements OnInit {

  @Input() article: Article;
  @Input() componentId: string;

  constructor() { }

  ngOnInit() {
  }

}
