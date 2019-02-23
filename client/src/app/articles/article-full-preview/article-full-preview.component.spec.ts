import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFullPreviewComponent } from './article-full-preview.component';

describe('ArticleFullPreviewComponent', () => {
  let component: ArticleFullPreviewComponent;
  let fixture: ComponentFixture<ArticleFullPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFullPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFullPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
