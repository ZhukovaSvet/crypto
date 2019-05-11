import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BtcBurstPageComponent} from './btc-burst.page';
import {BtcBurstPageModule} from './btc-burst.page.module';
import {CurrencyService} from '../../services/currency.service';

describe('BtcBurstPageComponent', () => {
    let component: BtcBurstPageComponent;
    let fixture: ComponentFixture<BtcBurstPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BtcBurstPageModule],
            providers: [CurrencyService]
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
