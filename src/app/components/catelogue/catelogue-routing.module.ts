// src/app/about-us/about-us-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatelogueComponent } from './catelogue.component';

const routes: Routes = [
  { path: '', component: CatelogueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatelogueRoutingModule { }
