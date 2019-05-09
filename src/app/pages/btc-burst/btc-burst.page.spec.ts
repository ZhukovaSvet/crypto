import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcBurstPageComponent } from './btc-burst.page';
import { BoughtCardComponent } from "../../components/bought-card/bought-card.component";

describe('BtcBurstPageComponent', () => {
  let component: BtcBurstPageComponent;
  let fixture: ComponentFixture<BtcBurstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BtcBurstPageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcBurstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
