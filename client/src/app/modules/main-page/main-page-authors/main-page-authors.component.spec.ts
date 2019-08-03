import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAuthorsComponent } from './main-page-authors.component';

describe('MainPageAuthorsComponent', () => {
  let component: MainPageAuthorsComponent;
  let fixture: ComponentFixture<MainPageAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
