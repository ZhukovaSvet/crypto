import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/btc-rub', pathMatch: 'full',
  },
  {
    path: 'btc-rub', loadChildren: './pages/btc-rub/btc-rub.page.module#BtcRubPageModule',
  },
  {
    path: 'btc-burst', loadChildren: './pages/btc-burst/btc-burst.page.module#BtcBurstPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
