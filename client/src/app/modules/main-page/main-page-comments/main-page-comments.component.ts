import { Component, OnInit } from '@angular/core';
import {Comment} from "../../../model/comment";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {LoadLatestCommentsAction} from "../../../store/actions/index";

@Component({
  selector: 'app-main-page-comments',
  templateUrl: './main-page-comments.component.html',
  styleUrls: ['./main-page-comments.component.css']
})
export class MainPageCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    store.select(fromRoot.getMainPageComments)
      .subscribe(comments => this.comments = comments);
  }

  ngOnInit() {
    this.store.dispatch(new LoadLatestCommentsAction());
  }

}
