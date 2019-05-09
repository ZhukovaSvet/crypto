import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-btc-rub',
  templateUrl: './btc-rub.page.html',
  styleUrls: ['./btc-rub.page.css']
})
export class BtcRubPageComponent implements OnInit {
  public currentCurrency$: Observable<any>;

  constructor(
    private currencyService: CurrencyService,
  ) {}

  ngOnInit(): void {
    this.currentCurrency$ = this.currencyService.currencyRub$();
  }
}
