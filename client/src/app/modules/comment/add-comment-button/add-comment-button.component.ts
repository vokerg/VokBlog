import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers";
import {PushAddCommentButtonAction} from "../../../store/actions";

@Component({
  selector: 'app-add-comment-button',
  templateUrl: './add-comment-button.component.html',
  styleUrls: ['./add-comment-button.component.css']
})
export class AddCommentButtonComponent implements OnInit {

  @Input() id: string;
  @Input() isForArticle: boolean=true;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  addCommentClicked() {
    this.store.dispatch(new PushAddCommentButtonAction(this.id));
  }

  ngOnInit() {}

}
