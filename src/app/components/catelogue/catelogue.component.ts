import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { CountryService } from '../../services/country.service';

interface CatalogueItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-catelogue',
  templateUrl: './catelogue.component.html',
  styleUrls: ['./catelogue.component.scss']
})
export class CatelogueComponent {
  showEnquiryForm = false;
  enquiryForm: FormGroup;
  isSubmitting = false;
  selectedItem: CatalogueItem | null = null;
  countries: any[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService) {
    this.countries = this.countryService.getCountries();
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      mobilenumber: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      company_name: [null, ],
      designation: [null, ],
    });
  }

  ngOnInit(): void { }

  openEnquiryForm(item: CatalogueItem): void {
    this.selectedItem = item;
    this.showEnquiryForm = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeEnquiryForm(): void {
    this.showEnquiryForm = false;
    this.enquiryForm.reset();
    this.selectedItem = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.enquiryForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  async submitEnquiry(): Promise<void> {
    if (this.enquiryForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      try {
        // Construct the API URL
        const apiUrl = `${environment.baseURL}/api/enquiries/`;

        // Prepare form data
        const formData = {
          ...this.enquiryForm.value,
          productId: this.selectedItem?.id,
          productName: this.selectedItem?.title
        };

        // Make the API call
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.status === 201) {
          alert('Enquiry submitted successfully!');
          this.closeEnquiryForm();
        } else {
          throw new Error('Failed to submit enquiry');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit enquiry. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.enquiryForm.controls).forEach(key => {
        const control = this.enquiryForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

  catalogueItems: CatalogueItem[] = [
    {
      id: 1,
      title: 'Valves',
      description: 'Cutting-edge materials for future-ready construction',
      image: 'assets/catelogue/VALVES FITTING MOCKUP.png',
      category: 'Innovation'
    },
    {
      id: 2,
      title: 'I/C Casting Fittings',
      description: 'Cutting-edge materials for future-ready construction',
      image: 'assets/catelogue/I-C CASTING FITTINGS MOCK UP.png',
      category: 'Innovation'
    },
    // {
    //   id: 2,
    //   title: 'But Weld End Fittings',
    //   description: 'Cutting-edge materials for future-ready construction',
    //   image: 'assets/catelogue/BUT WELD END FITTINGS.jpg',
    //   category: 'Innovation'
    // },
    {
      id: 3,
      title: 'Forged Fittings',
      description: 'Eco-friendly options for conscious building',
      image: 'assets/catelogue/FORGED FITTINGS MOCKUP.png',
      category: 'Sustainable'
    },
    {
      id: 4,
      title: 'Flanges',
      description: 'Expertly curated designer materials',
      image: 'assets/catelogue/FLANGE FITTINGS MOCKUP.png',
      category: 'Designer'
    },
    {
      id: 5,
      title: 'PIPE FITTINGS',
      description: 'Discover our exclusive range of premium materials',
      image: 'assets/catelogue/PIPE FITTINGS MOCKUP.png',
      category: 'Premium'
    },
    {
      id: 7,
      title: 'Tube Fittings',
      description: 'Timeless elegance for every project',
      image: 'assets/catelogue/TUBE FITTINGS MOCKUP.png',
      category: 'Classic'
    },
  ];
}
