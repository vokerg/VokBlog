import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-full-preview',
  templateUrl: './article-full-preview.component.html',
  styleUrls: ['./article-full-preview.component.css']
})
export class ArticleFullPreviewComponent implements OnInit {

  @Input() article:Article;

  constructor() { }

  ngOnInit() {
  }

}
