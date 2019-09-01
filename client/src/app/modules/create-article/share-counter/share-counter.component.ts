import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../model/article";

@Component({
  selector: 'app-share-counter',
  templateUrl: './share-counter.component.html',
  styleUrls: ['./share-counter.component.css']
})
export class ShareCounterComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

}
