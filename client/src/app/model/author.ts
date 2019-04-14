export class Author {
  id: number;
  name: string;
  username: string;
  articlesCount: number;
  commentsCount: number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.articlesCount = 0;
    this.commentsCount = 0;
  }
}
