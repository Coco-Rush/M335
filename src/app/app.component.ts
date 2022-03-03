import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navigation', url: '/navigation', icon: 'navigate' },
    { title: 'News', url: '/newsletter', icon: 'mail' },
    { title: 'Details', url: '/navigation-detail', icon: 'compass' },
    { title: 'Special-alert', url: '/special', icon: 'mail' },
    { title: 'Calculator', url: '/calculator', icon: 'alert' },
    { title: 'Arrays', url: '/arrays', icon: 'cash' },
    { title: 'Data-Binding', url: '/data-binding', icon: 'cloud-circle' },
    { title: 'Buttons', url: '/chip', icon: 'alert' },
    { title: 'Modal', url: '/money-cash-flow', icon: '' },
    //Unimportant
    { title: 'Zahlen', url: '/zahlen', icon: 'calculator' },
    { title: 'Strings', url: '/string', icon: 'chatbubbles' },
    { title: 'Objekte', url: '/objekte', icon: 'cloud' },
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  //constructor() {}
}
