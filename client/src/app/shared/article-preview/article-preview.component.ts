import { Component, OnInit, Input } from '@angular/core';
//import { ArticlesComponent } from '../articles/articles.component';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article: Article;

  setLike() {
    //this.articlesComponent.setLike(this.article);
    this.article.liked = !this.article.liked;
  }

  //constructor(private articlesComponent: ArticlesComponent) { }
  constructor() { }

  ngOnInit() {
  }

}
