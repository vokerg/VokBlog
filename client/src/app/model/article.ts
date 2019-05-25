export class Article {
  id: string;
  title: string;
  subject: string;
  content: string;
  idAuthor: string;
  author: string;
  liked: boolean;
  tags: string[];
  likeCount: number;
  constructor() {
    this.id = null;
    this.title = "";
    this.subject = "";
    this.content = "";
    this.author = "";
    this.liked = false;
    this.tags = [];
    this.likeCount = 0;
  }
}
