export class Alert {
  id: string;
  text: string;
  seen: boolean;
  authorName: string;
  idComment: string;
  idArticle: string;

  constructor() {
    this.id = null;
    this.text = '';
    this.seen = false;
    this.authorName = '';
  }
}
