import { NgModule } from '@angular/core';
import { BtcRubPageRoutingModule } from './btc-rub.routing';
import { BtcRubPageComponent } from './btc-rub.page';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BtcRubPageRoutingModule,
  ],
  declarations: [
    BtcRubPageComponent,
  ],
})
export class BtcRubPageModule {
}
