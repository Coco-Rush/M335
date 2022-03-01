import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahlen',
  templateUrl: './zahlen.page.html',
  styleUrls: ['./zahlen.page.scss'],
})
export class ZahlenPage implements OnInit {
  anzahl: number = 3;
  kosten: number = 5;
  anyVar: any = 5;

  constructor() { }

  ngOnInit() {
  }

}
