import { Injectable } from '@angular/core';

export interface ProductDetail {
  id?: string;
  name: string;
  categoryName: string;
  subCategory: string[];
  mainImage: string;
  otherImages?: string[];
  description?: string;
  specifications?: { [key: string]: string };
  productCode?: string;
}

export interface ProductCategory {
  id?: string;
  name: string;
  subProducts: string[];
  isExpanded: boolean;
  selectedImage?: string;
  details?: ProductDetail[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productCategories: ProductCategory[] = [
    {
      id: 'valves',
      name: 'VALVES',
      isExpanded: false,
      subProducts: [
        'Globe Valve', 'Check Valve', 'Butterfly Valve', 'Gate Valve',
        'Ball Valve', 'Plug Valve', 'Pilot Operated Valve', 'Pilot Operated Check Valve',
        'Pilot Operated Gate Valve', 'Pilot Operated Ball Valve', 'Pilot Operated Plug Valve'
      ]
    },
    {
      id: 'ic-casting-fittings',
      name: 'I/C CASTING FITTINGS',
      isExpanded: true,
      subProducts: [
        '45 Elbow', '90 Elbow', 'Tee', 'Cross',
        'Elbow Reducing', 'Reducing Cross', 'Reducing Tee', 'Y Stainer 45',
        'Street Elbow 90', 'Street Elbow 45', 'Street TEE',
        'Coupling', 'Reduce Coupling','CAP', 'Bends'
      ]
    },
    // {
    //   id: 'but-weld-end-fittings',
    //   name: 'BUT WELD END FITTINGS',
    //   isExpanded: false,
    //   subProducts: [
    //     '45 Deg Elbow', '90 Deg Elbow', 'Tee Equal', 'Tee Reducing',
    //     'End Cap', 'Barrel Nipple', 'Pipe Nipple', 'Swage Nipple',
    //     'U bend', 'Long Stub End', 'Short Stub End', 'Lateral Tee',
    //     'Reducer Eccentric'
    //   ]
    // },
    {
      id: 'forged-fittings',
      name: 'FORGED FITTINGS',
      isExpanded: false,
      subProducts: [
        '45 Deg Elbow Fittings', '90 Deg Elbow Fittings', 'Union',
        'Barrel Nipple', 'Swage nipple', 'Bushing', 'Forged Tee',
        'Equal Tee Fittings', 'Reducing Tee Fittings', 'End Cap',
        'Cross', 'Plug', 'Coupling', 'Full Coupling', 'Half Coupling',
        'Reducing Coupling', 'Boss'
      ]
    },
    {
      id: 'flanges',
      name: 'FLANGES',
      isExpanded: false,
      subProducts: [
        'Slip On Flanges',
        'BLIND Flanges',
        'Weld Neck Flanges',
        'Threarded Flanges',
        'Olet Flanges',
        'Socket Weld Flanges',
        'Lap Joint Flanges'
      ]
    },
    {
      id: 'vco-fittings',
      name: 'VCO FITTINGS',
      isExpanded: true,
      subProducts: [
        'Male Connector', 'Female Connector', 'Gland', 'Male Elbow',
        'Union Elbow', 'Union Tee', 'Union Cross', 'Male Run Tee',
        'Male Branch Tee', '"O" Ring Seat Connector', '"O" Ring Seat Male Connector',
        'Union', 'Tube Socket'
      ]
    },
    {
      id: 'vcr-fittings',
      name: 'VCR FITTINGS',
      isExpanded: false,
      subProducts: [
        'Nut', 'Gasket', 'Gland', 'Union Tee', 'Union Cross',
        'Male Connector', 'Female Connector', 'Union Elbow',
        'Male Elbow', 'Bulkhead Union', 'Equal Union'
      ]
    },
    {
      id: 'tube-fittings',
      name: 'TUBE FITTINGS',
      isExpanded: false,
      subProducts: [
        'Male Connector', 'Female Connector', 'Adapter', 'Plug',
        'Union Tee', 'Run Tee', 'Female Tee', 'Union',
        'Reducing Union', 'Bulkhead Union', 'Tube Elbow',
        'OD Cap', 'OD Plug', 'Hex Nipple'
      ]
    },
  ];

  private productDetails: ProductDetail[] = [
    {
      name: '45 Elbow',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['45 Elbow'],
      productCode: 'ADAPTIX-IC-EL45',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/45 Elbow.png',
      otherImages: [
      ],
      description: 'High-precision 45-degree elbow fitting optimized for moderate flow direction changes in industrial and commercial casting systems. Features seamless construction with uniform wall thickness and precise 45-degree angle consistency. Engineered for minimal flow resistance and pressure drop in I/C applications.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: '90 Elbow',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['90 Elbow'],
      productCode: 'ADAPTIX-IC-EL90',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/90 Elbow.png',
      otherImages: [
      ],
      description: 'High-precision 90-degree elbow fitting designed for right-angle flow direction changes in industrial and commercial applications. Features seamless construction with uniform wall thickness and precise 90-degree angle consistency. Engineered for minimal flow resistance and pressure drop in I/C casting systems.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Tee',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Tee'],
      productCode: 'ADAPTIX-IC-T',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Tee.png',
      otherImages: [
      ],
      description: 'Premium I/C casting tee fitting designed for three-way flow distribution in industrial applications. Features balanced flow characteristics with uniform wall thickness across all three ports. Engineered for optimal flow distribution and minimal pressure loss at junction points.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Cross',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Cross'],
      productCode: 'ADAPTIX-IC-CR',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Cross.png',
      otherImages: [
      ],
      description: 'Industrial-grade four-way cross fitting for I/C casting applications requiring multi-directional flow. Features symmetrical design with reinforced junction point for enhanced durability. Engineered for balanced flow distribution across all four ports with minimal turbulence.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Elbow Reducing',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Elbow Reducing'],
      productCode: 'ADAPTIX-IC-ELR',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Elbow Reducing.png',
      otherImages: [
      ],
      description: 'Specialized reducing elbow designed for I/C casting systems requiring both flow direction change and size reduction. Features precision-engineered transition zones for smooth flow reduction while maintaining optimal flow characteristics. Ideal for space-constrained installations requiring compact bends with size adaptation.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Reducing Cross',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Reducing Cross'],
      productCode: 'ADAPTIX-IC-RCR',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Reducing Cross.png',
      otherImages: [
      ],
      description: 'Advanced four-way reducing cross fitting engineered for multi-directional flow with size adaptation capabilities. Features reinforced junction points and precision-machined reducing sections for optimal flow distribution. Ideal for complex piping systems requiring flow division with size transitions.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Reducing Tee',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Reducing Tee'],
      productCode: 'ADAPTIX-IC-RT',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Reducing Tee.png',
      otherImages: [
      ],
      description: 'Specialized reducing tee fitting designed for three-way flow distribution with integrated size reduction. Features streamlined internal geometry for smooth flow transition and minimal pressure loss. Engineered for applications requiring branch line size adaptation.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Y Stainer 45',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Y Stainer 45'],
      productCode: 'ADAPTIX-IC-YS45',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Y Stainer 45.png',
      otherImages: [
      ],
      description: 'Industrial-grade Y-pattern strainer with 45-degree configuration for efficient particle removal. Features replaceable straining element and optimized flow path for minimal pressure drop. Designed for superior filtration in process fluid applications.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Street Elbow 90',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Street Elbow 90'],
      productCode: 'ADAPTIX-IC-SEL90',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Street Elbow 90.png',
      otherImages: [
      ],
      description: 'Heavy-duty street-pattern 90-degree elbow combining male and female ends for compact installation. Features reinforced wall thickness at bend radius and precision-machined threads. Ideal for space-constrained piping systems requiring right-angle flow direction changes.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Street Elbow 45',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Street Elbow 45'],
      productCode: 'ADAPTIX-IC-SEL45',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Street Elbow 45.png',
      otherImages: [
      ],
      description: 'Precision-engineered 45-degree street elbow with male and female end configuration. Features optimized flow path geometry and enhanced wall thickness for durability. Perfect for installations requiring moderate flow direction changes in limited spaces.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Street TEE',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Street TEE'],
      productCode: 'ADAPTIX-IC-ST',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Street TEE.png',
      otherImages: [
      ],
      description: 'Advanced street-pattern tee fitting featuring male and female end combinations for versatile installation. Incorporates reinforced branch connection and balanced flow distribution design. Engineered for three-way flow applications in space-restricted environments.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Coupling',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Coupling'],
      productCode: 'ADAPTIX-IC-CP',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Coupling.png',
      otherImages: [
      ],
      description: 'Premium straight coupling designed for reliable pipe-to-pipe connections. Features precision-machined threads and uniform wall thickness for maximum pressure retention. Engineered with optimal length-to-diameter ratio for secure engagement.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'Reduce Coupling',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Reduce Coupling'],
      productCode: 'ADAPTIX-IC-RC',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Reduce Coupling.png',
      otherImages: [
      ],
      description: 'High-performance reducing coupling engineered for connecting pipes of different sizes. Features smooth internal transition zone and enhanced thread engagement length. Designed for applications requiring secure size adaptation with minimal flow disruption.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'CAP',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['CAP'],
      productCode: 'ADAPTIX-IC-CP',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/CAP.png',
      otherImages: [
      ],
      description: 'Heavy-duty end cap designed for positive line termination in industrial applications. Features reinforced dome structure and precision-machined threads for maximum pressure containment. Engineered with corrosion-resistant materials for extended service life.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    {
      name: 'BENDS',
      categoryName: 'I/C CASTING FITTINGS',
      subCategory: ['Bends'],
      productCode: 'ADAPTIX-IC-BND',
      mainImage: 'assets/product/IC_CASTING_FITTINGS/Bends.png',
      otherImages: [
      ],
      description: 'Precision-engineered pipe bends featuring controlled wall thickness and optimized bend radius. Manufactured using advanced forming technology for consistent flow characteristics. Designed for smooth flow transition in process piping systems.',
      specifications: {
          'Size Range': '1/8" to 6"',
          'Class': 'ANSI 150 #',
          'End Connections': 'NPT / BSP',
          'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL'
      }
    },
    // {
    //   name: '45 Deg Elbow',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['45 Deg Elbow'],
    //   productCode: 'ADAPTIX-BW-45E',
    //   mainImage: 'assets/product/BUT_WELD_END_FITTINGS/45 Elbow.png',
    //   otherImages: [
    //   ],
    //   description: 'High-precision 45-degree elbow fitting designed for optimal flow direction change. Features seamless construction with uniform wall thickness and precise angle consistency. Engineered for minimal flow resistance and pressure drop.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: '90 Deg Elbow',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['90 Deg Elbow'],
    //     productCode: 'ADAPTIX-BW-90E',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/90 Elbow.png',
    //   otherImages: [
    //   ],
    //   description: 'Premium 90-degree elbow fitting engineered for right-angle flow direction changes. Features reinforced construction for high-pressure applications with perfect perpendicular alignment. Optimized internal radius for smooth flow characteristics.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Tee Equal',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Tee Equal'],
    //     productCode: 'ADAPTIX-BW-ET',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Equal tee.png',
    //   otherImages: [
    //   ],
    //   description: 'Symmetrical equal tee fitting designed for three-way flow distribution. Features balanced flow characteristics with uniform wall thickness. Precision-engineered for equal pressure distribution across all ports.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Tee Reducing',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Tee Reducing'],
    //     productCode: 'ADAPTIX-BW-RT',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Reducing tee.png',
    //   otherImages: [
    //   ],
    //   description: 'Advanced reducing tee fitting designed for multi-diameter flow applications. Features smooth transition zones for optimal flow characteristics. Engineered for balanced pressure distribution despite size differences.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'End Cap',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['End Cap'],
    //     productCode: 'ADAPTIX-BW-C',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Cap.png',
    //   otherImages: [
    //   ],
    //   description: 'Heavy-duty end cap designed for positive line termination. Features reinforced construction with precision-machined sealing surface. Engineered for maximum pressure containment and zero leakage.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Barrel Nipple',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Barrel Nipple'],
    //     productCode: 'ADAPTIX-BW-BN',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Barrel Nipple.png',
    //   otherImages: [
    //   ],
    //   description: 'Precision-engineered barrel nipple featuring uniform wall thickness throughout. Designed for optimal flow characteristics with minimal pressure drop. Includes precision-machined ends for perfect alignment.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Pipe Nipple',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Pipe Nipple'],
    //     productCode: 'ADAPTIX-BW-PN',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Pipe Nipple.png',
    //   otherImages: [
    //   ],
    //   description: 'High-quality pipe nipple designed for straight-line connections. Features precise length control and perfectly perpendicular end faces. Manufactured with strict tolerances for maximum reliability.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Swage Nipple',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Swage Nipple'],
    //     productCode: 'ADAPTIX-BW-SN',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Swage Nipple.png',
    //   otherImages: [
    //   ],
    //   description: 'Advanced swage nipple featuring smooth diameter transition. Engineered for gradual flow area changes with minimal turbulence. Includes precision-machined ends for perfect alignment and sealing.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'U bend',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['U bend'],
    //     productCode: 'ADAPTIX-BW-UB',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/U Bend.png',
    //   otherImages: [
    //   ],
    //   description: 'Precision-formed U-bend designed for 180-degree flow reversal. Features optimized bend radius for minimal flow restriction. Manufactured with advanced forming technology for perfect symmetry.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Long Stub End',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Long Stub End'],
    //     productCode: 'ADAPTIX-BW-LS',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Stubend.png',
    //   otherImages: [
    //   ],
    //   description: 'Extended length stub end designed for maximum engagement. Features reinforced flange face with precision-machined sealing surface. Includes extended barrel for optimal weld joint positioning.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Short Stub End',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Short Stub End'],
    //     productCode: 'ADAPTIX-BW-SS',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Short Stub End.png',
    //   otherImages: [
    //   ],
    //   description: 'Compact stub end designed for space-constrained applications. Features reinforced flange face with precision-machined sealing surface. Optimized for minimal installation length requirements.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Lateral Tee',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Lateral Tee'],
    //     productCode: 'ADAPTIX-BW-LT',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Lateral Tee.png',
    //   otherImages: [
    //   ],
    //   description: 'Specialized lateral tee designed for angled branch connections. Features optimized flow geometry for reduced pressure drop. Engineered for balanced flow distribution with minimal turbulence.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    // {
    //   name: 'Reducer Eccentric',
    //   categoryName: 'BUT WELD END FITTINGS',
    //   subCategory: ['Reducer Eccentric'],
    //     productCode: 'ADAPTIX-BW-ET',
    //     mainImage: 'assets/product/BUT_WELD_END_FITTINGS/Reducer.png',
    //   otherImages: [
    //       'assets/product/Gasket_2.jpeg',
    //       'assets/product/Gasket_3.jpeg',
    //       'assets/product/Gasket_4.jpeg'
    //   ],
    //   description: 'Advanced eccentric reducer designed for offset diameter transitions. Features smooth internal profile for optimal flow characteristics. Engineered for minimum turbulence and pressure drop across the reduction.',
    //   specifications: {
    //     'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
    //     'End Connections': 'PL',
    //     'Size': '1/2" NB to 24" NB',
    //   }
    // },
    {
      name: '45 Deg Elbow Fittings',
      categoryName: 'FORGED FITTINGS',
      subCategory: ['45 Deg Elbow Fittings'],
        productCode: 'ADAPTIX-FF-45E',
        mainImage: 'assets/product/FORGED FITTINGS/45 elbow.png',
      otherImages: [
      ],
      description: 'High-quality forged 45-degree elbow fitting manufactured for optimal flow direction change. Features precision-engineered angles and smooth internal surfaces for minimal flow restriction. Ideal for applications requiring 45-degree directional changes in high-pressure systems.',
      specifications: {
        'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
        'End Connections': 'PL',
        'Size': '1/2" NB to 24" NB',
      }
  },
  {
      name: '90 Deg Elbow Fittings',
      categoryName: 'FORGED FITTINGS',
      subCategory: ['90 Deg Elbow Fittings'],
        productCode: 'ADAPTIX-FF-90E',
        mainImage: 'assets/product/FORGED FITTINGS/90 elbow.png',
      otherImages: [
      ],
      description: 'Heavy-duty forged 90-degree elbow designed for right-angle flow direction changes. Manufactured with reinforced walls for maximum pressure resistance and durability. Perfect for tight space installations requiring 90-degree turns.',
      specifications: {
        'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
        'End Connections': 'PL',
        'Size': '1/2" NB to 24" NB',
      }
  },  
  {
      name: 'Union',
      categoryName: 'FORGED FITTINGS',
      subCategory: ['Union'],
        productCode: 'ADAPTIX-FF-U',
        mainImage: 'assets/product/FORGED FITTINGS/union.png',
      otherImages: [
      ],
      description: 'Premium forged union fitting providing secure, leak-tight pipe connections. Features precision-machined threads and sealing surfaces for reliable joining of pipe sections. Designed for easy assembly and disassembly while maintaining system integrity.',
      specifications: {
        'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
        'End Connections': 'PL',
        'Size': '1/2" NB to 24" NB',
      }
  },
  {
    name: 'Barrel Nipple',
    categoryName: 'FORGED FITTINGS', 
    subCategory: ['Barrel Nipple'],
    productCode: 'ADAPTIX-FF-BN',
    mainImage: 'assets/product/FORGED FITTINGS/Barrel Nipple.png',
    otherImages: [
    ],
    description: 'Heavy-duty forged barrel nipple featuring seamless construction and precise threading. Manufactured from high-grade materials for superior pressure and temperature resistance. Ideal for connecting pipes in high-pressure applications.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
  },
  {
    name: 'Swage Nipple',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Swage Nipple'], 
    productCode: 'ADAPTIX-FF-SN',
    mainImage: 'assets/product/FORGED FITTINGS/Swage Nipple.png',
    otherImages: [
    ],
    description: 'Precision-engineered swage nipple designed for size reduction in piping systems. Features concentric or eccentric reduction with high-quality threading and superior flow characteristics. Ideal for high-pressure industrial applications.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
  },
  {
    name: 'Bushing',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Bushing'],
    productCode: 'ADAPTIX-FF-B',
    mainImage: 'assets/product/FORGED FITTINGS/Bushing.png',
    otherImages: [
    ],
    description: 'High-quality forged bushing fitting manufactured from premium grade materials. Features precision-machined threads and excellent pressure handling capabilities. Ideal for size reduction applications in high-pressure piping systems.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Forged Tee',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Forged Tee'],
    productCode: 'ADAPTIX-FF-FT',
    mainImage: 'assets/product/FORGED FITTINGS/Forged Tee.png',
    otherImages: [
    ],
    description: 'Heavy-duty forged tee fitting designed for high-pressure applications. Features three-way flow distribution with reinforced wall thickness. Manufactured using advanced forging techniques for superior strength and reliability.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
  },
  {
    name: 'Equal Tee Fittings',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Equal Tee Fittings'],
    productCode: 'ADAPTIX-FF-ET',
    mainImage: 'assets/product/FORGED FITTINGS/Equal Tee Fittings.png',
    otherImages: [
    ],
    description: 'High-pressure equal tee fitting designed for uniform flow distribution. Features precision-forged construction with equal-sized outlets. Ideal for applications requiring three-way flow division or combination.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Reducing Tee Fittings',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Reducing Tee Fittings'],
    productCode: 'ADAPTIX-FF-RT',
    mainImage: 'assets/product/FORGED FITTINGS/Reducing Tee.png',
    otherImages: [
    ],
    description: 'Heavy-duty reducing tee fitting engineered for applications requiring different outlet sizes. Provides optimal flow characteristics with reduced branch connection.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'End Cap',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['End Cap'],
    productCode: 'ADAPTIX-FF-EC',
    mainImage: 'assets/product/FORGED FITTINGS/cap.png',
    otherImages: [
    ],
    description: 'Robust forged end cap designed for reliable line termination. Features thick-wall construction for maximum pressure retention and safety.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Cross',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Cross'],
    productCode: 'ADAPTIX-FF-C',
    mainImage: 'assets/product/FORGED FITTINGS/Cross.png',
    otherImages: [
    ],
    description: 'Four-way cross fitting manufactured for multi-directional flow applications. Ensures balanced pressure distribution across all outlets.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Plug',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Plug'],
    productCode: 'ADAPTIX-FF-P',
    mainImage: 'assets/product/FORGED FITTINGS/Plug.png',
    otherImages: [
    ],
    description: 'Solid forged plug designed for secure system closure. Features precision threading and hexagonal head for reliable installation.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Coupling'],
    productCode: 'ADAPTIX-FF-C',
    mainImage: 'assets/product/FORGED FITTINGS/Coupling.png',
    otherImages: [
    ],
    description: 'Standard coupling fitting engineered for straight pipe connections. Provides reliable joining solution with maximum pressure integrity.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Full Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Full Coupling'],
    productCode: 'ADAPTIX-FF-FC',
    mainImage: 'assets/product/FORGED FITTINGS/Coupling.png',
    otherImages: [
    ],
    description: 'Full-length coupling designed for maximum engagement length. Ensures superior connection strength and leak-proof performance.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Half Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Half Coupling'],
    productCode: 'ADAPTIX-FF-HC',
    mainImage: 'assets/product/FORGED FITTINGS/Coupling.png',
    otherImages: [
    ],
    description: 'Compact half-length coupling for space-constrained applications. Provides reliable connection in reduced installation spaces.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Reducing Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Reducing Coupling'],
    productCode: 'ADAPTIX-FF-RC',
    mainImage: 'assets/product/FORGED FITTINGS/reduce coupling.png',
    otherImages: [
    ],
    description: 'Precision-engineered reducing coupling for connecting pipes of different sizes. Features smooth internal transition for optimal flow characteristics.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
},
{
    name: 'Boss',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Boss'],
    productCode: 'ADAPTIX-FF-B',
    mainImage: 'assets/product/FORGED FITTINGS/Boss.png',
    otherImages: [
    ],
    description: 'Heavy-duty boss fitting designed for branch connections. Provides reinforced mounting point for high-pressure applications.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'End Connections': 'PL',
      'Size': '1/2" NB to 24" NB',
    }
  },
  {
    name: 'Slip On Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Slip On Flanges'],
    productCode: 'ADAPTIX-FL-SO',
    mainImage: 'assets/product/FLANGE/3.png',
    otherImages: [
    ],
    description: 'High-quality Slip-On Raised Face (SORF) flanges manufactured to exact specifications. Features precision-machined raised face for optimal sealing and uniform load distribution. Engineered for easy installation and reliable performance in demanding industrial applications.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'Size': '1/2" NB to 24" NB',
      'End Connections': 'PL',
      'Pressure Rating': 'Class 150# to 2500#'
    }
  },
  
  {
    name: 'BLIND Flanges',
    categoryName: 'FLANGES', 
    subCategory: ['BLIND Flanges'],
    productCode: 'ADAPTIX-FL-BLN',
    mainImage: 'assets/product/FLANGE/Blind Flanges.png',
    otherImages: [
    ],
    description: 'Premium Blind Raised Face (BLRF) flanges designed for pipe system termination. Features robust construction with raised face design for enhanced sealing capability. Manufactured to strict tolerances for reliable closure in high-pressure applications.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'Size': '1/2" NB to 24" NB',
      'End Connections': 'Blind',
      'Pressure Rating': 'Class 150# to 2500#'
    }
  },
  {
    name: 'Weld Neck Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Weld Neck Flanges'],
    productCode: 'ADAPTIX-FL-WN',
    mainImage: 'assets/product/FLANGE/8.png',
    otherImages: [
    ],
    description: 'Extended weld neck flanges designed for superior strength and alignment in high-stress applications. Features elongated neck for enhanced stress distribution and improved weld joint integrity. Engineered for critical piping systems requiring maximum reliability.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'Size': '1/2" NB to 24" NB',
      'End Connections': 'BW',
      'Pressure Rating': 'Class 150# to 2500#'
    }
  },
  {
    name: 'Threarded Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Threarded Flanges'],
    productCode: 'ADAPTIX-FL-T',
    mainImage: 'assets/product/FLANGE/Thread.png',
    otherImages: [
    ],
    description: 'High-quality threaded flanges designed for superior pipe connections. Features precision-cut threads for optimal sealing and durability. Engineered for reliable performance in high-pressure applications with excellent corrosion resistance.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'Size': '1/2" NB to 24" NB',
      'End Connections': 'NPT / BSP / BSPT / UNF / Metric',
      'Pressure Rating': 'Class 150# to 2500#'
    }
  },
  {
    name: 'Lap Joint Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Lap Joint Flanges'],
    productCode: 'ADAPTIX-FL-LJ',
    mainImage: 'assets/product/FLANGE/Lap Joint.png',
    otherImages: [
    ],
    description: 'Premium lapped joint flanges featuring precision-machined surfaces for exceptional sealing capabilities. Designed for applications requiring frequent assembly and disassembly, with enhanced joint reliability and maintenance accessibility.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'Size': '1/2" NB to 24" NB',
      'Pressure Rating': 'Class 150# to 2500#'
    }
  },
  {
    name: 'Olet Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Olet Flanges'],
    productCode: 'ADAPTIX-FL-OL',
    mainImage: 'assets/product/FLANGE/Tongue & Groove.png',
    otherImages: [
    ],
    description: 'Specialized tongue and groove flanges engineered for high-pressure applications. Features precise matching surfaces for superior sealing and alignment. Ideal for services requiring enhanced gasket retention and leak prevention.',
    specifications: {
      'M.O.C': 'Stainless Steel / Carbon Steel / Alloy Steel / Nickel Alloy',
      'Size': '1/2" NB to 24" NB',
      'Pressure Rating': 'Class 150# to 2500#'
    }
  },
  
  {
    name: 'Male Connector',
    categoryName: 'VCO FITTINGS',
    subCategory: ['Male Connector'],
    productCode: 'ADAPTIX-VCO-MC',
    mainImage: 'assets/product/vco/MALE CONNECTOR.png',
    otherImages: [
      'src/assets/product/vco/MALE CONNECTOR.png'
    ],
    description: 'Premium VCO male connector featuring precision-machined threads and sealing surface, designed for high-purity fluid handling systems. Provides reliable metal-to-metal seal with excellent resistance to vibration and thermal cycling.',
    specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2"',
        'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
        'Pressure Rating':  'Upto 10000 psi'
    }
  },
  {
      name: 'Female Connector',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Female Connector'],
      productCode: 'ADAPTIX-VCO-FC',
      mainImage: 'assets/product/vco/FEMALE CONNECTOR.png',
      otherImages: [
      ],
      description: 'High-precision VCO female connector with expertly machined gland pocket, engineered for leak-tight connections in critical fluid systems. Features smooth bore design for optimal flow characteristics.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2"',
        'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
        'Pressure Rating':  'Upto 10000 psi'
      }
  },
  {
      name: 'Gland',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Gland'],
      productCode: 'ADAPTIX-VCO-G',
      mainImage: 'assets/product/vco/GLAND.png',
      otherImages: [
      ],
      description: 'Precision-engineered VCO gland designed for secure mechanical grip and reliable sealing. Features optimized geometry for proper compression and seal engagement, ensuring leak-free performance in demanding applications.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating':  'Upto 10000 psi'
      }
  },
  {
    name: 'Male Elbow',
    categoryName: 'VCO FITTINGS',
    subCategory: ['Male Elbow'],
    productCode: 'ADAPTIX-VCO-ME',
    mainImage: 'assets/product/vco/MALE ELBOW.png',
    otherImages: [
    ],
    description: 'Precision-crafted 90-degree male elbow fitting with VCO end connection, designed for space-efficient directional changes in high-purity fluid systems. Features smooth internal bore for optimal flow characteristics.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating':  'Upto 10000 psi'
      }
  },
  {
      name: 'Union Elbow',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Union Elbow'],
      productCode: 'ADAPTIX-VCO-UE',
      mainImage: 'assets/product/vco/UNION ELBOW.png',
      otherImages: [
      ],  
      description: 'High-performance VCO union elbow providing 90-degree flow direction change with the convenience of union-style assembly. Ideal for systems requiring frequent maintenance or reconfiguration.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating':  'Upto 10000 psi'
      }
  },
  {
      name: 'Union Tee',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Union Tee'],
      productCode: 'ADAPTIX-VCO-UT',
      mainImage: 'assets/product/vco/UNION TEE.png',
      otherImages: [
      ],
      description: 'High-performance VCO union tee fitting designed for three-way flow distribution in high-purity systems. Features precision-machined body with uniform flow paths and metal-to-metal sealing surfaces for consistent performance. Ideal for applications requiring frequent system modifications or maintenance.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2"',
        'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
        'Pressure Rating':  'Upto 10000 psi'
      }
  },
  {
      name: 'Union Cross',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Union Cross'],   
      productCode: 'ADAPTIX-VCO-UC',
      mainImage: 'assets/product/vco/UNION CROSS.png',
      otherImages: [
      ],
      description: 'Versatile VCO union cross fitting providing four-way flow distribution with balanced flow characteristics. Engineered for multi-directional fluid handling in complex systems. Features precision-machined body and standardized end connections for maximum system flexibility.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating':  'Upto 10000 psi'
      }
  },
  {
      name: 'Male Run Tee',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Male Run Tee'],
      productCode: 'ADAPTIX-VCO-MRT',
      mainImage: 'assets/product/vco/BULKHEAD MALE RUN TEE.png',
      otherImages: [
      ],  
      description: 'Specialized VCO male run tee featuring straight-through flow path with branch connection. Designed for applications requiring minimal flow restriction in the main run with a secondary branch connection. Precision-machined for optimal flow characteristics and reliable sealing.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating':  'Upto 10000 psi'
      }
  },
  {
      name: 'Male Branch Tee',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Male Branch Tee'],
      productCode: 'ADAPTIX-VCO-MBT',
      mainImage: 'assets/product/vco/BULKHEAD MALE BRANCH TEE.png',
      otherImages: [
      ],
      description: 'Advanced VCO male branch tee designed with optimized flow geometry for branch-off applications. Features male thread branch connection with female run connections, ideal for instrument connections and sampling points. Ensures minimal pressure drop and uniform flow distribution.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2"',
        'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
        'Pressure Rating': 'Upto 10000 psi'
      }
  },
  {
      name: '"O" Ring Seat Connector',
      categoryName: 'VCO FITTINGS',
      subCategory: ['"O" Ring Seat Connector'],
      productCode: 'ADAPTIX-VCO-OC',
      mainImage: 'assets/product/vco/O RING SEAT CONNNECTOR.png',
      otherImages: [
      ],
      description: 'Precision-engineered VCO O-ring seat connector providing reliable sealing in high-purity applications. Features specially designed O-ring groove geometry for optimal compression and seal integrity. Ideal for applications requiring frequent assembly/disassembly with maintained sealing performance.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2"',
        'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
        'Pressure Rating': 'Upto 10000 psi'
      }
  },
  {
      name: '"O" Ring Seat Male Connector',
      categoryName: 'VCO FITTINGS',
      subCategory: ['"O" Ring Seat Male Connector'],
      productCode: 'ADAPTIX-VCO-ORME',
      mainImage: 'assets/product/vco/O RING SEAT MALE ELBOW.png',
      otherImages: [
      ],
      description: 'High-performance VCO O-ring seat male connector combining thread sealing with O-ring technology. Features precision-machined male thread end and optimized O-ring groove design. Ensures reliable sealing in dynamic temperature and pressure conditions.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating': 'Upto 10000 psi'
      }
  },
  {
      name: 'Union',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Union'],
      productCode: 'ADAPTIX-VCO-U',
      mainImage: 'assets/product/vco/UNION CROSS.png',
      otherImages: [
      ],
      description: 'Premium VCO union connector designed for joining tube sections with maximum reliability. Features symmetrical design with precision-machined sealing surfaces and robust body construction. Ideal for applications requiring frequent maintenance access or system modifications.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating': 'Upto 10000 psi'
      }
  },
  {
      name: 'Tube Socket',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Tube Socket'],
      productCode: 'ADAPTIX-VCO-TS',
      mainImage: 'assets/product/vco/TUBE SOCKET.png',
      otherImages: [
      ],
      description: 'Precision-engineered VCO tube socket providing secure tube termination and connection point. Features optimized bore design for smooth flow transition and reliable tube grip. Manufactured with exact tolerances for consistent assembly and sealing performance.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2"',
        'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
        'Pressure Rating': 'Upto 10000 psi'
      }
  },
  {
      name: 'Nut',
      categoryName: 'VCR FITTINGS',
      subCategory: ['Nut'],
      productCode: 'ADAPTIX-VCR-N',
      mainImage: 'assets/product/vcr/NUT.png',
      otherImages: [
      ],
      description: 'Precision-engineered VCR nut designed for secure and leak-tight connections in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2"',
        'End Connections': 'Tube OD',
        'Pressure Rating': 'Upto 10000 psi'
      }
  },
  {
      name: 'Gasket',
      categoryName: 'VCR FITTINGS',
      subCategory: ['Gasket'],
      productCode: 'ADAPTIX-VCR-GK',
      mainImage: 'assets/product/vcr/GASKET.png',
      otherImages: [
      ],
      description: 'Precision-engineered VCR nut designed for secure and leak-tight connections in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
      specifications: {
        'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
        'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
        'End Connections': 'Tube OD',
        'Pressure Rating': 'Upto 10000 psi'
      }
  },
  {
    name: 'Gland',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Gland'],
    productCode: 'ADAPTIX-VCR-GL',
    mainImage: 'assets/product/vcr/GLAND.png',
    otherImages: [
    ],
    description: 'High-precision VCR gland engineered for critical fluid handling applications. Features proprietary surface finishing technology and optimized geometry for maximum sealing reliability. Designed with advanced anti-rotation features and precise dimensional control for consistent performance in ultra-high purity systems.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2"',
      'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Union Tee',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Union Tee'],
      productCode: 'ADAPTIX-VCR-UT',
      mainImage: 'assets/product/vcr/UNION TEE.png',
    otherImages: [
    ],
    description: 'Premium VCR union tee featuring advanced flow optimization technology. Engineered with computational fluid dynamics-designed internal geometry for minimal pressure drop and uniform flow distribution. Ideal for high-purity gas distribution systems requiring precise flow control and contamination-free operation.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
      'End Connections': 'Tube OD',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Union Cross',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Union Cross'],
      productCode: 'ADAPTIX-VCR-UC',
      mainImage: 'assets/product/vcr/UNION CROSS.png',
    otherImages: [
    ],
    description: 'Advanced VCR union cross incorporating symmetrical flow path design for multi-directional fluid distribution. Features precision-machined internal passages with optimized flow geometry for balanced distribution and minimal turbulence. Engineered for high-purity semiconductor and analytical instrumentation applications.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
      'End Connections': 'Tube OD',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Male Connector',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Male Connector'],
      productCode: 'ADAPTIX-VCR-MC',
      mainImage: 'assets/product/vcr/MALE CONNECTOR.png',
    otherImages: [
    ],
    description: 'Premium grade VCR male connector engineered for ultra-high purity applications. Features our proprietary surface finishing technology ensuring class-leading seal integrity and minimal particle generation. The innovative gland design provides exceptional radial alignment and prevents galling during repeated assembly cycles. Ideal for semiconductor, pharmaceutical, and critical gas delivery systems.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2"',
      'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },  
  {
    name: 'Female Connector',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Female Connector'],
      productCode: 'ADAPTIX-VCR-FC',
      mainImage: 'assets/product/vcr/FEMALE CONNECTOR.png',
    otherImages: [
    ],
    description: 'State-of-the-art VCR female connector featuring precision-machined sealing surfaces and our exclusive geometrical optimization for superior connector engagement. Enhanced thread profile ensures consistent sealing force distribution and prevents cold welding. Ideal for ultra-high purity gas systems, analytical instrumentation, and critical process applications.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2"',
      'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Union Elbow',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Union Elbow'],
      productCode: 'ADAPTIX-VCR-UE',
      mainImage: 'assets/product/vcr/UNION ELBOW.png',
    otherImages: [
    ],
    description: 'Advanced 90° VCR union elbow incorporating our innovative flow-optimized geometry for minimal pressure drop and turbulence. Precision-machined from high-purity bar stock with controlled sulfur content for enhanced weldability. Features our proprietary internal polishing process ensuring exceptional surface smoothness and corrosion resistance.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2"',
      'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Male Elbow',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Male Elbow'],
      productCode: 'ADAPTIX-VCR-ME',
      mainImage: 'assets/product/vcr/MALE ELBOW.png',
    otherImages: [
    ],
    description: 'High-performance VCR male elbow featuring our patented flow-optimization technology. Engineered with computational fluid dynamics analysis to minimize dead space and ensure uniform flow distribution. The precision-machined sealing surface incorporates our advanced geometry for enhanced gasket retention and leak-tight connections.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2"',
      'End Connections': 'NPT / BSP / BSPT / UNF / METRIC / BW / SW',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Bulkhead Union',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Bulkhead Union'],
      productCode: 'ADAPTIX-VCR-BU',
      mainImage: 'assets/product/vcr/BULKHEAD UNION.png',
    otherImages: [
    ],
    description: 'Premium bulkhead union featuring our innovative panel-mount design for superior stability and alignment. Engineered with dual-sided sealing technology ensuring leak-tight connections on both faces. Enhanced thread profile and proprietary surface treatment provide exceptional resistance to vibration and thermal cycling.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
      'End Connections': 'Tube OD',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Equal Union',
    categoryName: 'VCR FITTINGS',
    subCategory: ['Equal Union'],
      productCode: 'ADAPTIX-VCR-EU',
      mainImage: 'assets/product/vcr/EQUAL UNION.png',
    otherImages: [
    ],
    description: 'Ultra-high purity VCR equal union featuring our symmetrical flow path design for optimal fluid dynamics. Incorporates dual-sided precision-machined sealing surfaces with our proprietary surface enhancement technology. Engineering-optimized hex flats provide superior wrench engagement and torque transfer during assembly.',
    specifications: {
      'M.O.C': 'CS / AS / SS / DSS / SDSS / SASS / MONEL / HASTELLOY / INCONEL/ TITANIUM',
      'Size': '1/8" to 2" OD & 3mm to 50mm OD (Suitable to Tube Conn.)',
      'End Connections': 'Tube OD',
      'Pressure Rating': 'Upto 10000 psi'
    }
  },
  {
    name: 'Male Connector',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Male Connector'],
    productCode: 'ADAPTIX-TF-MC',
    mainImage: 'assets/product/TUBE FITTING/1.png',
    otherImages: [
    ],
    description: 'Premium male connector fitting designed for high-pressure fluid systems. Features precision-machined threads and optimized sealing geometry for reliable connections. Engineered for maximum flow efficiency and leak-tight performance.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Female Connector',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Female Connector'],
    productCode: 'ADAPTIX-TF-FC',
    mainImage: 'assets/product/TUBE FITTING/2.png',
    otherImages: [
    ],
    description: 'High-performance female connector with precision-engineered threading and enhanced sealing surface. Designed for optimal flow characteristics and superior leak resistance in demanding applications.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Adapter',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Adapter'],
    productCode: 'ADAPTIX-TF-A',
    mainImage: 'assets/product/TUBE FITTING/3.png',
    otherImages: [
    ],
    description: 'Versatile tube fitting adapter engineered for seamless integration between different connection types. Features precision-machined surfaces and optimized flow path design for maximum system efficiency.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Plug',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Plug'],
    productCode: 'ADAPTIX-TF-P',
    mainImage: 'assets/product/TUBE FITTING/4.png',
    otherImages: [
    ],
    description: 'Premium quality tube fitting plug designed for reliable sealing and system isolation. Features precision-machined threads and sealing surfaces for maximum leak-tight performance. Manufactured from high-grade materials for exceptional durability and corrosion resistance.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Union Tee',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Union Tee'],
    productCode: 'ADAPTIX-TF-UT',
    mainImage: 'assets/product/TUBE FITTING/7.png',
    otherImages: [
    ],
    description: 'High-performance union tee fitting enabling three-way flow connections with superior sealing capability. Engineered for optimal flow distribution and minimal pressure drop. Features precision-machined surfaces and robust construction for reliable long-term operation.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Run Tee',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Run Tee'],
    productCode: 'ADAPTIX-TF-RT',
    mainImage: 'assets/product/TUBE FITTING/8.png',
    otherImages: [
    ],
    description: 'Advanced design run tee fitting for efficient fluid distribution in straight-through applications. Optimized flow path reduces turbulence and pressure loss. Manufactured with precision-machined sealing surfaces for maximum reliability.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Female Tee',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Female Tee'],
    productCode: 'ADAPTIX-TF-FT',
    mainImage: 'assets/product/TUBE FITTING/9.png',
    otherImages: [
    ],
    description: 'Premium female tee fitting featuring three female thread connections for versatile system integration. Engineered for optimal flow characteristics and robust sealing performance. Precision-machined threads ensure reliable and leak-free connections.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Union',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Union'],
    productCode: 'ADAPTIX-TF-U',
    mainImage: 'assets/product/TUBE FITTING/11.png',
    otherImages: [
    ],
    description: 'High-quality tube union designed for connecting same-size tubing with maximum reliability. Features precision-machined sealing surfaces and optimized thread design for secure connections. Built for long-term performance in demanding applications.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Reducing Union',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Reducing Union'],
    productCode: 'ADAPTIX-TF-RU',
    mainImage: 'assets/product/TUBE FITTING/12.png',
    otherImages: [
    ],
    description: 'Precision-engineered reducing union for connecting tubes of different sizes. Features smooth transitional bore design to minimize turbulence and pressure drop. Manufactured with high-grade materials for superior durability and sealing performance.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Bulkhead Union',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Bulkhead Union'],
    productCode: 'ADAPTIX-TF-BU',
    mainImage: 'assets/product/TUBE FITTING/13.png',
    otherImages: [
    ],
    description: 'Heavy-duty bulkhead union designed for secure panel-mount installations. Features reinforced construction and precision-machined threads for reliable sealing. Includes integrated mounting features for easy installation and maintenance.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Tube Elbow',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Tube Elbow'],
    productCode: 'ADAPTIX-TF-TE',
    mainImage: 'assets/product/TUBE FITTING/Tube Elbow.png',
    otherImages: [
    ],
    description: 'High-performance 90-degree tube elbow for precise directional flow control. Engineered with optimized bend radius for minimum flow restriction. Features precision-machined sealing surfaces for maximum reliability and leak-free operation.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'OD Cap',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['OD Cap'],
    productCode: 'ADAPTIX-TF-OC',
    mainImage: 'assets/product/TUBE FITTING/OD Cap.png',
    otherImages: [
    ],
    description: 'Premium quality OD cap designed for reliable tube end sealing. Features precision-machined internal surfaces for maximum sealing effectiveness. Constructed from durable materials for long-term performance and system protection.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'OD Plug',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['OD Plug'],
    productCode: 'ADAPTIX-TF-OP',
    mainImage: 'assets/product/TUBE FITTING/OD Plug.png',
    otherImages: [
    ],
    description: 'High-quality OD plug engineered for secure system isolation. Features precision-machined sealing surfaces for reliable performance. Manufactured from premium materials for maximum durability and corrosion resistance.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  {
    name: 'Hex Nipple',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Hex Nipple'],
    productCode: 'ADAPTIX-TF-HN',
    mainImage: 'assets/product/TUBE FITTING/14.png',
    otherImages: [
    ],
    description: 'Precision-engineered hex nipple featuring robust hex design for secure installation. Manufactured with exact threading and superior surface finish for optimal sealing performance. Built for reliable long-term operation in demanding applications.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
    }
  },
  // {
  //   name: 'Olet flanges',
  //   categoryName: 'FLANGES',
  //   subCategory: ['Olet flanges'],
  //   mainImage: 'assets/product/FLANGE/Olet flange.png',
  //   otherImages: [
  //   ],
  //   description: 'Heavy-duty flange olets manufactured for branch connections in piping systems. Features reinforced construction for enhanced structural integrity. Designed for optimal flow characteristics and ease of installation.',
  //   specifications: {
  //       'Material': '316/316L SS Forged Steel',
  //       'Size Range': '1/4" to 4"',
  //       'Max Working Pressure': '3000-6000 PSI',
  //       'Temperature Range': '-20°F to 450°F',
  //       'Surface Finish': 'Standard industrial finish',
  //       'Manufacturing': 'Hot forged process',
  //       'Quality Control': '100% pressure tested'
  //   }
  // }, 
  

  ];

  constructor() { }

  getProductCategories(): ProductCategory[] {
    return this.productCategories;
  }

  getProductDetails(): ProductDetail[] {
    return this.productDetails;
  }

  getProductsByCategory(categoryName: string, subProduct?: string): ProductDetail[] {
    if (subProduct) {
      return this.productDetails.filter(product => 
        product.categoryName === categoryName && 
        product.subCategory.includes(subProduct)
      );
    }
    return this.productDetails.filter(product => 
      product.categoryName === categoryName
    );
  }

  getAllProducts(): ProductDetail[] {
    return this.productDetails;
  }

  getProductById(id: string): ProductDetail | undefined {
    return this.productDetails.find(product => product.id === id);
  }
}