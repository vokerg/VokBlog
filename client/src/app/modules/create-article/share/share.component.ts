import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";
import {CloseShareAction, ShareArticleAction} from "../../../store/actions";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  @Input() id: string;

  @Input() articleId: string;

  isOpen:boolean = false;

  share() {
    this.store.dispatch(new ShareArticleAction(this.articleId));
    this.store.dispatch(new CloseShareAction(this.id));
  }

  cancel() {
    this.store.dispatch(new CloseShareAction(this.id));
  }

  ngOnInit() {
    this.store.select(fromRoot.isShareArticlePushed, {id: this.id})
      .subscribe((isOpen) => this.isOpen = isOpen);
  }

}
