import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtcRubPageComponent } from './btc-rub.page';

const btcRubPageRoute: ModuleWithProviders = RouterModule.forChild([{
  path: '',
  component: BtcRubPageComponent,
}]);

@NgModule({
  imports: [btcRubPageRoute],
  exports: [RouterModule],
})
export class BtcRubPageRoutingModule {}
