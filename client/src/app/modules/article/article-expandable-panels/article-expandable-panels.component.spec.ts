import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExpandablePanelsComponent } from './article-expandable-panels.component';

describe('ArticleExpandablePanelsComponent', () => {
  let component: ArticleExpandablePanelsComponent;
  let fixture: ComponentFixture<ArticleExpandablePanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleExpandablePanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleExpandablePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
