import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BtcRubPageComponent} from './btc-rub.page';
import {CurrencyService} from '../../services/currency.service';
import {BtcRubPageModule} from './btc-rub.page.module';

describe('BtcRubPageComponent', () => {
    let component: BtcRubPageComponent;
    let fixture: ComponentFixture<BtcRubPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BtcRubPageModule],
            // providers: [{ provide: CurrencyService, useValue: 0 }],
            providers: [CurrencyService],
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
