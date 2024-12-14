import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactData = {
    name: '',
    email: '',
    mobilenumber: '',
    subject: '',
    message: '',
    company_name: '',
    designation: '',
    country: ''
  };

  isSubmitting = false;
  countries: any[] = [];

  constructor(private countryService: CountryService) {
    this.countries = this.countryService.getCountries();
  }

  async onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    try {
      const response = await fetch(`${environment.baseURL}/api/contacts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_name: this.contactData.name,
          email: this.contactData.email,
          subject: this.contactData.subject,
          mobilenumber: this.contactData.mobilenumber,
          message: this.contactData.message,
          company_name: this.contactData.company_name,
          designation: this.contactData.designation,
          country: this.contactData.country
        })
      });

      if (response.ok) {
        const result = await response.json();
        alert('Message sent successfully!');
        // Reset form
        this.contactData = {
          name: '',
          email: '',
          mobilenumber: '',
          subject: '',
          message: '',
          company_name: '',
          designation: '',
          country: ''
        };
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }
}
