import {NgModule} from '@angular/core';
import {BtcBurstPageRoutingModule} from './btc-burst.routing';
import {BtcBurstPageComponent} from './btc-burst.page';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BoughtCardComponent} from '../../components/bought-card/bought-card.component';
import {SoldCardComponent} from '../../components/sold-card/sold-card.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        ReactiveFormsModule,
        BtcBurstPageRoutingModule,
    ],
    declarations: [
        BtcBurstPageComponent,
        BoughtCardComponent,
        SoldCardComponent,
    ],
})
export class BtcBurstPageModule {
}
