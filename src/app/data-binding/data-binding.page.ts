import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],
})
export class DataBindingPage implements OnInit {

  constructor() { }
  username: string = "Patrick.sdf";

//  items: any = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

//   data: any = {'name': 'Ralph'}

//   nameChanged(){
//     alert("Mein Name wurde geändert auf: " + this.data.name);
//   }

//   buttonClicked(){
//     alert("Yeah, ich wurde angeklickt!"); 
// }

number: number = 0;

buttonNumber(value)
{

}
showPicture: boolean = false;
showNikkou: boolean = false;

  ngOnInit() {
  }
  changeUsername(ev){
    this.username = ev.target.value;
  }
}
