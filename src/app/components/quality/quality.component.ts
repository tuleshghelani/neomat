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
      name: 'Magnetic Particle Test',
      icon: 'magnetic',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Advanced magnetic particle testing for detecting surface and near-surface discontinuities.'
    },
    {
      name: 'Penetrant Test Examination',
      icon: 'penetrant',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'High-sensitivity liquid penetrant testing for surface defect detection.'
    },
    {
      name: 'Antistatic Test',
      icon: 'antistatic',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Comprehensive antistatic testing to ensure safety and reliability.'
    },
    {
      name: 'Hardness Test Equipment',
      icon: 'hardness',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Precision hardness testing across multiple scales.'
    },
    {
      name: 'Ultrasonic Testing Equipment',
      icon: 'ultrasonic',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'State-of-the-art ultrasonic testing for internal defect detection.'
    },
    {
      name: 'Femite Test Equipment',
      icon: 'femite',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Advanced ferrite content measurement and analysis.'
    },
    {
      name: 'Material Dimension Check',
      icon: 'dimension',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Precise dimensional verification of incoming materials.'
    },
    {
      name: 'Fire Test Facilities',
      icon: 'fire',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Comprehensive fire resistance testing capabilities.'
    },
    {
      name: 'X-Ray Examination Equipment',
      icon: 'xray',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'High-resolution X-ray inspection for internal structure analysis.'
    },
    {
      name: 'PMI Equipment',
      icon: 'pmi',
      image: 'assets/quality/Magnetic_particle_test.jpeg',
      description: 'Positive Material Identification for material verification.'
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
