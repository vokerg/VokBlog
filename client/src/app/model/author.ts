import { Article } from './article';

export class Author {
  id: number;
  name: string;
  countArticles: number;
  countComments: number;
  articles: Article[];
  comments: Comment[];
  constructor() {
    this.id = 0;
    this.name = '';
    this.countArticles = 0;
    this.countComments = 0;
  }
}
