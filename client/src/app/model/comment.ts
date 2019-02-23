export class Comment {
  id: number;
  id_author: number;
  author: string;
  date: Date;
  comment: string;
  constructor() {
    this.id=0;
    this.id_author=0;
    this.author="";
    this.date=new Date();
    this.comment="";
  }
}
