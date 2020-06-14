import { ArticuloServices } from '../../../services/serviciosCliente/articuloServices/articuloServices';
import { Articulo } from 'src/app/entidades/Articulo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  pageActual: number = 1; //paginador
  articulos: Array<Articulo> = [];

  articulo: Articulo = {
    id: null,
    categoria: null,
    denominacion: null,
    es_catalogo: null,
    precio_de_venta: null,
    _url_Imagen: null,
  };

  constructor(public articulosService: ArticuloServices) {}

  async ngOnInit() {
    await this.getArticulos();
    console.log(this.articulos);
  }

  getArticulos() {
    this.articulosService.getAll().subscribe((data) => {
      this.articulos = data;
    });
  }
}
