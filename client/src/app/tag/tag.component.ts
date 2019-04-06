import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../model/article';
import {ArticlesService} from "../service/articles.service";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  tag: String;
  articles: Article[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tag = params["tag"];
      this.articleService.getArticlesByTag(this.tag).subscribe(articles => this.articles = articles);
    });
  }

}
