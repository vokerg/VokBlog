import {Article} from "./article";

export class Comment {
  id: string;
  idAuthor: string;
  idArticle: string;
  authorName: string;
  title: string;
  text: string;
  article: Article;
  liked: boolean;
  likeCount: number;
  idParentComment: string;
  constructor() {
    this.id=null;
    this.idAuthor="";
    this.idArticle="";
    this.authorName="";
    this.title="";
    this.text="";
    this.liked = false;
    this.likeCount = 0;
    this.idParentComment="";
  }
}
