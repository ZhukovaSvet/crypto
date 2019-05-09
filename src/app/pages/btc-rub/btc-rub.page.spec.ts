import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcRubPageComponent } from './btc-rub.page';

describe('BtcRubPageComponent', () => {
  let component: BtcRubPageComponent;
  let fixture: ComponentFixture<BtcRubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [BtcRubPageComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcRubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
