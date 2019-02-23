export class Article {
  id: number;
  title: string;
  subject: string;
  content: string;
  id_author: number;
  author: string;
  liked: boolean;
  tags: string;
  constructor() {
    this.id = 0;
    this.title = "";
    this.subject = "";
    this.content = "";
    this.id_author = 0;
    this.author = "";
    this.liked = false;
    this.tags = "";
  }
}
