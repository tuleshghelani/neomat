import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  castingSteps = [
    {
      title: 'Tooling and Pattern Making',
      description: 'A tool is built to customer- provided specifications (A). Cold wax is then injected into the tool to create a wax pattern/prototype (B) that will hold precise dimensional requirements in the final casting.',
      image: 'assets/process/Tooling_and_pattern_making.jpeg'
    },
    {
      title: 'Pattern Assembly',
      description: 'The wax patterns are assembled onto the sprue',
      image: 'assets/process/Pattern_Assembly.jpeg'
    },
    {
      title: 'Dipping and Coating',
      description: 'Successive layers of ceramic and stucco are applied to the sprue assembly to form a hard shell.',
      image: 'assets/process/Dipping_and_Coating.jpeg'
    },
    {
      title: 'De-Waxing and Shell Firing',
      description: 'The molds are flash- fired to remove the wax and sprue materials and then heated to 1,800° and placed on a sand bed, ready for pouring.',
      image: 'assets/process/De-Waxing_and_Firing.jpeg'
    },
    {
      title: 'Metal Pouring',
      description: 'Molten metal, up to 3,000°, is poured into the hollow mold and then cooled.',
      image: 'assets/process/Casting.jpeg'
    },
    {
      title: 'Knockout',
      description: 'The ceramic shell is broken off, and the individual castings are cut away.',
      image: 'assets/process/Knockout.jpeg'
    },
    {
      title: 'Finishing',
      description: 'Excess metal is removed, surfaces are finished, and castings are heat treated.',
      image: 'assets/process/Finishing.jpeg'
    },
    {
      title: 'Testing and Inspection',
      description: 'Castings undergo thorough testing and inspection to ensure that they meet dimensional tolerances and specifications.',
      image: 'assets/process/Testing_and_Inspection.jpeg'
    },
    {
      title: 'Packing and Shipping',
      description: 'Castings are securely packaged for shipping to the customer.',
      image: 'assets/process/Packing_and_Shipping.jpeg'
    }
  ];

  forgingProcess = {
    title: 'Closed Die Forging',
    description: 'Our advanced closed die forging process ensures superior mechanical properties and optimal material utilization.',
    steps: [
      'Material Selection and Cutting',
      'Heating in Controlled Environment',
      'Die Preparation and Lubrication',
      'Forging Operation',
      'Trimming and Quality Control'
    ],
    image: 'assets/process/1.jpeg'
  };

  ngOnInit() {
  }
}
