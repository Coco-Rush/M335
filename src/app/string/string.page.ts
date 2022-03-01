import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.page.html',
  styleUrls: ['./string.page.scss'],
})
export class StringPage implements OnInit {
  Vorname: string = 'Rudolf';
  Nachname: string = 'Grauratte';

  constructor() { }

  ngOnInit() {
  }

}
