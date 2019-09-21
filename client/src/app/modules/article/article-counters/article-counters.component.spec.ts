import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCountersComponent } from './article-counters.component';

describe('ArticleCountersComponent', () => {
  let component: ArticleCountersComponent;
  let fixture: ComponentFixture<ArticleCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
