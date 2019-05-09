import { NgModule } from '@angular/core';
import { BtcBurstPageRoutingModule } from './btc-burst.routing';
import { BtcBurstPageComponent } from './btc-burst.page';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatProgressSpinnerModule, MatTableModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoughtCardComponent } from '../../components/bought-card/bought-card.component';
import { SoldCardComponent } from '../../components/sold-card/sold-card.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
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
