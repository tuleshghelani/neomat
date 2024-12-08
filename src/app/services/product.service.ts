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
      description: 'Premium grade VCR male connector engineered for ultra-high purity applications. Features our proprietary surface finishing technology ensuring class-leading seal integrity and minimal particle generation. The innovative gland design provides exceptional radial alignment and prevents galling during repeated assembly cycles. Ideal for semiconductor, pharmaceutical, and critical gas delivery systems.',
      specifications: {
          'Material': '316/316L SS with enhanced surface finish ≤ 8 Ra',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Surface Treatment': 'Electropolished',
          'Helium Leak Rating': '4 x 10⁻⁹ std cc/sec',
          'End Connections': 'Compatible with all standard VCR components'
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
      description: 'State-of-the-art VCR female connector featuring precision-machined sealing surfaces and our exclusive geometrical optimization for superior connector engagement. Enhanced thread profile ensures consistent sealing force distribution and prevents cold welding. Ideal for ultra-high purity gas systems, analytical instrumentation, and critical process applications.',
      specifications: {
          'Material': '316/316L SS with electropolished finish',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Surface Finish': '≤ 10 Ra',
          'Particulate Generation': '< Class 100',
          'Torque Specification': 'Size-specific calibrated torque values'
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
      description: 'Advanced 90° VCR union elbow incorporating our innovative flow-optimized geometry for minimal pressure drop and turbulence. Precision-machined from high-purity bar stock with controlled sulfur content for enhanced weldability. Features our proprietary internal polishing process ensuring exceptional surface smoothness and corrosion resistance.',
      specifications: {
          'Material': '316/316L SS (low sulfur content)',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4000 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Flow Coefficient': 'Size-specific optimized Cv values',
          'Surface Finish': 'EP finished to < 10 Ra',
          'Bend Radius': 'Optimized for minimal flow restriction'
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
      description: 'High-performance VCR male elbow featuring our patented flow-optimization technology. Engineered with computational fluid dynamics analysis to minimize dead space and ensure uniform flow distribution. The precision-machined sealing surface incorporates our advanced geometry for enhanced gasket retention and leak-tight connections.',
      specifications: {
          'Material': '316/316L SS with certified material traceability',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4000 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Dead Space': 'Minimized by design',
          'Surface Finish': 'EP finished to < 8 Ra',
          'Manufacturing': 'ISO 9001:2015 certified process'
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
      description: 'Premium bulkhead union featuring our innovative panel-mount design for superior stability and alignment. Engineered with dual-sided sealing technology ensuring leak-tight connections on both faces. Enhanced thread profile and proprietary surface treatment provide exceptional resistance to vibration and thermal cycling.',
      specifications: {
          'Material': '316/316L SS with enhanced passivation',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Panel Thickness Range': 'Up to 0.5"',
          'Mounting Hardware': 'Included hex nut and washer',
          'Concentricity': '≤ 0.005" TIR'
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
      description: 'Ultra-high purity VCR equal union featuring our symmetrical flow path design for optimal fluid dynamics. Incorporates dual-sided precision-machined sealing surfaces with our proprietary surface enhancement technology. Engineering-optimized hex flats provide superior wrench engagement and torque transfer during assembly.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: '45 Deg Elbow',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['45 Deg Elbow'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'High-precision 45-degree elbow fitting designed for optimal flow direction change. Features seamless construction with uniform wall thickness and precise angle consistency. Engineered for minimal flow resistance and pressure drop.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: '90 Deg Elbow',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['90 Deg Elbow'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Premium 90-degree elbow fitting engineered for right-angle flow direction changes. Features reinforced construction for high-pressure applications with perfect perpendicular alignment. Optimized internal radius for smooth flow characteristics.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Tee Equal',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Tee Equal'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Symmetrical equal tee fitting designed for three-way flow distribution. Features balanced flow characteristics with uniform wall thickness. Precision-engineered for equal pressure distribution across all ports.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Tee Reducing',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Tee Reducing'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Advanced reducing tee fitting designed for multi-diameter flow applications. Features smooth transition zones for optimal flow characteristics. Engineered for balanced pressure distribution despite size differences.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'End Cap',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['End Cap'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Heavy-duty end cap designed for positive line termination. Features reinforced construction with precision-machined sealing surface. Engineered for maximum pressure containment and zero leakage.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Barrel Nipple',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Barrel Nipple'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Precision-engineered barrel nipple featuring uniform wall thickness throughout. Designed for optimal flow characteristics with minimal pressure drop. Includes precision-machined ends for perfect alignment.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Pipe Nipple',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Pipe Nipple'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'High-quality pipe nipple designed for straight-line connections. Features precise length control and perfectly perpendicular end faces. Manufactured with strict tolerances for maximum reliability.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Swage Nipple',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Swage Nipple'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Advanced swage nipple featuring smooth diameter transition. Engineered for gradual flow area changes with minimal turbulence. Includes precision-machined ends for perfect alignment and sealing.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'U bend',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['U bend'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Precision-formed U-bend designed for 180-degree flow reversal. Features optimized bend radius for minimal flow restriction. Manufactured with advanced forming technology for perfect symmetry.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Long Stub End',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Long Stub End'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Extended length stub end designed for maximum engagement. Features reinforced flange face with precision-machined sealing surface. Includes extended barrel for optimal weld joint positioning.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Short Stub End',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Short Stub End'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Compact stub end designed for space-constrained applications. Features reinforced flange face with precision-machined sealing surface. Optimized for minimal installation length requirements.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Lateral Tee',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Lateral Tee'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Specialized lateral tee designed for angled branch connections. Features optimized flow geometry for reduced pressure drop. Engineered for balanced flow distribution with minimal turbulence.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: 'Reducer Eccentric',
      categoryName: 'BUT WELD END FITTINGS',
      subCategory: ['Reducer Eccentric'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Advanced eccentric reducer designed for offset diameter transitions. Features smooth internal profile for optimal flow characteristics. Engineered for minimum turbulence and pressure drop across the reduction.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '4500 PSI at 70°F',
          'Temperature Range': '-65°F to 600°F',
          'Internal Volume': 'Size-specific minimized volumes',
          'Cleanliness': 'Certified to ASTM G93 Level A',
          'Quality Control': '100% helium leak tested'
      }
    },
    {
      name: '45 Deg Elbow Fittings',
      categoryName: 'FORGED FITTINGS',
      subCategory: ['45 Deg Elbow Fittings'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'High-quality forged 45-degree elbow fitting manufactured for optimal flow direction change. Features precision-engineered angles and smooth internal surfaces for minimal flow restriction. Ideal for applications requiring 45-degree directional changes in high-pressure systems.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '6000 PSI at 70°F',
          'Temperature Range': '-65°F to 800°F',
          'Quality Control': '100% pressure tested'
      }
  },
  {
      name: '90 Deg Elbow Fittings',
      categoryName: 'FORGED FITTINGS',
      subCategory: ['90 Deg Elbow Fittings'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Heavy-duty forged 90-degree elbow designed for right-angle flow direction changes. Manufactured with reinforced walls for maximum pressure resistance and durability. Perfect for tight space installations requiring 90-degree turns.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '6000 PSI at 70°F',
          'Temperature Range': '-65°F to 800°F',
          'Quality Control': '100% pressure tested'
      }
  },  
  {
      name: 'Union',
      categoryName: 'FORGED FITTINGS',
      subCategory: ['Union'],
      mainImage: 'assets/product/Gasket.jpeg',
      otherImages: [
          'assets/product/Gasket_2.jpeg',
          'assets/product/Gasket_3.jpeg',
          'assets/product/Gasket_4.jpeg'
      ],
      description: 'Premium forged union fitting providing secure, leak-tight pipe connections. Features precision-machined threads and sealing surfaces for reliable joining of pipe sections. Designed for easy assembly and disassembly while maintaining system integrity.',
      specifications: {
          'Material': '316/316L SS with advanced surface treatment',
          'Size Range': '1/4", 3/8", 1/2", 3/4", 1"',
          'Max Working Pressure': '6000 PSI at 70°F',
          'Temperature Range': '-65°F to 800°F',
          'Quality Control': '100% pressure tested'
      }
  },
  {
    name: 'Barrel Nipple',
    categoryName: 'FORGED FITTINGS', 
    subCategory: ['Barrel Nipple'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg', 
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Heavy-duty forged barrel nipple featuring seamless construction and precise threading. Manufactured from high-grade materials for superior pressure and temperature resistance. Ideal for connecting pipes in high-pressure applications.',
    specifications: {
      'Material': '316/316L SS, Carbon Steel',
      'Size Range': '1/4" to 4"',
      'Pressure Rating': 'Class 3000, 6000, 9000',
      'End Connections': 'NPT, BSPT',
      'Surface Finish': 'As per MSS-SP-6',
      'Quality Control': '100% tested',
      'Standards': 'ASME B16.11, MSS-SP-97'
    }
  },
  {
    name: 'Swage Nipple',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Swage Nipple'], 
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Precision-engineered swage nipple designed for size reduction in piping systems. Features concentric or eccentric reduction with high-quality threading and superior flow characteristics. Ideal for high-pressure industrial applications.',
    specifications: {
      'Material': '316/316L SS, Carbon Steel',
      'Size Range': '1/4" to 4" reduction',
      'Pressure Rating': 'Class 3000, 6000',
      'End Connections': 'NPT, BSPT',
      'Surface Finish': 'As per MSS-SP-6',
      'Quality Control': '100% tested',
      'Standards': 'ASME B16.11, MSS-SP-95'
    }
  },
  {
    name: 'Bushing',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Bushing'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'High-quality forged bushing fitting manufactured from premium grade materials. Features precision-machined threads and excellent pressure handling capabilities. Ideal for size reduction applications in high-pressure piping systems.',
    specifications: {
        'Material': '316/316L SS with advanced surface treatment',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI (size dependent)',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Industry standard',
        'Quality Control': '100% pressure tested',
        'Certification': 'Material test certificates available'
    }
},
{
    name: 'Forged Tee',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Forged Tee'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Heavy-duty forged tee fitting designed for high-pressure applications. Features three-way flow distribution with reinforced wall thickness. Manufactured using advanced forging techniques for superior strength and reliability.',
    specifications: {
        'Material': '316/316L SS with advanced surface treatment',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI (size dependent)',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Industry standard',
        'Quality Control': '100% pressure tested',
        'Certification': 'Material test certificates available'
    }
  },
  {
    name: 'Equal Tee Fittings',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Equal Tee Fittings'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'High-pressure equal tee fitting designed for uniform flow distribution. Features precision-forged construction with equal-sized outlets. Ideal for applications requiring three-way flow division or combination.',
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
    name: 'Reducing Tee Fittings',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Reducing Tee Fittings'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Heavy-duty reducing tee fitting engineered for applications requiring different outlet sizes. Provides optimal flow characteristics with reduced branch connection.',
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
    name: 'End Cap',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['End Cap'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Robust forged end cap designed for reliable line termination. Features thick-wall construction for maximum pressure retention and safety.',
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
    name: 'Cross',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Cross'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Four-way cross fitting manufactured for multi-directional flow applications. Ensures balanced pressure distribution across all outlets.',
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
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Plug'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Solid forged plug designed for secure system closure. Features precision threading and hexagonal head for reliable installation.',
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
    name: 'Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Coupling'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Standard coupling fitting engineered for straight pipe connections. Provides reliable joining solution with maximum pressure integrity.',
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
    name: 'Full Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Full Coupling'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Full-length coupling designed for maximum engagement length. Ensures superior connection strength and leak-proof performance.',
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
    name: 'Half Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Half Coupling'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Compact half-length coupling for space-constrained applications. Provides reliable connection in reduced installation spaces.',
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
    name: 'Reducing Coupling',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Reducing Coupling'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Precision-engineered reducing coupling for connecting pipes of different sizes. Features smooth internal transition for optimal flow characteristics.',
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
    name: 'Boss',
    categoryName: 'FORGED FITTINGS',
    subCategory: ['Boss'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Heavy-duty boss fitting designed for branch connections. Provides reinforced mounting point for high-pressure applications.',
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
    name: 'Male Connector',
    categoryName: 'TUBE FITTINGS',
    subCategory: ['Male Connector'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
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
  {
    name: 'SORF Flanges',
    categoryName: 'FLANGES',
    subCategory: ['SORF Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg', 
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'High-quality Slip-On Raised Face (SORF) flanges manufactured to exact specifications. Features precision-machined raised face for optimal sealing and uniform load distribution. Engineered for easy installation and reliable performance in demanding industrial applications.',
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
    name: 'BLRF Flanges',
    categoryName: 'FLANGES', 
    subCategory: ['BLRF Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg', 
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Premium Blind Raised Face (BLRF) flanges designed for pipe system termination. Features robust construction with raised face design for enhanced sealing capability. Manufactured to strict tolerances for reliable closure in high-pressure applications.',
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
    name: 'Ring Joint Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Ring Joint Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Heavy-duty Ring Joint flanges engineered for high-pressure and high-temperature applications. Features precision-machined ring groove for metal-to-metal sealing. Superior design ensures excellent joint integrity and leak prevention.',
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
    name: 'Paddle & Spacer',
    categoryName: 'FLANGES',
    subCategory: ['Paddle & Spacer'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'High-performance paddle and spacer flanges designed for precise flow control and isolation. Features robust construction with integrated spacing elements for optimal alignment. Engineered for demanding industrial applications with superior sealing capabilities.',
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
    name: 'Spectacles',
    categoryName: 'FLANGES',
    subCategory: ['Spectacles'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Premium spectacle flanges providing dual-function isolation and flow-through capabilities. Precision-engineered rotating disc design allows quick transitions between blind and open positions. Ideal for maintenance operations and system isolation.',
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
    name: 'Long Weld Neck Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Long Weld Neck Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
        'assets/product/Gasket_2.jpeg',
        'assets/product/Gasket_3.jpeg',
        'assets/product/Gasket_4.jpeg'
    ],
    description: 'Extended weld neck flanges designed for superior strength and alignment in high-stress applications. Features elongated neck for enhanced stress distribution and improved weld joint integrity. Engineered for critical piping systems requiring maximum reliability.',
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
    name: 'Threaded/screwed Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Threaded/screwed Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'High-quality threaded flanges designed for superior pipe connections. Features precision-cut threads for optimal sealing and durability. Engineered for reliable performance in high-pressure applications with excellent corrosion resistance.',
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
    name: 'Lapped Joint Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Lapped Joint Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Premium lapped joint flanges featuring precision-machined surfaces for exceptional sealing capabilities. Designed for applications requiring frequent assembly and disassembly, with enhanced joint reliability and maintenance accessibility.',
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
    name: 'Tongue & Groove Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Tongue & Groove Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Specialized tongue and groove flanges engineered for high-pressure applications. Features precise matching surfaces for superior sealing and alignment. Ideal for services requiring enhanced gasket retention and leak prevention.',
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
    name: 'Orifice Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Orifice Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Professional-grade orifice flanges designed for flow measurement applications. Incorporates precision-machined pressure taps and surface finish for accurate flow readings. Engineered for long-term reliability in metering services.',
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
    name: 'Flange Olet',
    categoryName: 'FLANGES',
    subCategory: ['Flange Olet'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Heavy-duty flange olets manufactured for branch connections in piping systems. Features reinforced construction for enhanced structural integrity. Designed for optimal flow characteristics and ease of installation.',
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
    name: 'Nipo Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Nipo Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Advanced nipo flanges engineered for versatile piping connections. Provides excellent alignment and sealing properties with integrated nipple design. Ideal for applications requiring compact installation and reliable performance.',
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
    name: 'Puddle Flanges',
    categoryName: 'FLANGES',
    subCategory: ['Puddle Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Specialized puddle flanges designed for tank and wall penetrations. Features enhanced sealing capabilities for leak-proof installations. Engineered with corrosion-resistant materials for long-term reliability in embedded applications.',
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
    name: 'WNRF Flanges',
    categoryName: 'FLANGES',
    subCategory: ['WNRF Flanges'],
    mainImage: 'assets/product/Gasket.jpeg',
    otherImages: [
      'assets/product/Gasket_2.jpeg',
      'assets/product/Gasket_3.jpeg',
      'assets/product/Gasket_4.jpeg'
    ],
    description: 'Premium weld neck raised face flanges manufactured for critical piping applications. Features optimal stress distribution and superior joint integrity. Engineered for high-pressure and high-temperature services with excellent weld joint reliability.',
    specifications: {
        'Material': '316/316L SS Forged Steel',
        'Size Range': '1/4" to 4"',
        'Max Working Pressure': '3000-6000 PSI',
        'Temperature Range': '-20°F to 450°F',
        'Surface Finish': 'Standard industrial finish',
        'Manufacturing': 'Hot forged process',
        'Quality Control': '100% pressure tested'
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