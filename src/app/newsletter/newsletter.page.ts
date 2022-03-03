import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {

  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
      this.contactForm = new FormGroup({
        lastname: new FormControl(null),
        firstname: new FormControl(null),
        email: new FormControl(null)
      });
  }
  
  sendContactForm() {
    console.log("Do something fancy with the form...");
    console.log("Lastname: " + this.contactForm.get('lastname').value);
    console.log("Firstname: " + this.contactForm.get('firstname').value);
    console.log("Email: " + this.contactForm.get('email').value);
  }

}
