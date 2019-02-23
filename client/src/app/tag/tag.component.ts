import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TagService } from '../service/tag.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(
    private tagService: TagService,
    private route: ActivatedRoute
  ) { }

  tag: String;
  articles: Article[];

  ngOnInit() {
    this.route.params.forEach(params => {
      this.tag = params["tag"];
      this.articles = this.tagService.getTagArticles(this.tag);
    });
  }

}
