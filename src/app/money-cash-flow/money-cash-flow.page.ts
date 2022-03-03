import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-money-cash-flow',
  templateUrl: './money-cash-flow.page.html',
  styleUrls: ['./money-cash-flow.page.scss'],
})
export class MoneyCashFlowPage implements OnInit {

  constructor(public routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

}

