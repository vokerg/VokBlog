import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article: Article;
  @Input() noActions:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
