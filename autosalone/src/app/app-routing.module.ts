import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrandComponent } from './pages/brand/brand.component';
import { SingleCarComponent } from './pages/single-car/single-car.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'brand/:brand',
    component: BrandComponent,
  },
  {
    path: 'car/:model',
    component: SingleCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
