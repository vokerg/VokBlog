export class Author {
  id: string;
  name: string;
  username: string;
  articlesCount: number;
  commentsCount: number;
  followersCount: number;
  followedByCurrentUser: boolean;
  constructor() {
    this.id = '';
    this.name = '';
    this.articlesCount = 0;
    this.commentsCount = 0;
    this.followersCount = 0;
    this.followedByCurrentUser = false;
  }
}
