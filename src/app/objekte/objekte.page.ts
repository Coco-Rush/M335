import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objekte',
  templateUrl: './objekte.page.html',
  styleUrls: ['./objekte.page.scss'],
})
export class ObjektePage implements OnInit {
  person: Person = {vorname: 'Rudolf', nachname: 'Grauratte'};

  constructor() { }

  ngOnInit() {
  }

}

interface Person{
  vorname: string;
  nachname: string;
}
