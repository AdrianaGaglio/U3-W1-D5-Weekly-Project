import { Component, Input, input, OnInit } from '@angular/core';
import { iCar } from '../../../models/icar';

@Component({
  selector: '.app-related-cars',
  templateUrl: './related-cars.component.html',
  styleUrl: './related-cars.component.scss',
})
export class RelatedCarsComponent implements OnInit {
  @Input() carBrand!: string;
  relatedCars: iCar[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella fetch');
        }
      })
      .then((dati) => {
        this.relatedCars = dati.filter(
          (car: iCar) => car.brand === this.carBrand
        );
      })
      .catch((err) => console.log(err));
  }
}
