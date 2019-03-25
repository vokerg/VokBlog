import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../model/author';
import { Comment } from '../../model/comment'
import { Article } from '../../model/article'
import {ActivatedRoute} from "@angular/router";

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.take(1).subscribe(params => {
      this.id = params["id"];
      this.author = this.authorService.getAuthor(this.id);
      this.comments = this.authorService.getAuthorComments(this.id);
      this.authorService.getAuthorArticles(this.id.toString())
        .subscribe(response => this.articles = response);
    })

  }

}
