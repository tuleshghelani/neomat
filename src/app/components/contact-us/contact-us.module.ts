import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsRoutingModule } from './contact-us-routing.module';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
