import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../model/author';
import { Comment } from '../../model/comment'
import { Article } from '../../model/article'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author;
  comments: Comment[];
  articles: Article[];

  constructor( private authorService: AuthorService ) { }

  ngOnInit() {
    this.author = this.authorService.getAuthor(0);
    this.comments = this.authorService.getAuthorComments(0);
    this.articles = this.authorService.getAuthorArticles(0);

    console.log("Articles", this.articles);
  }

}
