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
      image: 'assets/process/Metal_Pouring.jpg'
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

  forgingSteps = [
    {
      title: 'Designing & Creating Dies',
      description: 'Making dies is a procedure that is not necessary for closed-die steel forging parts. Once a new product is placed, our engineer will create dies using the customer`s steel forging layout. Additionally, forging dies are substantially more expensive than casting Molds since they include trimming dies and flattening dies.',
      image: 'assets/process/designing-dies.jpeg'
    },
    {
      title: 'Cutting and Heating the Billet',
      description: 'For continuous manufacturing, experts maintain regular steel material specifications with the forging company. Following the completion of the dies, steel billets will be removed from the material warehouse, chopped to the desired length, and heated in a medium-frequency furnace before forging.',
      image: 'assets/process/cutting-heating.jpeg'
    },
    {
      title: 'The Actual Forging Process',
      description: 'This process is done through the so-called “flash.” Heat-treated steel bars that have been placed under lower and upper dies and then pressed into the desired shape after being heated from billets.',
      image: 'assets/process/forging-process.jpeg'
    },
    {
      title: 'Trimming',
      description: 'Now that forging blanks with flash have been acquired, the flash will be removed by pressing the steel blanks once more while being placed under trimming dies. A complete forging blank is finished in this step.',
      image: 'assets/process/trimming.jpeg'
    },
    {
      title: 'Heat Treatment',
      description: 'After forging, heat treatment will be carried out to enhance the strength and mechanical qualities. Common heat treatment techniques for steel forgings include normalizing, quenching, annealing, tempering & hardening, solution treatment, etc., just like they are for investment castings. Naturally, heat treatment is only used when necessary.',
      image: 'assets/process/heat-treatment.jpeg'
    },
    {
      title: 'Shot Blasting and Machining',
      description: 'Steel forgings will be shot blasted to eliminate the scale and get a superior surface finish. After shot blasting, products will appear considerably smoother and more transparent. Although forging blanks have tighter tolerances than casting ones, occasionally, this is still insufficient for application. To solve this concern, machining is required. The NC lathe and CNC are the primary machining tools used. While CNC is used for precise, expensive machining, NC lathes are utilized for simple machining.  ',
      image: 'assets/process/shot-blasting.jpeg'
    }
  ];

  ngOnInit() {
  }
}
