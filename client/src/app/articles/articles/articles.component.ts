import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../service/articles.service';
import { Article } from '../../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService) {
   }

  ngOnInit() {
    this.articlesService.getArticles().forEach(response => this.articles = response);
  }

  setLike(article) {
    article.liked = !article.liked;
  }

}
