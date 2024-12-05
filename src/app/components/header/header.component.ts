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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  productCategories = [
    {
      name: 'VCO FITTINGS',
      isActive: false,
      subItems: [
        'Male Connector',
        'Female Connector',
        'Gland',
        'Male Elbow',
        'Union Elbow',
        'Union Tee',
        'Union Cross',
        'Male Run Tee',
        'Male Branch Tee',
        '"O" Ring Seat Connector',
        '"O" Ring Seat Male Connector',
        'Union',
        'Tube Socket'
      ]
    },
    {
      name: 'VCR FITTINGS',
      isActive: false,
      subItems: [
        'Nut',
        'Gasket',
        'Gland',
        'Union Tee',
        'Union Cross',
        'Male Connector',
        'Female Connector',
        'Union Elbow',
        'Male Elbow',
        'Bulkhead Union',
        'Equal Union'
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
    {
      name: 'BUT WELD END FITTINGS',
      isActive: false,
      subItems: [
        '45 Deg Elbow',
        '90 Deg Elbow',
        'Tee Equal',
        'Tee Reducing',
        'End Cap',
        'Barrel Nipple',
        'Pipe Nipple',
        'Swage Nipple',
        'U bend',
        'Long Stub End',
        'Short Stub End',
        'Lateral Tee',
        'Reducer Eccentric',
      ]
    },
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
        'SORF Flanges',
        'BLRF Flanges',
        'Ring Joint Flanges',
        'Paddle & Spacer',
        'Spectacles',
        'Long Weld Neck Flanges',
        'Threaded/screwed Flanges',
        'Lapped Joint Flanges',
        'Tongue & Groove Flanges',
        'Orifice Flanges',
        'Flange Olet',
        'Nipo Flanges',
        'Puddle Flanges',
        'WNRF Flanges',
      ]
    },
    {
      name: 'FLANGES STANDARDS',
      isActive: false,
      subItems: [
        'ANSI B16.5 Flanges',
        'ANSI B16.47 SERIES A Flanges',
        'ANSI B16.47 SERIES B Flanges',
        'PN Flanges',
        'JIS Standard Flange',
        'DIN Flanges',
        'EN 1092-1 Flanges',
        'API 605 Flanges',
        'AWWA C207 Flanges',
        'BS Flanges',
      ]
    },
  ];

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

  toggleSubMenu(category: any, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    // Reset all other categories
    this.productCategories.forEach(cat => {
      if (cat !== category) {
        cat.isActive = false;
      }
    });

    // Toggle current category
    category.isActive = !category.isActive;

    // Toggle active class on category link
    const categoryLink = (event.target as HTMLElement).closest('.category-link');
    if (categoryLink) {
      categoryLink.classList.toggle('active');
    }
  }

  showSubMenu(category: any) {
    this.productCategories.forEach(cat => cat.isActive = false);
    category.isActive = true;
  }
}
