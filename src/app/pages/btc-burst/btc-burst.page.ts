import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';

const ONE_SATOSHI = 100000000;

@Component({
  selector: 'app-btc-burst',
  templateUrl: './btc-burst.page.html',
  styleUrls: ['./btc-burst.page.css']
})
export class BtcBurstPageComponent implements OnInit {
  public profit$: Observable<number>;
  public boughtSum: number;
  public soldSum: number;

  public displayedColumns: string[] = ['currency', 'profit', 'fee'];
  public dataSource = [
    {currency: 'satoshi', profit: 0, fee: 0},
    {currency: 'rub', profit: 0, fee: 0},
  ];
  // private _profit = new BehaviorSubject<ProfitInterface[]>(this.dataSource);

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.calculateProfit();
  }

  private calculateProfit(): void {
    this.profit$ = combineLatest([of(this.boughtSum), of(this.soldSum)])
      .pipe(
        map(([bought = 0, sold = 0]) => of(sold - bought)),
        // tap(() => this._profit.next(Object.assign({}, this.dataSource))),
        // tap(() => console.log(this._profit)),
        switchMap((satoshiProfit) => combineLatest([this.currencyService.currencyRub$(), (satoshiProfit)])),
        map(([satoshiProfit, data]) => data / ONE_SATOSHI * satoshiProfit),
      );
  }

// tap((satoshiProfit: number) => this.dataSource[0].profit = satoshiProfit),
  // tap((satoshiProfit: number) => this.dataSource[0].fee = satoshiProfit * 0.025),

  public onBoughtSumChanged(sum: number) {
    this.boughtSum = sum;
    this.calculateProfit();
  }

  public onSoldSumChanged(sum: number) {
    this.soldSum = sum;
    this.calculateProfit();
  }
}
