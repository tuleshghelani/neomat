import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quality-icon',
  template: `
    <ng-container [ngSwitch]="iconName">
      <!-- Magnetic Particle Test -->
      <svg *ngSwitchCase="'magnetic'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#17a3de" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#17a3de" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#17a3de" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <!-- Penetrant Test -->
      <svg *ngSwitchCase="'penetrant'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17a3de" stroke-width="2"/>
        <path d="M12 16L16 12L12 8L8 12L12 16Z" stroke="#17a3de" stroke-width="2"/>
      </svg>

      <!-- Antistatic Test -->
      <svg *ngSwitchCase="'antistatic'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#17a3de" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <!-- Hardness Test -->
      <svg *ngSwitchCase="'hardness'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2V6" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 18V22" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <path d="M4.93 4.93L7.76 7.76" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <path d="M16.24 16.24L19.07 19.07" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="12" r="6" stroke="#17a3de" stroke-width="2"/>
      </svg>

      <!-- Ultrasonic Testing -->
      <svg *ngSwitchCase="'ultrasonic'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M2 12H6" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <path d="M18 12H22" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 12C8 12 10 8 12 8C14 8 16 12 16 12C16 12 14 16 12 16C10 16 8 12 8 12Z" stroke="#17a3de" stroke-width="2"/>
      </svg>

      <!-- Femite Test -->
      <svg *ngSwitchCase="'femite'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M3 3V21H21" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <path d="M7 14L12 9L16 13L20 8" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <!-- Dimension Check -->
      <svg *ngSwitchCase="'dimension'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M2 12H22" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 2V22" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="#17a3de" stroke-width="2"/>
      </svg>

      <!-- Fire Test -->
      <svg *ngSwitchCase="'fire'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C7 7 4 12 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 17 7 12 2Z" stroke="#17a3de" stroke-width="2"/>
      </svg>

      <!-- X-Ray -->
      <svg *ngSwitchCase="'xray'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#17a3de" stroke-width="2"/>
        <circle cx="12" cy="12" r="4" stroke="#17a3de" stroke-width="2"/>
        <path d="M3 12H7" stroke="#17a3de" stroke-width="2"/>
        <path d="M17 12H21" stroke="#17a3de" stroke-width="2"/>
      </svg>

      <!-- PMI Equipment -->
      <svg *ngSwitchCase="'pmi'" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17a3de" stroke-width="2"/>
        <path d="M8 14L12 10L16 14" stroke="#17a3de" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </ng-container>
  `
})
export class QualityIconComponent {
  @Input() iconName: string = '';
} 