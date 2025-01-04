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
      description: 'Advanced magnetic particle testing for detecting surface and near-surface discontinuities.'
    },
    {
      name: 'Penetrant Test Examination',
      icon: 'penetrant',
      description: 'High-sensitivity liquid penetrant testing for surface defect detection.'
    },
    {
      name: 'Antistatic Test',
      icon: 'antistatic',
      description: 'Comprehensive antistatic testing to ensure safety and reliability.'
    },
    {
      name: 'Hardness Test Equipment',
      icon: 'hardness',
      description: 'Precision hardness testing across multiple scales.'
    },
    {
      name: 'Ultrasonic Testing Equipment',
      icon: 'ultrasonic',
      description: 'State-of-the-art ultrasonic testing for internal defect detection.'
    },
    {
      name: 'Femite Test Equipment',
      icon: 'femite',
      description: 'Advanced ferrite content measurement and analysis.'
    },
    {
      name: 'Material Dimension Check',
      icon: 'dimension',
      description: 'Precise dimensional verification of incoming materials.'
    },
    {
      name: 'Fire Test Facilities',
      icon: 'fire',
      description: 'Comprehensive fire resistance testing capabilities.'
    },
    {
      name: 'X-Ray Examination Equipment',
      icon: 'xray',
      description: 'High-resolution X-ray inspection for internal structure analysis.'
    },
    {
      name: 'PMI Equipment',
      icon: 'pmi',
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
