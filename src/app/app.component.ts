import { Component } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Neomat';

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    AOS.init();
  }
}
