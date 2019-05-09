import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material';
import { CurrencyService } from './services/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
