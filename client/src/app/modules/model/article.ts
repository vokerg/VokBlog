export class Article {
  id: string;
  title: string;
  subject: string;
  content: string;
  idAuthor: string;
  idSharedArticle: string;
  author: string;
  liked: boolean;
  tags: string[];
  likeCount: number;
  commentsCount: number;
  sharedArticle: Article
  constructor() {
    this.id = null;
    this.title = "";
    this.subject = "";
    this.content = "";
    this.author = "";
    this.liked = false;
    this.tags = [];
    this.likeCount = 0;
    this.commentsCount = 0;
  }
}
