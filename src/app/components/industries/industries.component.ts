import { Component } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent {
  industries = [
    {
      name: 'Oil and Gas',
      image: 'assets/industries/oil_and_gas.jpeg',
      description: 'Providing critical components for upstream, midstream, and downstream operations with high-pressure and corrosion-resistant solutions.'
    },
    {
      name: 'Medical',
      image: 'assets/industries/Medical.jpeg',
      description: 'High-precision components for medical equipment and devices, meeting stringent sterilization and safety standards.'
    },
    {
      name: 'Marine',
      image: 'assets/industries/marine.jpeg',
      description: 'Specialized fittings and components designed to withstand harsh marine environments and extreme weather conditions.'
    },
    {
      name: 'Railway',
      image: 'assets/industries/railway.jpeg',
      description: 'Durable and reliable components engineered for railway infrastructure, ensuring safety and longevity in track systems.'
    },
    {
      name: 'Mining',
      image: 'assets/industries/Mining.jpeg',
      description: 'Heavy-duty solutions for mining operations, featuring abrasion-resistant materials and robust construction.'
    },
    {
      name: 'Ship Building',
      image: 'assets/industries/ship_building.jpeg',
      description: 'Premium maritime components designed for shipbuilding, ensuring reliability in critical vessel systems.'
    },
    {
      name: 'Petrochemical',
      image: 'assets/industries/petrochemical.jpeg',
      description: 'Advanced fittings for petrochemical processing, engineered to handle aggressive chemicals and extreme temperatures.'
    },
    {
      name: 'Food',
      image: 'assets/industries/Food.jpeg',
      description: 'Hygienic fittings and components meeting FDA standards for safe food processing and handling operations.'
    },
    {
      name: 'Pharmaceuticals',
      image: 'assets/industries/Pharmaceuticals.jpeg',
      description: 'Ultra-pure components for pharmaceutical manufacturing, meeting GMP standards and regulatory requirements.'
    },
    {
      name: 'Hydraulics',
      image: 'assets/industries/marine.jpeg',
      description: 'High-pressure hydraulic system components designed for optimal flow and maximum system efficiency.'
    },
    {
      name: 'Pneumatics',
      image: 'assets/industries/marine.jpeg',
      description: 'Precision-engineered pneumatic components ensuring reliable compressed air distribution and control.'
    },
    {
      name: 'Alternative Fuels',
      image: 'assets/industries/marine.jpeg',
      description: 'Specialized components for alternative fuel systems, supporting sustainable energy infrastructure.'
    },
    {
      name: 'Pulp & Paper',
      image: 'assets/industries/marine.jpeg',
      description: 'Corrosion-resistant fittings designed for pulp and paper processing, handling aggressive chemicals and high temperatures.'
    },
    {
      name: 'Instrumentations',
      image: 'assets/industries/marine.jpeg',
      description: 'Precision instrument fittings ensuring accurate measurements and reliable monitoring in critical applications.'
    },
    {
      name: 'Aerospace',
      image: 'assets/industries/marine.jpeg',
      description: 'High-performance aerospace components meeting strict industry standards for safety and reliability.'
    },
    {
      name: 'Structural Engineering',
      image: 'assets/industries/marine.jpeg',
      description: 'Robust structural components engineered for building integrity and long-term structural stability.'
    },
    {
      name: 'Refineries',
      image: 'assets/industries/marine.jpeg',
      description: 'Heavy-duty refinery components designed to handle extreme temperatures and corrosive environments.'
    },
    {
      name: 'Power Generation',
      image: 'assets/industries/marine.jpeg',
      description: 'Critical components for power plants, engineered for reliability in high-pressure steam and cooling systems.'
    },
    {
      name: 'Chemicals',
      image: 'assets/industries/marine.jpeg',
      description: 'Chemical-resistant fittings designed for safe handling and processing of aggressive industrial chemicals.'
    },
    {
      name: 'Fertilizers',
      image: 'assets/industries/oil_and_gas.jpeg',
      description: 'Corrosion-resistant components supporting fertilizer production, designed for handling aggressive materials and ensuring process efficiency.'
    }
  ];
}
