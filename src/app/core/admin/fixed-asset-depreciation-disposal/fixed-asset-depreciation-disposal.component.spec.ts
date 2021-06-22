import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAssetDepreciationDisposalComponent } from './fixed-asset-depreciation-disposal.component';

describe('FixedAssetDepreciationDisposalComponent', () => {
  let component: FixedAssetDepreciationDisposalComponent;
  let fixture: ComponentFixture<FixedAssetDepreciationDisposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedAssetDepreciationDisposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAssetDepreciationDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
