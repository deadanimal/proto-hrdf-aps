import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicSourcingComponent } from './strategic-sourcing.component';

describe('StrategicSourcingComponent', () => {
  let component: StrategicSourcingComponent;
  let fixture: ComponentFixture<StrategicSourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicSourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
