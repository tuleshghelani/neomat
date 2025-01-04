import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ProductsComponent } from './components/products/products.component';
import { QualityComponent } from './components/quality/quality.component';
import { ProcessComponent } from './components/process/process.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'about-us', component: AboutUsComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', 
    loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule) 
  },
  { path: 'catalogue', 
    loadChildren: () => import('./components/catelogue/catelogue.module').then(m => m.CatelogueModule) 
  },
  { path: 'quality', component: QualityComponent }, 
  { path: 'process', component: ProcessComponent },
  // { path: '**', redirectTo: '' }  // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
