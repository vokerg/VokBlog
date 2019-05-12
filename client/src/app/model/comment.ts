import {Article} from "./article";

export class Comment {
  id: string;
  idAuthor: string;
  idArticle: string;
  authorName: string;
  title: string;
  text: string;
  article: Article;
  constructor() {
    this.id=null;
    this.idAuthor="";
    this.idArticle="";
    this.authorName="";
    this.title="";
    this.text="";
  }
}
