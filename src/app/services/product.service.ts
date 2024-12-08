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
    {
      id: 'but-weld-end-fittings',
      name: 'BUT WELD END FITTINGS',
      isExpanded: false,
      subProducts: [
        '45 Deg Elbow', '90 Deg Elbow', 'Tee Equal', 'Tee Reducing',
        'End Cap', 'Barrel Nipple', 'Pipe Nipple', 'Swage Nipple',
        'U bend', 'Long Stub End', 'Short Stub End', 'Lateral Tee',
        'Reducer Eccentric'
      ]
    },
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
        'SORF Flanges', 'BLRF Flanges', 'Ring Joint Flanges',
        'Paddle & Spacer', 'Spectacles', 'Long Weld Neck Flanges',
        'Threaded/screwed Flanges', 'Lapped Joint Flanges',
        'Tongue & Groove Flanges', 'Orifice Flanges', 'Flange Olet',
        'Nipo Flanges', 'Puddle Flanges', 'WNRF Flanges'
      ]
    }
  ];

  private productDetails: ProductDetail[] = [
    {
        name: 'Male Connector',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Male Connector'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Premium VCO male connector featuring precision-machined threads and sealing surface, designed for high-purity fluid handling systems. Provides reliable metal-to-metal seal with excellent resistance to vibration and thermal cycling.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'Male VCO x Male NPT/Tube',
            'Surface Finish': '< 20 Ra'
        }
    },
    {
        name: 'Female Connector',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Female Connector'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'High-precision VCO female connector with expertly machined gland pocket, engineered for leak-tight connections in critical fluid systems. Features smooth bore design for optimal flow characteristics.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'Female VCO x Female NPT/Tube',
            'Surface Finish': '< 20 Ra'
        }
    },
    {
        name: 'Gland',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Gland'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCO gland designed for secure mechanical grip and reliable sealing. Features optimized geometry for proper compression and seal engagement, ensuring leak-free performance in demanding applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'Thread Type': 'Left-hand Thread',
            'Surface Finish': '< 20 Ra',
            'Hardness': 'Rb 80 maximum'
        }
    },
    {
      name: 'Male Elbow',
      categoryName: 'VCO FITTINGS',
      subCategory: ['Male Elbow'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
      ],
      description: 'Precision-crafted 90-degree male elbow fitting with VCO end connection, designed for space-efficient directional changes in high-purity fluid systems. Features smooth internal bore for optimal flow characteristics.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 2500 PSI',
            'Temperature Range': '-20°F to 450°F',
            'Angle': '90 degrees',
            'End Connections': 'Male VCO x Male NPT/Tube',
            'Surface Finish': '< 20 Ra'
        }
    },
    {
        name: 'Union Elbow',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Union Elbow'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],  
        description: 'High-performance VCO union elbow providing 90-degree flow direction change with the convenience of union-style assembly. Ideal for systems requiring frequent maintenance or reconfiguration.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 2500 PSI',
            'Temperature Range': '-20°F to 450°F',
            'Angle': '90 degrees',
            'End Connections': 'VCO x VCO',
            'Surface Finish': '< 20 Ra'
        }
    },
    {
        name: 'Union Tee',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Union Tee'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'High-performance VCO union tee fitting designed for three-way flow distribution in high-purity systems. Features precision-machined body with uniform flow paths and metal-to-metal sealing surfaces for consistent performance. Ideal for applications requiring frequent system modifications or maintenance.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'VCO x VCO x VCO',
            'Surface Finish': '< 20 Ra',
            'Flow Configuration': 'Equal Flow Paths'
        }
    },
    {
        name: 'Union Cross',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Union Cross'],   
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Versatile VCO union cross fitting providing four-way flow distribution with balanced flow characteristics. Engineered for multi-directional fluid handling in complex systems. Features precision-machined body and standardized end connections for maximum system flexibility.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'VCO x VCO x VCO x VCO',
            'Surface Finish': '< 20 Ra',
            'Flow Pattern': 'Four-way Distribution'
        }
    },
    {
        name: 'Male Run Tee',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Male Run Tee'],  
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],  
        description: 'Specialized VCO male run tee featuring straight-through flow path with branch connection. Designed for applications requiring minimal flow restriction in the main run with a secondary branch connection. Precision-machined for optimal flow characteristics and reliable sealing.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'Male VCO x Female VCO x Male VCO',
            'Surface Finish': '< 20 Ra',
            'Flow Configuration': 'Straight Through with Branch'
        }
    },
    {
        name: 'Male Branch Tee',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Male Branch Tee'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Advanced VCO male branch tee designed with optimized flow geometry for branch-off applications. Features male thread branch connection with female run connections, ideal for instrument connections and sampling points. Ensures minimal pressure drop and uniform flow distribution.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'Female VCO x Female VCO x Male VCO Branch',
            'Surface Finish': '< 20 Ra',
            'Branch Angle': '90 degrees'
        }
    },
    {
        name: '"O" Ring Seat Connector',
        categoryName: 'VCO FITTINGS',
        subCategory: ['"O" Ring Seat Connector'],   
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCO O-ring seat connector providing reliable sealing in high-purity applications. Features specially designed O-ring groove geometry for optimal compression and seal integrity. Ideal for applications requiring frequent assembly/disassembly with maintained sealing performance.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'Seal Type': 'Fluoroelastomer O-ring',
            'Surface Finish': '< 20 Ra',
            'Assembly Type': 'Thread-sealed'
        }
    },
    {
        name: '"O" Ring Seat Male Connector',
        categoryName: 'VCO FITTINGS',
        subCategory: ['"O" Ring Seat Male Connector'],  
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'High-performance VCO O-ring seat male connector combining thread sealing with O-ring technology. Features precision-machined male thread end and optimized O-ring groove design. Ensures reliable sealing in dynamic temperature and pressure conditions.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'Male NPT x O-ring VCO',
            'Surface Finish': '< 20 Ra',
            'O-ring Material': 'Viton® (FKM)'
        }
    },
    {
        name: 'Union',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Union'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Premium VCO union connector designed for joining tube sections with maximum reliability. Features symmetrical design with precision-machined sealing surfaces and robust body construction. Ideal for applications requiring frequent maintenance access or system modifications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'End Connections': 'VCO x VCO',
            'Surface Finish': '< 20 Ra',
            'Assembly Type': 'Two-piece Design'
        }
    },
    {
        name: 'Tube Socket',
        categoryName: 'VCO FITTINGS',
        subCategory: ['Tube Socket'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCO tube socket providing secure tube termination and connection point. Features optimized bore design for smooth flow transition and reliable tube grip. Manufactured with exact tolerances for consistent assembly and sealing performance.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'Tube Wall Compatibility': '0.035" to 0.083"',
            'Surface Finish': '< 20 Ra',
            'Installation Type': 'Weld Socket'
        }
    },
    {
        name: 'Nut',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Nut'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR nut designed for secure and leak-tight connections in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'Tube Wall Compatibility': '0.035" to 0.083"',
            'Surface Finish': '< 20 Ra',
            'Installation Type': 'Weld Socket'
        }
    },
    {
        name: 'Gasket',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Gasket'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR nut designed for secure and leak-tight connections in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
            'Tube Wall Compatibility': '0.035" to 0.083"',
            'Surface Finish': '< 20 Ra',
            'Installation Type': 'Weld Socket'
        }
    },
    {
      name: 'Gland',
      categoryName: 'VCR FITTINGS',
      subCategory: ['Gland'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'High-precision VCR gland engineered for critical fluid handling applications. Features proprietary surface finishing technology and optimized geometry for maximum sealing reliability. Designed with advanced anti-rotation features and precise dimensional control for consistent performance in ultra-high purity systems.',
      specifications: {
          'Material': '316/316L Stainless Steel',
          'Size Range': '1/4" to 1"',
          'Pressure Rating': 'Up to 3000 PSI',
          'Temperature Range': '-65°F to 450°F',
          'Surface Finish': '< 10 Ra',
          'Hardness': 'Rb 80 maximum',
          'Concentricity': '0.005" TIR max',
          'Thread Type': 'Precision-rolled',
          'Sealing Technology': 'Metal-to-metal',
          'Certification': 'Material traceability per EN 10204 3.1'
      }
  },
  {
      name: 'Union Tee',
      categoryName: 'VCR FITTINGS',
      subCategory: ['Union Tee'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Premium VCR union tee featuring advanced flow optimization technology. Engineered with computational fluid dynamics-designed internal geometry for minimal pressure drop and uniform flow distribution. Ideal for high-purity gas distribution systems requiring precise flow control and contamination-free operation.',
      specifications: {
          'Material': '316/316L Stainless Steel',
          'Size Range': '1/4" to 1"',
          'Pressure Rating': 'Up to 3000 PSI',
          'Temperature Range': '-65°F to 450°F',
          'Surface Finish': '< 10 Ra',
          'Flow Coefficient': 'Optimized Cv values',
          'Branch Angle': '90° ±1°',
          'Internal Volume': 'Minimized dead space',
          'Assembly Torque': 'Specified per size',
          'Helium Leak Rating': '4 x 10⁻⁹ std cc/sec'
      }
  },
  {
      name: 'Union Cross',
      categoryName: 'VCR FITTINGS',
      subCategory: ['Union Cross'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Advanced VCR union cross incorporating symmetrical flow path design for multi-directional fluid distribution. Features precision-machined internal passages with optimized flow geometry for balanced distribution and minimal turbulence. Engineered for high-purity semiconductor and analytical instrumentation applications.',
      specifications: {
          'Material': '316/316L Stainless Steel',
          'Size Range': '1/4" to 1"',
          'Pressure Rating': 'Up to 3000 PSI',
          'Temperature Range': '-65°F to 450°F',
          'Surface Finish': '< 10 Ra',
          'Flow Configuration': 'Symmetrical 4-way',
          'Port Alignment': '90° ±0.5°',
          'Internal Passageway': 'Electropolished',
          'Cleanliness': 'Certified particle-free',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
        name: 'Male Connector',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Male Connector'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR male connector designed for secure and leak-tight connections in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
        }
    },
    {
        name: 'Female Connector',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Female Connector'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR female connector designed for secure and leak-tight connections in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
        }
    },
    {
        name: 'Union Elbow',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Union Elbow'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR union elbow designed for efficient flow distribution in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
        }
    },
    {
        name: 'Male Elbow',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Male Elbow'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR male elbow designed for efficient flow distribution in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
        }
    },
    {
        name: 'Bulkhead Union',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Bulkhead Union'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR bulkhead union designed for secure and leak-tight connections in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
        }
    },
    {
        name: 'Equal Union',
        categoryName: 'VCR FITTINGS',
        subCategory: ['Equal Union'],
        mainImage: 'assets/product/Gasket.jpeg',
        otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
        ],
        description: 'Precision-engineered VCR equal union designed for efficient flow distribution in high-pressure systems. Features optimized thread engagement and sealing surfaces for consistent performance across a wide range of applications.',
        specifications: {
            'Material': '316/316L Stainless Steel',
            'Size Range': '1/4" to 1"',
            'Pressure Rating': 'Up to 3000 PSI',
            'Temperature Range': '-20°F to 450°F',
        }
    }

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