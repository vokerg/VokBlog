import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCounterComponent } from './comments-counter.component';

describe('CommentsCounterComponent', () => {
  let component: CommentsCounterComponent;
  let fixture: ComponentFixture<CommentsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
