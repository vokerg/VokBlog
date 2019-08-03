import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../store/reducers/index";

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

  isOpen:boolean = false;

  ngOnInit() {
    this.store.select(fromRoot.isShareArticlePushed, {id: this.id})
      .subscribe((isOpen) => this.isOpen = isOpen);
  }

}
