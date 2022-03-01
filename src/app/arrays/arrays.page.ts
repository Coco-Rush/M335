import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.page.html',
  styleUrls: ['./arrays.page.scss'],
})
export class ArraysPage implements OnInit {
  fruechte: Frucht[] = [
    {name:'Orange'},
    {name:'Banane'},
    {name:'Apfel'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Frucht{
  name:string;
}
