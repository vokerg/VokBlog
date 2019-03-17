import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromReducers from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app12';

  constructor(
    private store: Store<fromReducers.Store>
  ) {}

  ngOnInit() {}
}
