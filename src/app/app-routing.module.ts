import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'about-us', component: AboutUsComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'products', component: ProductsComponent },
  // { path: '**', redirectTo: '' }  // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
