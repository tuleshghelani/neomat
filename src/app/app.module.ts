import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { ScrollService } from './services/scroll.service';
import { QualityComponent } from './components/quality/quality.component';
import { QualityIconComponent } from './shared/icons/quality-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    IndustriesComponent,
    ProductsComponent,
    QualityComponent,
    QualityIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService,ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
