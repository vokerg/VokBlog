import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfArticlesComponent } from './self-articles.component';

describe('SelfArticlesComponent', () => {
  let component: SelfArticlesComponent;
  let fixture: ComponentFixture<SelfArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
