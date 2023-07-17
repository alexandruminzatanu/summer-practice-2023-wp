import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
// Define a property to store form data
  contactFormData = {
    name: '',
    email: '',
    message: ''
  };

  // Submit handler for the form
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log(this.contactFormData);
    }
    else 
      console.log("Not valid");
  // You can perform further actions like sending the data to an API
  }
}
