import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Comment } from '../model/comment';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthor(authorId: number):Author {
    return new Author();
  }

  getAuthorComments(authorId: number):Comment[] {
    let comment: Comment = new Comment();
    comment.author = "aaass";
    comment.comment="blablabla";

    let comment1 = <Comment>({
      author:"aaadfsdfsdf",
      comment:"aaaaa"
    });

    return [comment, comment1];
  }

  getAuthorArticles(authorId: number):Article[] {
    return [
      <Article>({
        title: "some title2",
        subject: "some subject",
        content: "some content"
      }),
      <Article>({
        title: "some title3",
        subject: "some subject",
        content: "some content"
      }),
    ]
  }
}
