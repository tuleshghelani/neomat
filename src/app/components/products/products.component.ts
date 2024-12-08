import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProductService, ProductCategory, ProductDetail } from '../../services/product.service';

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
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {
  productCategories: ProductCategory[] = [];
  selectedCategory: ProductCategory | null = null;
  filteredProducts: ProductDetail[] = [];
  isMobileCategoriesVisible = false;
  activeCategory: string | null = null;

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
    
    // Update selected category
    this.selectedCategory = category.isExpanded ? category : null;
    this.activeCategory = category.isExpanded ? category.name : null;
    
    // Update filtered products
    if (category.isExpanded) {
      this.updateFilteredProducts(category);
    } else {
      this.filteredProducts = this.productService.getAllProducts();
    }
  }

  selectSubProduct(category: ProductCategory, subProduct: string) {
    // Toggle selected state
    if (category.selectedImage === subProduct.toLowerCase()) {
      category.selectedImage = undefined;
      this.updateFilteredProducts(category);
    } else {
      category.selectedImage = subProduct.toLowerCase();
      this.updateFilteredProducts(category, subProduct);
    }
  }

  private updateFilteredProducts(category?: ProductCategory, subProduct?: string) {
    if (category && subProduct) {
      this.filteredProducts = this.productService.getProductsByCategory(category.name, subProduct);
    } else if (category) {
      this.filteredProducts = this.productService.getProductsByCategory(category.name);
    } else {
      this.filteredProducts = this.productService.getAllProducts();
    }
  }

  toggleMobileCategories() {
    this.isMobileCategoriesVisible = !this.isMobileCategoriesVisible;
  }

  isCategoryActive(category: ProductCategory): boolean {
    return this.activeCategory === category.name;
  }
}
