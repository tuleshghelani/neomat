import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  @ViewChild('processContainer') processContainer!: ElementRef;
  isDesktop = window.innerWidth > 1024;

  qualityProcesses = [
    {
      name: 'Dye Penetrant Examination',
      icon: 'magnetic',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Liquid penetrant examination is one of the most popular Non-destructive Examination (NDE) methods in the industry. It is economical, versatile, and requires minimal training when compared to other NDE methods. Liquid penetrant exams check for material flaws open to the surface by flowing very thin liquid into the flaw and then drawing the liquid out with a chalk-like developer. Welds are the most common item inspected, but plate, bars, pipes, castings, and forgings are also commonly inspected using liquid penetrant examination. '
    },
    {
      name: 'Magnetic Particle examination',
      icon: 'penetrant',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Magnetic particle examination (MT) is a very popular, low-cost method to perform non-destructive examination (NDE) of ferromagnetic material. Ferromagnetic is defined in ASME Section V as “a term applied to materials that can be magnetized or strongly attracted by a magnetic field.” MT is an NDE method that checks for surface discontinuities but can also reveal discontinuities slightly below the surface.'
    },
    {
      name: 'Ultrasonic Examination',
      icon: 'antistatic',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Ultrasonic testing (UT) comprises a range non-destructive examination (NDE) techniques that send ultrasonic waves through an object or material. These high frequency sound waves are transmitted into materials to characterise the material or for flaw detecting. Most UT inspection applications use short pulse waves with frequencies ranging from 0.1-15 MHz, although frequencies up to 50 MHz can be used. One common application for this test method is ultrasonic thickness measurement, which is used to ascertain the thickness of an object such as when assessing pipework corrosion.'
    },
    {
      name: 'X-Ray Examination',
      icon: 'hardness',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Radiographic Testing (RT) is a non-destructive examination (NDE) method which uses either x-rays or gamma rays to examine the internal structure of manufactured components identifying any flaws or defects.'
    },
    {
      name: 'Thickness Measurements',
      icon: 'ultrasonic',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'State-of-the-art ultrasonic testing for internal defect detection.'
    },
    {
      name: 'PMI Testing',
      icon: 'femite',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Positive material identification (PMI) is used to analyse and identify material grade and alloy composition for quality and safety control.'
    },
    {
      name: 'Hardness Testing',
      icon: 'dimension',
      image: 'assets/quality/Heat_treatment.jpeg',
      description: 'Hardness testing methods are a crucial part of quality control and material testing in industry. They are used to identify defects that are often invisible to the naked eye and enable systematic damage analyses. This is particularly essential for the evaluation of mechanical properties in research and development work as well as production. After all, hardness testing makes it possible to detect defects in material development at an early stage and thus improve product quality.'
    },
    {
      name: 'Heat Treatment',
      icon: 'fire',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Heat treatment is a process that involves controlled heating and cooling of a material to modify its microstructure and enhance its mechanical properties such as tensile strength, hardness, toughness, and ductility.'
    },
    {
      name: 'Ferrite Test',
      icon: 'xray',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Ferrite test is a fast, inexpensive, and accurate way to measure delta ferrite content in austenitic and duplex stainless steel. Ferrite testing can establish the ideal ferrite content balance between ductility, toughness, corrosion resistance, and crack prevention.'
    },
    {
      name: 'Microscopic Examination',
      icon: 'pmi',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Microscopic examination is an essential part of the analysis, which involves the study of the material`s microstructural features under magnification. The properties of a material, which determine its performance under a given application, are closely linked to its structure.'
    },
    {
      name: 'Hydro Test',
      icon: 'pmi',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Hydrostatic testing Is the most common method employed for testing valves using a test fluid, to observe whether there is a pressure loss in the valve.'
    }
  ];

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth > 1024;
    this.initScrollAnimation();
  }

  ngOnInit() {
    this.initScrollAnimation();
  }

  private initScrollAnimation() {
    fromEvent(window, 'scroll')
      .pipe(
        debounceTime(10),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.animateProcessLines();
      });
  }

  private animateProcessLines() {
    const processes = document.querySelectorAll('.process-item');
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    processes.forEach((process, index) => {
      const rect = process.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;
      const isVisible = elementTop < (windowHeight + scrollTop) * 0.9;
      
      if (isVisible) {
        process.classList.add('animate');
        if (this.isDesktop) {
          setTimeout(() => {
            process.classList.add('show-line');
          }, index * 200);
        }
      }
    });
  }
}
