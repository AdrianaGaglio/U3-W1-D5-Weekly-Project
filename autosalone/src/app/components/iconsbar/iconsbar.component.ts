import { Component, OnInit } from '@angular/core';
import { iCar } from '../../models/icar';
import { iBrand } from '../../models/ibrand';

@Component({
  selector: '.app-iconsbar',
  templateUrl: './iconsbar.component.html',
  styleUrl: './iconsbar.component.scss',
})
export class IconsbarComponent implements OnInit {
  brands: iBrand[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        return response.json();
      })
      .then((dati) => {
        dati.forEach((car: iCar, i: number) => {
          let brand: iBrand = {
            brandName: car.brand,
            brandLogo: car.brandLogo,
          };
          const brandNameToCheck: string = brand.brandName;
          if (
            !this.brands.find((brand) => brand.brandName === brandNameToCheck)
          ) {
            this.brands.push(brand);
          }
        });
      })
      .catch((err) => console.log(err));
  }
}
