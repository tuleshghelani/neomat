import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  styleUrl: './catelogue.component.scss'
})
export class CatelogueComponent {
  showEnquiryForm = false;
  enquiryForm: FormGroup;
  isSubmitting = false;
  selectedItem: CatalogueItem | null = null;


  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required, Validators.minLength(10)]]
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
        // Here you would typically make an API call to submit the form
        const formData = {
          ...this.enquiryForm.value,
          productId: this.selectedItem?.id,
          productName: this.selectedItem?.title
        };
        
        console.log('Form submitted:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message (you can implement a proper notification system)
        alert('Enquiry submitted successfully!');
        this.closeEnquiryForm();
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
      title: 'Premium Collection',
      description: 'Discover our exclusive range of premium materials',
      image: 'assets/catelogue/1.png',
      category: 'Premium'
    },
    {
      id: 2,
      title: 'Modern Design',
      description: 'Contemporary solutions for modern spaces',
      image: 'assets/catelogue/1.png',
      category: 'Modern'
    },
    {
      id: 3,
      title: 'Classic Series',
      description: 'Timeless elegance for every project',
      image: 'assets/catelogue/1.png',
      category: 'Classic'
    },
    {
      id: 4,
      title: 'Innovative Materials',
      description: 'Cutting-edge materials for future-ready construction',
      image: 'assets/catelogue/1.png',
      category: 'Innovation'
    },
    {
      id: 5,
      title: 'Sustainable Solutions',
      description: 'Eco-friendly options for conscious building',
      image: 'assets/catelogue/1.png',
      category: 'Sustainable'
    },
    {
      id: 6,
      title: 'Designer Collection',
      description: 'Expertly curated designer materials',
      image: 'assets/catelogue/1.png',
      category: 'Designer'
    }
  ];


}
