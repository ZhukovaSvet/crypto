import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';
import { CurrencyInterface } from '../interfaces/currency.interface';

@Injectable()
export class CurrencyService {
  constructor(
    protected http: HttpClient,
  ) {}

  public currencyRub$(): Observable<number> {
    return this.http.get('https://blockchain.info/ticker')
      .pipe(
        map((data: CurrencyInterface) => data.RUB.sell)
      );
  }
}
