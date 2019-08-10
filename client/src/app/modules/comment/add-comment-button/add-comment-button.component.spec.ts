import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentButtonComponent } from './add-comment-button.component';

describe('AddCommentButtonComponent', () => {
  let component: AddCommentButtonComponent;
  let fixture: ComponentFixture<AddCommentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
