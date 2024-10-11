import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iCar } from '../../models/icar';

@Component({
  selector: '.app-brand-intro',
  templateUrl: './brand-intro.component.html',
  styleUrl: './brand-intro.component.scss',
})
export class BrandIntroComponent implements OnInit {
  brand!: string;
  brandLogo!: string;

  cars: iCar[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.brand = params['brand'].toUpperCase();
      fetch('db.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Errore nella fetch');
          }
        })
        .then((dati: iCar[]) => {
          this.cars = dati.filter(
            (car: iCar) => car.brand.toLowerCase() === this.brand.toLowerCase()
          );
          this.brandLogo = this.cars[0].brandLogo;
        })
        .catch((err) => console.log(err));
    });
  }

  handleCars(cars: iCar[]) {
    return cars;
  }
}
