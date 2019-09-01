import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../model/article";

@Component({
  selector: 'app-shared-article',
  templateUrl: './shared-article.component.html',
  styleUrls: ['./shared-article.component.css']
})
export class SharedArticleComponent implements OnInit {

  @Input() article:Article;
  @Input() idSharedArticle:string;

  constructor() { }

  ngOnInit() {
  }

}
