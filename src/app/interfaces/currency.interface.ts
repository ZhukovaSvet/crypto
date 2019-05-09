export interface CurrencyInterface {
  'RUB': CurrencyDetailedInterface;
}

interface CurrencyDetailedInterface {
  '15m': number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}
