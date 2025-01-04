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
      description: 'Creation of precise wax patterns using advanced tooling techniques.',
      image: 'assets/process/Tooling_and_pattern_making.jpeg'
    },
    {
      title: 'Pattern Assembly',
      description: 'Strategic assembly of wax patterns into tree-like structures.',
      image: 'assets/process/Pattern_Assembly.jpeg'
    },
    {
      title: 'Dipping and Coating',
      description: 'Application of ceramic slurry layers for shell formation.',
      image: 'assets/process/Dipping_and_Coating.jpeg'
    },
    {
      title: 'De-Waxing and Firing',
      description: 'Removal of wax and shell strengthening through firing.',
      image: 'assets/process/De-Waxing_and_Firing.jpeg'
    },
    {
      title: 'Casting',
      description: 'Pouring of molten metal into prepared ceramic shells.',
      image: 'assets/process/Casting.jpeg'
    },
    {
      title: 'Knockout',
      description: 'Removal of ceramic shell to reveal cast components.',
      image: 'assets/process/Knockout.jpeg'
    },
    {
      title: 'Finishing',
      description: 'Precision finishing operations for final product quality.',
      image: 'assets/process/Finishing.jpeg'
    },
    {
      title: 'Testing and Inspection',
      description: 'Rigorous quality control and performance verification.',
      image: 'assets/process/Testing_and_Inspection.jpeg'
    },
    {
      title: 'Packing and Shipping',
      description: 'Secure packaging and efficient delivery logistics.',
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
