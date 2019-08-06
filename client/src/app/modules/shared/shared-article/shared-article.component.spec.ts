import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedArticleComponent } from './shared-article.component';

describe('SharedArticleComponent', () => {
  let component: SharedArticleComponent;
  let fixture: ComponentFixture<SharedArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
