import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';
import { ProfitInterface } from '../../interfaces/profit.interface';

const ONE_SATOSHI = 100000000;

@Component({
    selector: 'app-btc-burst',
    templateUrl: './btc-burst.page.html',
    styleUrls: ['./btc-burst.page.css'],
})
export class BtcBurstPageComponent implements OnInit {
    public profit$: Observable<ProfitInterface[]>;
    public boughtSum: number;
    public soldSum: number;
    // private countOfOperations = 0;

    // public displayedColumns: string[] = ['currency', 'profit', 'fee'];
    public displayedColumns: string[] = ['currency', 'profit'];

    constructor(private currencyService: CurrencyService) {}

    ngOnInit(): void {
        this.calculateProfit();
    }

    private calculateProfit(): void {
        this.profit$ = combineLatest([of(this.boughtSum), of(this.soldSum)])
            .pipe(
                map(([bought = 0, sold = 0]) => of(sold - bought)),
                switchMap((satoshiProfit) => combineLatest([this.currencyService.currencyRub$(), satoshiProfit])),
                map(([currencyRub, satoshiProfit]) => {
                    const rubProfit = satoshiProfit / ONE_SATOSHI * currencyRub;

                    const satoshi = {
                        currency: 'satoshi',
                        profit: satoshiProfit,
                        // fee: 0,
                    };

                    const rub = {
                        currency: 'rub',
                        profit: rubProfit,
                        // fee: 0,
                    };

                    return ([satoshi, rub]);
                }),
            );
    }

    public onBoughtSumChanged(sum: number) {
        this.boughtSum = sum;
        // this.countOfOperations += 1;
        this.calculateProfit();
    }

    public onSoldSumChanged(sum: number) {
        this.soldSum = sum;
        // this.countOfOperations += 1;
        this.calculateProfit();
    }
}
