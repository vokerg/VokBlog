import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";
import {PushShareButtonAction} from "../../store/actions";

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent implements OnInit {

  @Input() id: string;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  shareButtonClicked() {
    this.store.dispatch(new PushShareButtonAction(this.id))
  }

  ngOnInit() {
  }

}
