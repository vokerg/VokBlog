import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../model/article";

@Component({
  selector: 'app-article-expandable-panels',
  templateUrl: './article-expandable-panels.component.html',
  styleUrls: ['./article-expandable-panels.component.css']
})
export class ArticleExpandablePanelsComponent implements OnInit {

  @Input() article: Article;
  @Input() componentId: string;

  constructor() { }

  ngOnInit() {
  }

}
