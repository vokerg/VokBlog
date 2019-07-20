import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCommentsComponent } from './expand-comments.component';

describe('ExpandCommentsComponent', () => {
  let component: ExpandCommentsComponent;
  let fixture: ComponentFixture<ExpandCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
