import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report123Component } from './report123.component';

describe('Report123Component', () => {
  let component: Report123Component;
  let fixture: ComponentFixture<Report123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
