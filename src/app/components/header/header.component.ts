declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: any;
        Element: any;
      };
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentRoute: string = '/';
  isMenuOpen = false;

  productCategories = [
    {
      name: 'VALVES',
      isActive: false,
      subItems: [
        'Forged Steel Ball Valves', 'Forged Steel Gate Valves', 'Forged Steel Globe Valve', 'Forged Steel Lift Check Valves',
        'Cast Steel Floating Ball Valves', 'Cast Steel Gate Valves', 'Cast Steel Globe Valves', 'Cast Steel Check Valves'
      ]
    },
    {
      name: 'I/C CASTING FITTINGS',
      isActive: false,
      subItems: [
        '45 Elbow', '90 Elbow', 'Tee', 'Cross',
        'Elbow Reducing', 'Reducing Cross', 'Reducing Tee', 'Y Stainer 45',
        'Street Elbow 90', 'Street Elbow 45', 'Street TEE',
        'Coupling', 'Reduce Coupling','CAP'
      ]
    },
    // {
    //   name: 'BUT WELD END FITTINGS',
    //   isActive: false,
    //   subItems: [
    //     '45 Deg Elbow',
    //     '90 Deg Elbow',
    //     'Tee Equal',
    //     'Tee Reducing',
    //     'End Cap',
    //     'Barrel Nipple',
    //     'Pipe Nipple',
    //     'Swage Nipple',
    //     'U bend',
    //     'Long Stub End',
    //     'Short Stub End',
    //     'Lateral Tee',
    //     'Reducer Eccentric',
    //   ]
    // },
    {
      name: 'FORGED FITTINGS',
      isActive: false,
      subItems: [
        '45 Deg Elbow Fittings',
        '90 Deg Elbow Fittings',
        'Union',
        'Barrel Nipple',
        'Swage nipple',
        'Bushing',
        'Forged Tee',
        'Equal Tee Fittings',
        'Reducing Tee Fittings',
        'End Cap',
        'Cross',
        'Plug',
        'Coupling',
        'Full Coupling',
        'Half Coupling',
        'Reducing Coupling',
        'Boss',
      ]
    },
    {
      name: 'FLANGES',
      isActive: false,
      subItems: [
        'Slip On Flanges',
        'BLIND Flanges',
        'Weld Neck Flanges',
        'Threarded Flanges',
        'Olet Flanges',
        'Socket Weld Flanges',
        'Lap Joint Flanges',
      ]
    },
    {
      name: 'PIPE FITTINGS',
      isActive: false,
      subItems: [
        'Male Tee', 'Female Tee', 'Male Run Tee', 'Female Run Tee',
        'Male Branch Tee', 'Female Branch Tee', '90 Male Elbow', '90 Female Elbow',
        'Female Cross(Hex.Th)', 'Female Cross(Round Th)', 'Pipe Plug', 'Pipe Plug',
        'Full Coupling', 'Half Coupling', 'Reducing Coupling', 'Reducing Bushing',
        'Pipe Union 3PC (Hex.Th)', 'Pipe Union 3PC (Round.Sh)', 'Male Adaptor', 'Female Adaptor',
        'Reducer Swage Nipple (Round - BW)', 'Reducer Swage Nipple (Round - TH)', 'Breather',
        'Hix Nipple', 'Pipe Nipple (PL x TH)', 'Pipe Nipple (PL x PL)', 'Pipe Nipple (TH x TH)'
      ]
    },
    {
      name: 'TUBE FITTINGS',
      isActive: false,
      subItems: [
        'Male Connector',
        'Female Connector',
        'Adapter',
        'Plug',
        'Union Tee',
        'Run Tee',
        'Female Tee',
        'Union',
        'Reducing Union',
        'Bulkhead Union',
        'Tube Elbow',
        'OD Cap',
        'OD Plug',
        'Hex Nipple'
      ]
    },
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  ngOnInit() {
    // Add Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      // Desktop version
      if (window.innerWidth >= 992) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }

      // Mobile version
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element_mobile'
      );
    };
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navDesktop = document.querySelector('.nav-desktop');
    if (navDesktop) {
      navDesktop.classList.toggle('active');
    }
  }

  toggleSubMenu(category: any, event: Event, subItem?: string) {
    event.preventDefault();
    event.stopPropagation();

    // Close the menu
    this.isMenuOpen = false;
    const navDesktop = document.querySelector('.nav-desktop');
    if (navDesktop) {
      navDesktop.classList.remove('active');
    }

    // Navigate to products page with query parameters
    this.router.navigate(['/products'], {
      queryParams: {
        category: category.name
      }
    });
  }

  navigateToCategory(category: any, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Close the menu
    this.isMenuOpen = false;
    const navDesktop = document.querySelector('.nav-desktop');
    if (navDesktop) {
      navDesktop.classList.remove('active');
    }

    // Navigate to the category
    this.router.navigate(['/products'], {
      queryParams: {
        category: category.name
      }
    });
  }

  showSubMenu(category: any) {
    this.productCategories.forEach(cat => cat.isActive = false);
    category.isActive = true;
  }

  isRouteActive(route: string): boolean {
    if (route === '/') {
      return this.currentRoute === '/';
    }
    return this.currentRoute.startsWith(route);
  }
}
