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

  deleteArticulo(id) {
    let articulosStorage = localStorage.getItem('carrito');
    let articulosJson = JSON.parse(articulosStorage);
    let newJson: Array<string> = [];
    let found = false;
    articulosJson.forEach((element) => {
      if (id === element.id) {
        if (!found) {
          found = true;
        } else {
          newJson.push(element);
        }
      } else {
        newJson.push(element);
      }
    });
    let newJsonString = JSON.stringify(newJson);
    localStorage.setItem('carrito', newJsonString);
    this.articulos = [];
    this.getArticulos();
  }

  addArticulo(id, denominacion, url_imagen, precio_de_venta) {
    let articulosStorage = localStorage.getItem('carrito');
    let articulosJson = JSON.parse(articulosStorage);
    articulosJson.push({
      id: id,
      denominacion: denominacion,
      precio_de_venta: precio_de_venta,
      url_imagen: url_imagen,
    });
    let newJsonString = JSON.stringify(articulosJson);
    localStorage.setItem('carrito', newJsonString);
    this.articulos = [];
    this.getArticulos();
  }

  getArticulos() {
    let articulosStorage = localStorage.getItem('carrito');
    let articulosJson = JSON.parse(articulosStorage);
    articulosJson.forEach((element) => {
      this.articulos.push(element);
    });
    console.log('e', this.articulos);
  }
}
