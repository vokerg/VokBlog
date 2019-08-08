import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCounterComponent } from './share-counter.component';

describe('ShareCounterComponent', () => {
  let component: ShareCounterComponent;
  let fixture: ComponentFixture<ShareCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
