import { Component, OnInit } from '@angular/core';
import { iCar } from '../../models/icar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '.app-car-intro',
  templateUrl: './car-intro.component.html',
  styleUrl: './car-intro.component.scss',
})
export class CarIntroComponent implements OnInit {
  car!: iCar;
  carBrand!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const carName = params['model'];

      fetch('db.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Errore nella fetch');
          }
        })
        .then((dati) => {
          this.car = dati.find(
            (car: iCar) => car.model.toLowerCase() === carName.toLowerCase()
          );
          this.carBrand = this.car.brand;
        })
        .catch((err) => console.log(err));
    });
  }

  handleCarBrand(brand: string) {
    return this.carBrand;
  }
}
