import { Component, OnInit } from '@angular/core';
// Importieren
import { StorageService } from '../_services/storage.service';


@Component({
  selector: 'app-local-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  name: string;
  pushToggle: boolean;
  newsletterToggle:boolean;

  constructor(private storageService: StorageService) {}
  
  ngOnInit() {
  }
  
 // TODO: ...
 
} 


