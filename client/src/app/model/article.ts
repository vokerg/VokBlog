export class Article {
  id: string;
  title: string;
  subject: string;
  content: string;
  idAuthor: string;
  author: string;
  liked: boolean;
  tags: string[];
  constructor() {
    this.id = null;
    this.title = "";
    this.subject = "";
    this.content = "";
    this.author = "";
    this.liked = false;
    this.tags = [];
  }
}
