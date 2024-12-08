import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProductService } from '../../services/product.service';

interface ProductCategory {
  name: string;
  isExpanded: boolean;
  subProducts: string[];
  selectedImage?: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden',
        padding: '0'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        padding: '0.5rem 0'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {
  productCategories: ProductCategory[] = [];
  selectedCategory: ProductCategory | null = null;
  filteredProducts: any[] = [];
  isMobileCategoriesVisible = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productCategories = this.productService.getProductCategories();
    this.updateFilteredProducts();
  }

  toggleCategory(category: ProductCategory) {
    // Close other categories
    this.productCategories.forEach(cat => {
      if (cat !== category) {
        cat.isExpanded = false;
      }
    });
    
    // Toggle current category
    category.isExpanded = !category.isExpanded;
    this.selectedCategory = category.isExpanded ? category : null;
    
    // Update filtered products
    this.updateFilteredProducts();
  }

  selectSubProduct(category: ProductCategory, subProduct: string) {
    category.selectedImage = subProduct.toLowerCase();
    this.updateFilteredProducts(category, subProduct);
  }

  private updateFilteredProducts(category?: ProductCategory, subProduct?: string) {
    if (category && subProduct) {
      this.filteredProducts = this.productService.getProductsByCategory(category.name, subProduct);
    } else {
      this.filteredProducts = this.productService.getAllProducts();
    }
  }

  toggleMobileCategories() {
    this.isMobileCategoriesVisible = !this.isMobileCategoriesVisible;
  }
}
