import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  getTagArticles(tag:String):Article[] {
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

  constructor() { }
}
