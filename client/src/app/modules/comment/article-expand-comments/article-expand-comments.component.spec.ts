import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExpandCommentsComponent } from './article-expand-comments.component';

describe('ArticleExpandCommentsComponent', () => {
  let component: ArticleExpandCommentsComponent;
  let fixture: ComponentFixture<ArticleExpandCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleExpandCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleExpandCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
