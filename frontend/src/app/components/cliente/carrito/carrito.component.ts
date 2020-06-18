import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/entidades/Articulo';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.getArticulos();
  }

  articulos: Array<Articulo> = [];

  getArticulos() {
    let articulosStorage = localStorage.getItem('carrito');
    let articulosJson = JSON.parse(articulosStorage);
    articulosJson.forEach((element) => {
      this.articulos.push(element);
    });
    console.log('e', this.articulos);
  }
}
