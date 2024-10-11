import { Component, OnInit } from '@angular/core';
import { iCar } from '../../models/icar';

@Component({
  selector: '.app-featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
})
export class FeaturedComponent implements OnInit {
  cars: iCar[] = [];
  desc = function (array: iCar[]) {
    return array.sort(function (a: iCar, b: iCar) {
      return b.price - a.price;
    });
  };

  ngOnInit(): void {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella fetch');
        }
      })
      .then((dati) => {
        this.desc(dati);
        for (let i = 0; i < 3; i++) {
          this.cars.push(dati[i]);
        }
      })
      .catch((err) => console.log(err));
  }
}
