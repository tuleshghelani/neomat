import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  ngOnInit() {
    // Reinitialize AOS for this component
    Aos.refresh();
  }
}
