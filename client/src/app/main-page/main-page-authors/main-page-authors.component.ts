import { Component, OnInit } from '@angular/core';
import {Author} from "../../model/author";
import {AuthorService} from "../../service/author.service";

@Component({
  selector: 'app-main-page-authors',
  templateUrl: './main-page-authors.component.html',
  styleUrls: ['./main-page-authors.component.css']
})
export class MainPageAuthorsComponent implements OnInit {
  authors: Author[];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getTopAuthors().subscribe(result => this.authors = result);
  }

}
