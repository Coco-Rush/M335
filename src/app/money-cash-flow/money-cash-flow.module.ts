import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyCashFlowPageRoutingModule } from './money-cash-flow-routing.module';

import { MoneyCashFlowPage } from './money-cash-flow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyCashFlowPageRoutingModule
  ],
  declarations: [MoneyCashFlowPage]
})
export class MoneyCashFlowPageModule {}
