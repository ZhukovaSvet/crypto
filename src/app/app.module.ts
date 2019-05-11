import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CurrencyService} from './services/currency.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterTestingModule,
        AppRoutingModule,
        FormsModule,
        MatTabsModule,
        RouterModule,
        HttpClientModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
    ],
    providers: [CurrencyService],
    exports: [RouterModule],
    providers: [CurrencyService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
