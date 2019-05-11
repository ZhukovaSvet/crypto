import {NgModule} from '@angular/core';
import {BtcRubPageRoutingModule} from './btc-rub.routing';
import {BtcRubPageComponent} from './btc-rub.page';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

@NgModule({
    imports: [
        CommonModule,
        BtcRubPageRoutingModule,
        HttpClientModule,
        HttpClientTestingModule
    ],
    declarations: [
        BtcRubPageComponent,
    ],
})
export class BtcRubPageModule {
}
