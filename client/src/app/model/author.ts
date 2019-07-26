export class Author {
  id: string;
  name: string;
  username: string;
  articlesCount: number;
  commentsCount: number;
  constructor() {
    this.id = '';
    this.name = '';
    this.articlesCount = 0;
    this.commentsCount = 0;
  }
}
