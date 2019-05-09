import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public navLinks = [
    {
      path: 'btc-rub',
      label: 'BTC-RUB',
    },
    {
      path: 'btc-burst',
      label: 'BTC-BURST',
    }
  ];
}
