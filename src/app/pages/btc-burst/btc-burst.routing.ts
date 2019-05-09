import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtcBurstPageComponent } from './btc-burst.page';

const btcBurstPageRoute: ModuleWithProviders = RouterModule.forChild([{
  path: '',
  component: BtcBurstPageComponent,
}]);

@NgModule({
  imports: [btcBurstPageRoute],
  exports: [RouterModule],
})
export class BtcBurstPageRoutingModule {}
