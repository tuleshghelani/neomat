import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

interface StatItem {
  current: number;
  target: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/Slider/5.jpeg',
      alt: 'Industrial Valves',
      title: 'Premium Industrial Valves',
      description: 'Discover our comprehensive range of high-performance industrial valves engineered for reliability and durability in demanding environments.',
      link: '/products/valves'
    },
    {
      image: 'assets/Slider/2.jpeg',
      alt: 'Pipe Fittings',
      title: 'Professional Pipe Fittings',
      description: 'Expert solutions in pipe fittings with premium materials and precise engineering for all your industrial connectivity needs.',
      link: '/products/fittings'
    },
    // {
    //   image: 'assets/Slider/3.jpeg',
    //   alt: 'Control Valves',
    //   title: 'Smart Control Valves',
    //   description: 'Advanced control valve solutions featuring cutting-edge technology for precise flow control and process optimization.',
    //   link: '/products/control-valves'
    // },
    {
      image: 'assets/Slider/6.jpeg',
      alt: 'Custom Solutions',
      title: 'Custom Engineering Solutions',
      description: 'Tailored engineering solutions meeting specific industry requirements with innovative design and superior quality.',
      link: '/custom-solutions'
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  stats: StatItem[] = [
    { current: 0, target: 25, suffix: '+', label: 'Years Experience' },
    { current: 0, target: 1000, suffix: '+', label: 'Projects Completed' },
    { current: 0, target: 50, suffix: '+', label: 'Countries Served' }
  ];

  private counterInterval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoSlide();

    // Start counter when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounterAnimation();
          observer.disconnect();
        }
      });
    });

    const statsElement = document.querySelector('.stats-container');
    if (statsElement) {
      observer.observe(statsElement);
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
    if (this.counterInterval) {
      clearInterval(this.counterInterval);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  navigateToProduct(link: string) {
    this.router.navigate([link]);
  }

  startCounterAnimation() {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    this.counterInterval = setInterval(() => {
      let completed = true;

      this.stats.forEach(stat => {
        if (stat.current < stat.target) {
          const increment = Math.ceil(stat.target / steps);
          stat.current = Math.min(stat.current + increment, stat.target);
          completed = false;
        }
      });

      if (completed) {
        clearInterval(this.counterInterval);
      }
    }, interval);
  }
}
