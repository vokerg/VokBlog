import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../model/article";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-share-counter',
  templateUrl: './share-counter.component.html',
  styleUrls: ['./share-counter.component.css']
})
export class ShareCounterComponent implements OnInit {

  @Input() article: Article;

  action() {
    // not implemented
    console.log('not implemented');
  }

  constructor() { }

  ngOnInit() {
  }

}
