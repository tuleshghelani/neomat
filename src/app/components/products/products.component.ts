import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface ProductCategory {
  name: string;
  subProducts: string[];
  isExpanded?: boolean;
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
        overflow: 'hidden',
        opacity: '0'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ProductsComponent {
  selectedCategory: ProductCategory | null = null;
  
  productCategories: ProductCategory[] = [
    {
      name: 'VCO FITTINGS',
      subProducts: [
        'Male Connector', 'Female Connector', 'Gland', 'Male Elbow',
        'Union Elbow', 'Union Tee', 'Union Cross', 'Male Run Tee',
        'Male Branch Tee', '"O" Ring Seat Connector', '"O" Ring Seat Male Connector',
        'Union', 'Tube Socket'
      ]
    },
    {
      name: 'VCR FITTINGS',
      subProducts: [
        'Nut', 'Gasket', 'Gland', 'Union Tee', 'Union Cross',
        'Male Connector', 'Female Connector', 'Union Elbow',
        'Male Elbow', 'Bulkhead Union', 'Equal Union'
      ]
    },
    {
      name: 'TUBE FITTINGS',
      subProducts: [
        'Male Connector', 'Female Connector', 'Adapter', 'Plug',
        'Union Tee', 'Run Tee', 'Female Tee', 'Union',
        'Reducing Union', 'Bulkhead Union', 'Tube Elbow',
        'OD Cap', 'OD Plug', 'Hex Nipple'
      ]
    },
    {
      name: 'BUT WELD END FITTINGS',
      subProducts: [
        '45 Deg Elbow', '90 Deg Elbow', 'Tee Equal', 'Tee Reducing',
        'End Cap', 'Barrel Nipple', 'Pipe Nipple', 'Swage Nipple',
        'U bend', 'Long Stub End', 'Short Stub End', 'Lateral Tee',
        'Reducer Eccentric'
      ]
    },
    {
      name: 'FORGED FITTINGS',
      subProducts: [
        '45 Deg Elbow Fittings', '90 Deg Elbow Fittings', 'Union',
        'Barrel Nipple', 'Swage nipple', 'Bushing', 'Forged Tee',
        'Equal Tee Fittings', 'Reducing Tee Fittings', 'End Cap',
        'Cross', 'Plug', 'Coupling', 'Full Coupling', 'Half Coupling',
        'Reducing Coupling', 'Boss'
      ]
    },
    {
      name: 'FLANGES',
      subProducts: [
        'SORF Flanges', 'BLRF Flanges', 'Ring Joint Flanges',
        'Paddle & Spacer', 'Spectacles', 'Long Weld Neck Flanges',
        'Threaded/screwed Flanges', 'Lapped Joint Flanges',
        'Tongue & Groove Flanges', 'Orifice Flanges', 'Flange Olet',
        'Nipo Flanges', 'Puddle Flanges', 'WNRF Flanges'
      ]
    }
  ];

  toggleCategory(category: ProductCategory) {
    this.productCategories.forEach(cat => {
      if (cat !== category) {
        cat.isExpanded = false;
      }
    });
    category.isExpanded = !category.isExpanded;
    this.selectedCategory = category.isExpanded ? category : null;
  }

  selectSubProduct(category: ProductCategory, subProduct: string) {
    category.selectedImage = `assets/images/products/${category.name.toLowerCase().replace(/\s+/g, '-')}/${subProduct.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  }
}
