import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {CurrencyService} from './services/currency.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
            providers: [CurrencyService]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
