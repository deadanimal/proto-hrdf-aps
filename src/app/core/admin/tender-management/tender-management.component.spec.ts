import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderManagementComponent } from './tender-management.component';

describe('TenderManagementComponent', () => {
  let component: TenderManagementComponent;
  let fixture: ComponentFixture<TenderManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
