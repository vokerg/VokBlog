import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../model/article";

@Component({
  selector: 'app-article-actions',
  templateUrl: './article-actions.component.html',
  styleUrls: ['./article-actions.component.css']
})
export class ArticleActionsComponent implements OnInit {

  @Input() article: Article;
  @Input() componentId: string;

  constructor() { }

  ngOnInit() {
  }

}
