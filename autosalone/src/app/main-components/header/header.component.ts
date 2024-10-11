import { Component, OnInit } from '@angular/core';
import { iCar } from '../../models/icar';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  brands: string[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        return response.json();
      })
      .then((dati) => {
        dati.forEach((car: iCar) => {
          const brand: string = car.brand;
          if (this.brands.indexOf(brand) === -1) {
            this.brands.push(brand);
          }
        });
      })
      .catch((err) => console.log(err));
  }
}
