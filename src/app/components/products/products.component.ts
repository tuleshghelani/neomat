import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  displayedProducts: ProductDetail[] = [];
  isMobileCategoriesVisible = false;
  activeCategory: string | null = null;
  
  
  private batchSize = 6;
  private currentPage = 0;
  isLoading = false;
  
  @ViewChild('productContainer') productContainer!: ElementRef;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productCategories = this.productService.getProductCategories();
    this.updateFilteredProducts();
  }

  
  // Add window scroll listener for mobile/tablet
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.innerWidth <= 1024) { // tablet/mobile breakpoint
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Check if user has scrolled to near bottom
      if (windowHeight + scrollTop >= documentHeight - 2500) {
        this.loadNextBatch();
      }
    }
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
    
    // Reset pagination and update products
    this.resetPagination();
    if (category.isExpanded) {
      this.updateFilteredProducts(category);
    } else {
      this.updateFilteredProducts();
    }
  }

  selectSubProduct(category: ProductCategory, subProduct: string) {
    // Toggle selected state
    if (category.selectedImage === subProduct.toLowerCase()) {
      category.selectedImage = undefined;
      this.resetPagination();
      this.updateFilteredProducts(category);
    } else {
      category.selectedImage = subProduct.toLowerCase();
      this.resetPagination();
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
    this.loadNextBatch();
  }

  private resetPagination() {
    this.currentPage = 0;
    this.displayedProducts = [];
    this.isLoading = false;
  }

  private loadNextBatch() {
    if (this.isLoading) return;
    
    const startIndex = this.currentPage * this.batchSize;
    if (startIndex >= this.filteredProducts.length) return;
    
    this.isLoading = true;
    const endIndex = Math.min(startIndex + this.batchSize, this.filteredProducts.length);
    const newBatch = this.filteredProducts.slice(startIndex, endIndex);
    
    // Reduced timeout for better responsiveness
    setTimeout(() => {
      this.displayedProducts = [...this.displayedProducts, ...newBatch];
      this.currentPage++;
      this.isLoading = false;
    }, 400);
  }


  // Modify existing onScroll for desktop
  onScroll(event: any) {
    if (window.innerWidth > 1024) { // desktop only
      const element = event.target;
      const atBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 50;

      if (atBottom && !this.isLoading) {
        this.loadNextBatch();
      }
    }
  }

  // Add method to check if there are more products
  get hasMoreProducts(): boolean {
    return this.displayedProducts.length < this.filteredProducts.length;
  }


  toggleMobileCategories() {
    this.isMobileCategoriesVisible = !this.isMobileCategoriesVisible;
  }

  isCategoryActive(category: ProductCategory): boolean {
    return this.activeCategory === category.name;
  }
}