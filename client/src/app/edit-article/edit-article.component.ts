import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgZone } from "@angular/core";
import { ArticlesService } from '../service/articles.service';
import { Article } from '../model/article';
import {LocalStorageService} from "../service/local-storage.service";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: Article;
  id: number;

  onSubmit() {
    if (this.id !== undefined) {
      this.articlesService.updateArticle(this.article).forEach(errorCode => {
        if (errorCode !== 0) {
          console.log("Couldn't save", errorCode);
        }
        this.redirect();
      });
    }
    else {
      this.articlesService.createArticle({
        ...this.article,
        idAuthor: this.localStorageService.getUserId(),
        author: this.localStorageService.getUsername()
      } ).forEach(errorCode => {
        if (errorCode !== 0) {
          console.log("Couldn't save", errorCode);
        }
        this.redirect();
      });
    }
  }

  redirect() {
      this.router.navigate((this.id === undefined) ? ['/'] : ['/articles/', this.id]);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private zone: NgZone,
    private localStorageService: LocalStorageService
  ) {
      this.article = new Article();
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.id = params["id"];
      if (this.id !== undefined) {
        this.articlesService.getArticle(this.id).forEach(article => {
          this.article = article;
        });
      };
    });
  }

}
