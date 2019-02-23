import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input() comments: Comment[];

  ngOnInit() {
  }



}
