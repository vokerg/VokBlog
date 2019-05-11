import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../model/author';
import { Comment } from '../../model/comment'
import { Article } from '../../model/article'
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../service/comments.service";
import {ArticlesService} from "../../service/articles.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author;
  comments: Comment[];
  articles: Article[];
  id: number;

  constructor(
    private authorService: AuthorService,
    private commentService: CommentsService,
    private articleService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.author = new Author();
    this.route.params.take(1).subscribe(params => {
      this.id = params["id"];
      this.authorService.getAuthor(this.id).subscribe(
        author => this.author = author
      );
      this.commentService.getCommentsByAuthorId(this.id.toString())
        .subscribe((comments) => this.comments = comments);
      this.articleService.getArticlesByAuthorId(this.id.toString())
        .subscribe(response => this.articles = response);
    })

  }

}
