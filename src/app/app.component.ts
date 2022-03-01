import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navigation', url: '/navigation', icon: 'navigate' },
    { title: 'Details', url: '/navigation-detail', icon: 'compass' },
    { title: 'Special', url: '/special', icon: 'mail' },
    { title: 'Zahlen', url: '/zahlen', icon: 'calculator' },
    { title: 'Strings', url: '/string', icon: 'chatbubbles' },
    { title: 'Objekte', url: '/objekte', icon: 'cloud-circle' },
    { title: 'Arrays', url: '/arrays', icon: 'cloud' },
    { title: 'Data', url: '/data-binding', icon: '' },
    { title: 'Geld', url: '/money-cash-flow', icon: 'cash' },
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  //constructor() {}
}
