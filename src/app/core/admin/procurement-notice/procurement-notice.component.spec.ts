import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementNoticeComponent } from './procurement-notice.component';

describe('ProcurementNoticeComponent', () => {
  let component: ProcurementNoticeComponent;
  let fixture: ComponentFixture<ProcurementNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
