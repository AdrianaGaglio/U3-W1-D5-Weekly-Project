import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandComponent } from './pages/brand/brand.component';
import { HeroComponent } from './components/hero/hero.component';
import { IconsbarComponent } from './components/iconsbar/iconsbar.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrandIntroComponent } from './components/brand-intro/brand-intro.component';
import { BrandCarsComponent } from './components/brand-intro/brand-cars/brand-cars.component';
import { SingleCarComponent } from './pages/single-car/single-car.component';
import { CarIntroComponent } from './components/car-intro/car-intro.component';
import { RelatedCarsComponent } from './components/car-intro/related-cars/related-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BrandComponent,
    HeroComponent,
    IconsbarComponent,
    FeaturedComponent,
    MenuComponent,
    BrandIntroComponent,
    BrandCarsComponent,
    SingleCarComponent,
    CarIntroComponent,
    RelatedCarsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
