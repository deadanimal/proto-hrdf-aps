import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAssetRegistrationComponent } from './fixed-asset-registration.component';

describe('FixedAssetRegistrationComponent', () => {
  let component: FixedAssetRegistrationComponent;
  let fixture: ComponentFixture<FixedAssetRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedAssetRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAssetRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
