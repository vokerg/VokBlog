export class Comment {
  id: string;
  idAuthor: number;
  author: string;
  //date: Date;
  text: string;
  constructor() {
    this.id="0";
    this.idAuthor=0;
    this.author="";
    //this.date=new Date();
    this.text="";
  }
}
