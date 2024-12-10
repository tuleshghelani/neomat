import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatelogueComponent } from './catelogue.component';
import { CatelogueRoutingModule } from './catelogue-routing.module';


@NgModule({
  declarations: [CatelogueComponent],
  imports: [
    CommonModule,
    // FormsModule,
    CatelogueRoutingModule,
    ReactiveFormsModule
  ]
})
export class CatelogueModule { }
