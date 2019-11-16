import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmittedComponent } from './view-submitted.component';

describe('ViewSubmittedComponent', () => {
  let component: ViewSubmittedComponent;
  let fixture: ComponentFixture<ViewSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
