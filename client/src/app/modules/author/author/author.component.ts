import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../model/author';
import { Comment } from '../../../model/comment'
import { Article } from '../../../model/article'
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../../services/comments.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {LoadAuthorArticlesAction} from "../../../store/actions/index";
import {Observable} from "rxjs";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author;
  comments: Comment[];
  articles: Article[];
  id: string;
  activeUserId$: Observable<string>;

  constructor(
    private authorService: AuthorService,
    private commentService: CommentsService,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
  ) {
    store.select(fromRoot.getAuthorArticles)
      .subscribe(articles => this.articles = articles);
    this.activeUserId$ = store.select(fromRoot.getActiveUserId);
  }

  followAuthor() {
    this.activeUserId$.subscribe(activeUserId => {
      this.authorService.followAuthor(this.author.id, activeUserId)
        .subscribe(()=>this.author.followedByCurrentUser = true);
    });
  }

  unfollowAuthor() {
    this.activeUserId$.subscribe(activeUserId => {
      this.authorService.unfollowAuthor(this.author.id, activeUserId)
        .subscribe(()=>this.author.followedByCurrentUser = false);
    });
  }

  ngOnInit() {
    this.author = new Author();
    this.route.params.take(1).subscribe(params => {
      this.id = params["id"];

      this.store.dispatch(new LoadAuthorArticlesAction(this.id, ""));

      this.authorService.getAuthor(this.id).subscribe(
        author => this.author = author
      );
      this.commentService.getCommentsByIdAuthor(this.id.toString())
        .subscribe((comments) => this.comments = comments);
    })

  }

}
