import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCommentsComponent } from './main-page-comments.component';

describe('MainPageCommentsComponent', () => {
  let component: MainPageCommentsComponent;
  let fixture: ComponentFixture<MainPageCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
