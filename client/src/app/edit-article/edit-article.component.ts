import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../service/articles.service';
import { Article } from '../model/article';
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import {Observable} from "rxjs";
import * as fromActiveUser from "../store/reducers/activeUser";
import * as fromReducersRoot from "../store/reducers";
import {AddArticle, UpdateArticle} from "../store/actions";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: Article;
  id: string;
  activeUser$: Observable<fromActiveUser.State>;
  tags: string;


  onSubmit() {
    this.article.tags = this.tags.split(",");
    if (this.id !== undefined) {
      this.store.dispatch(new UpdateArticle(this.article, () => this.redirect()));
    }
    else {
      this.activeUser$.take(1).subscribe(activeUser => {
        this.store.dispatch(new AddArticle({
          ...this.article,
          idAuthor: activeUser.userId,
          author: activeUser.username
        }, (idArticle:string) => this.redirect(idArticle)
        ));
      });
    }
  }

  redirect(id?: string) {
    const redirectId = id || this.id;
    console.log(redirectId, (redirectId) ? ['/'] : ['/articles/', redirectId]);
      this.router.navigate((redirectId) ? ['/articles/', redirectId] : ['/']);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private store: Store<fromRoot.State>,
  ) {
      this.article = new Article();
      this.activeUser$ = store.select(fromReducersRoot.getActiveUser);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id !== undefined) {
        this.articlesService.getArticle(this.id).forEach(article => {
          this.article = article;
          this.tags = article.tags.join(",");
        });
      }
    });
  }

}
