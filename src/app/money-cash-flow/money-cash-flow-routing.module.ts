import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyCashFlowPage } from './money-cash-flow.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyCashFlowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyCashFlowPageRoutingModule {}
