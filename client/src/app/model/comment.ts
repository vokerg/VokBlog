import {Article} from "./article";

export class Comment {
  id: string;
  idAuthor: string;
  idArticle: string;
  author: string;
  title: string;
  text: string;
  article: Article;
  constructor() {
    this.id=null;
    this.idAuthor="";
    this.idArticle="";
    this.author="";
    this.title="";
    this.text="";
  }
}
