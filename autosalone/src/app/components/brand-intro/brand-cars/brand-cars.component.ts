import { Component, Input, OnInit } from '@angular/core';
import { iCar } from '../../../models/icar';

@Component({
  selector: '.app-brand-cars',
  templateUrl: './brand-cars.component.html',
  styleUrl: './brand-cars.component.scss',
})
export class BrandCarsComponent {
  @Input() cars!: iCar[];
}
