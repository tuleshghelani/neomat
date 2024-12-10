import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Implement your form submission logic here
    console.log('Form submitted:', this.contactData);
  }
}
